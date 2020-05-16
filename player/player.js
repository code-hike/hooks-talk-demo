import React from "react";
import { VideoPlayer } from "./video-player";

export { Player };

function Player({ videoId, onChange, style, steps }) {
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
          right: 0,
        }}
      >
        <div
          style={{
            position: "absolute",
            left: 5,
            right: 5,
            top: 5,
            bottom: 5,
            borderRadius: "50%",
            overflow: "hidden",
            background: "rgb(20,20,20)",
          }}
        >
          <VideoPlayer
            // ref={playerRef}
            steps={steps}
            videoId={videoId}
            style={{
              transform: "translate(-71px, -275px)",
            }}
            // onChange={({ stepIndex, stepProgress }) =>
            //   setState((s) => ({
            //     ...s,
            //     currentIndex: stepIndex,
            //     stepProgress,
            //   }))
            // }
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
    </div>
  );
}

// <div style={{ margin: 10 }}>
// <div
//   style={{
//     overflow: "hidden",
//     position: "absolute",
//     width: "100%",
//     height: "100%",
//   }}
// >
//   <VideoPlayer
//     // ref={playerRef}
//     steps={steps}
//     videoId={videoId}
//     style={{
//       transform: "translate(-67px, -286px)",
//       overflow: "hidden",
//     }}
//     // onChange={({ stepIndex, stepProgress }) =>
//     //   setState((s) => ({
//     //     ...s,
//     //     currentIndex: stepIndex,
//     //     stepProgress,
//     //   }))
//     // }
//   />
// </div>
// </div>
<div
  style={{
    position: "absolute",
    top: -100,
    left: -100,
    bottom: -10,
    right: -10,
    background: "white",
    //         backgroundImage: `radial-gradient(
    //   transparent 30%,
    //   rgb(30, 30, 30) 50%,
    //   rgb(30, 30, 30)
    // )`,
  }}
></div>;
