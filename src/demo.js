import React from "react";
import { Slider } from "./slider";
import { VideoPlayer } from "./video-player";

export function Demo() {
  const [state, setState] = React.useState({
    currentIndex: 0,
    stepProgress: 0,
  });
  const playerRef = React.useRef();
  return (
    <div style={{ display: "flex" }}>
      <div style={{}}>
        <VideoPlayer
          ref={playerRef}
          steps={steps}
          onChange={({ stepIndex, stepProgress }) =>
            setState({ currentIndex: stepIndex, stepProgress })
          }
        />
        {state.currentIndex} - {state.stepProgress}
      </div>
      <Slider
        inputSteps={steps}
        currentIndex={state.currentIndex}
        stepProgress={state.stepProgress}
        onChange={({ stepIndex, stepProgress }) =>
          playerRef.current.seek(stepIndex, stepProgress, false)
        }
      />
    </div>
  );
}

const steps = [
  { ...t("12:10-12:15") },
  { ...t("12:30-12:55") },
  { ...t("12:55-13:40") },
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
