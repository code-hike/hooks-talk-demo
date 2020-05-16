import React from "react";
import { Slider } from "../player/slider";
import { VideoPlayer } from "../player/video-player";
import { MiniBrowser } from "./mini-browser/index.tsx";
import Demo0 from "../guide/0.0.class";
import Demo1 from "../guide/0.1.class";
import Demo2 from "../guide/0.2.class";
import { SmoothView } from "./smooth-view";
import { MiniEditor } from "./mini-editor/mini-editor";
import code0 from "!!raw-loader!../guide/0.0.class.js";
import code1 from "!!raw-loader!../guide/0.1.class.js";
import code2 from "!!raw-loader!../guide/0.2.class.js";
import { Player } from "../player/player";

export function Demo() {
  const [state, setState] = React.useState({
    currentIndex: 0,
    stepProgress: 0,
    isPlaying: true,
  });
  const playerRef = React.useRef();
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
          files={["index.js"]}
          active="index.js"
          style={{ width: 500 }}
        >
          <SmoothView stepIndex={state.currentIndex}>
            <pre>{code0}</pre>
            <pre>{code1}</pre>
            <pre>{code2}</pre>
          </SmoothView>
        </MiniEditor>
        <div style={{ width: 30 }} />
        <div style={{}}>
          <MiniBrowser url="http://localhost:3000/" height={385}>
            <div className="demo-container">
              <SmoothView stepIndex={state.currentIndex}>
                <Demo0 name={`Marty`} />
                <Demo1 />
                <Demo2 />
              </SmoothView>
            </div>
          </MiniBrowser>
          <div style={{ height: 30 }} />
          <Player videoId="dpw9EHDh2bM" style={{ height: 185 }} steps={steps} />
          {/* <div
            style={{
              position: "relative",
              borderRadius: "8px",
              overflow: "hidden",
              height: 185,
              width: 285,
              margin: "15px auto",
            }}
          >
            <VideoPlayer
              ref={playerRef}
              steps={steps}
              videoId="dpw9EHDh2bM"
              style={{
                position: "absolute",
                transform: "translate(-67px, -288px)",
              }}
              onChange={({ stepIndex, stepProgress }) =>
                setState((s) => ({
                  ...s,
                  currentIndex: stepIndex,
                  stepProgress,
                }))
              }
            />
          </div> */}
        </div>
        {/* <Slider
          inputSteps={steps}
          currentIndex={state.currentIndex}
          stepProgress={state.stepProgress}
          isPlaying={state.isPlaying}
          onChange={({ stepIndex, stepProgress }) =>
            playerRef.current.seek(stepIndex, stepProgress, false)
          }
          play={() => {
            playerRef.current.play();
            setState((s) => ({ ...s, isPlaying: true }));
          }}
          pause={() => {
            playerRef.current.pause();
            setState((s) => ({ ...s, isPlaying: false }));
          }}
        /> */}
      </div>
    </div>
  );
}

const steps = [
  { ...t("18:03-18:26") },
  { ...t("18:26-19:16") },
  { ...t("17:50-18:03") },
  { ...t("19:20-20:03") },
  { ...t("20:20-22:03") },
];

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
