import React from "react";
import { Slider } from "./slider";
import { VideoPlayer } from "./video-player";
import { MiniBrowser } from "./mini-browser/index.tsx";

export function Demo() {
  const [state, setState] = React.useState({
    currentIndex: 0,
    stepProgress: 0,
    isPlaying: true,
  });
  const playerRef = React.useRef();
  return (
    <div style={{ display: "flex" }}>
      <div style={{}}>
        <MiniBrowser url="https://whatismyviewport.com/" height={300} />
        <div
          style={{
            position: "relative",
            borderRadius: "50%",
            overflow: "hidden",
            height: 200,
            width: 200,
            margin: "15px auto",
          }}
        >
          <VideoPlayer
            ref={playerRef}
            steps={steps}
            style={{
              position: "absolute",
              transform: "translateX(-30px)",
            }}
            onChange={({ stepIndex, stepProgress }) =>
              setState((s) => ({ ...s, currentIndex: stepIndex, stepProgress }))
            }
          />
        </div>
        {state.currentIndex} - {state.stepProgress}
      </div>
      <div>{state.currentIndex}</div>
      <Slider
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
