import React from "react";
import { VideoPlayer } from "./video-player";
import { Slider } from "./slider";
import { PauseIcon, PlayIcon, LeftIcon, RightIcon } from "./icons";

export { Player };

function Player({ videoId, onChange, style, steps }) {
  const [state, setState] = React.useState({
    currentIndex: 0,
    stepProgress: 0,
    isPlaying: true,
  });
  const playerRef = React.useRef();
  return (
    <div
      style={{
        borderRadius: "6px",
        boxShadow:
          "0 13px 27px -5px rgba(50,50,93,.25), 0 8px 16px -8px rgba(0,0,0,.3), 0 -6px 16px -6px rgba(0,0,0,.025)",
        overflow: "hidden",
        background: "rgb(30, 30, 30)",
        position: "relative",
        ...style,
      }}
    >
      <div
        style={{
          position: "absolute",
          // borderRadius: "50%",
          overflow: "hidden",
          height: 185,
          width: 185,
          right: 10,
        }}
      >
        <div
          style={{
            position: "absolute",
            left: 2,
            right: 2,
            top: 2,
            bottom: 2,
            borderRadius: "50%",
            overflow: "hidden",
            background: "rgb(20,20,20)",
          }}
        >
          <VideoPlayer
            ref={playerRef}
            steps={steps}
            videoId={videoId}
            style={{
              transform: "translate(-74px, -278px)",
            }}
            onChange={({ stepIndex, stepProgress }) =>
              setState((s) => ({
                ...s,
                currentIndex: stepIndex,
                stepProgress,
              }))
            }
          />
        </div>
        <div
          style={{
            position: "absolute",
            height: "100%",
            width: "100%",
            backgroundImage: `radial-gradient(
              transparent 30%,
              rgb(20, 20, 20) 48%,
              rgb(30, 30, 30) 66%
            )`,
          }}
        ></div>
      </div>
      <div
        style={{
          position: "absolute",
          bottom: 0,
          width: "100%",
          // background: "salmon",
          // height: 20,
        }}
      >
        <div style={{ paddingLeft: 22 }}>
          <Button
            onClick={() => dispatch({ type: "prev" })}
            aria-label="Previous Step"
          >
            <LeftIcon style={{ display: "block" }} />
          </Button>
          <Button
            style={{ padding: "0 12px" }}
            onClick={() => {
              playerRef.current.pause();
              setState((s) => ({ ...s, isPlaying: !s.isPlaying }));
            }}
          >
            {state.isPlaying ? (
              <PauseIcon style={{ display: "block" }} aria-label="Pause" />
            ) : (
              <PlayIcon style={{ display: "block" }} aria-label="Play" />
            )}
          </Button>
          <Button
            onClick={() => dispatch({ type: "next" })}
            aria-label="Next Step"
          >
            <RightIcon style={{ display: "block" }} />
          </Button>
        </div>
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
          style={{ padding: "15px 30px 15px" }}
        />
      </div>
    </div>
  );
}

function Button(props) {
  return (
    <button
      {...props}
      style={{
        font: "inherit",
        background: "transparent",
        cursor: "pointer",
        userSelect: "none",
        padding: "1px 0",
        border: "none",
        color: "#7387c4",
        // height: "30px",
        ...props.style,
      }}
    />
  );
}
