import React from "react";
import { MiniBrowser } from "./mini-browser/index.tsx";
import Demo0 from "../guide/0.0.class";
import Demo1 from "../guide/0.1.class";
import Demo2 from "../guide/0.2.class";
import { SmoothView } from "./smooth-view";
import { MiniEditor } from "./mini-editor/mini-editor";
import { Player } from "../player/player";
import { useSpring } from "use-spring";

export function Demo() {
  const [state, setState] = React.useState({
    currentIndex: 0,
    stepProgress: 0,
    isPlaying: true,
  });

  const stepNormalProgress =
    state.stepProgress / steps[state.currentIndex].duration;

  const [progress] = useSpring(state.currentIndex);

  console.log(
    { progress, stepNormalProgress },
    state.stepProgress,
    steps[state.currentIndex].duration
  );
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        height: "calc(100vh - 16px)",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          height: 600,
          width: "100%",
        }}
      >
        <MiniEditor
          style={{ width: 600 }}
          progress={progress}
          steps={steps.map((s) => s.editor)}
        />
        <div style={{ width: 30 }} />
        <div style={{}}>
          <MiniBrowser url="http://localhost:3000/" height={385}>
            <div className="demo-container">
              {steps[state.currentIndex].demo}
            </div>
          </MiniBrowser>
          <div style={{ height: 30 }} />
          <Player
            videoId="dpw9EHDh2bM"
            style={{ height: 185 }}
            steps={steps}
            stepIndex={state.currentIndex}
            stepProgress={state.stepProgress}
            isPlaying={state.isPlaying}
            onChange={({ stepIndex, stepProgress, isPlaying }) =>
              setState(() => ({
                isPlaying,
                currentIndex: stepIndex,
                stepProgress,
              }))
            }
          />
        </div>
      </div>
    </div>
  );
}

const steps = [
  {
    ...t("18:03-18:26"),
    demo: <Demo0 name={`Marty`} />,
    editor: {
      code: require("!!raw-loader!../guide/0.0.class.js").default,
      lang: "jsx",
      file: "ClassExample.js",
      focus: undefined,
      tabs: ["ClassExample.js"],
    },
  },
  {
    ...t("18:26-19:16"),
    demo: <Demo1 />,
    editor: {
      code: require("!!raw-loader!../guide/0.1.class.js").default,
      lang: "jsx",
      file: "ClassExample.js",
      focus: undefined,
      tabs: ["ClassExample.js"],
    },
  },
  {
    ...t("17:50-18:03"),
    demo: <Demo2 />,
    editor: {
      code: require("!!raw-loader!../guide/0.2.class.js").default,
      lang: "jsx",
      file: "ClassExample.js",
      focus: undefined,
      tabs: ["ClassExample.js"],
    },
  },
  {
    ...t("19:20-20:03"),
    demo: <Demo1 />,
    editor: {
      code: require("!!raw-loader!../guide/0.1.class.js").default,
      lang: "jsx",
      file: "ClassExample.js",
      focus: undefined,
      tabs: ["ClassExample.js"],
    },
  },
  {
    ...t("20:20-22:03"),
    demo: <Demo0 name={`Harry`} />,
    editor: {
      code: require("!!raw-loader!../guide/0.0.class.js").default,
      lang: "jsx",
      file: "ClassExample.js",
      focus: undefined,
      tabs: ["ClassExample.js"],
    },
  },
];

console.log({ steps });

function t(ts) {
  const [startString, endString] = ts.split("-");
  const start = parseTime(startString);
  const end = parseTime(endString);
  const duration = end - start;
  return { start, end, duration };
}
function parseTime(string) {
  const [m, s] = string.split(":");
  return +m * 60 + +s;
}
