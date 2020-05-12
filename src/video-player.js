import React from "react";
import { useInterval } from "./use-interval";
import YouTube from "react-youtube";

export { VideoPlayer };

const VideoPlayer = React.forwardRef(({ steps, onChange }, parentRef) => {
  const opts = {
    height: "390",
    width: "640",
    playerVars: {
      controls: 0,
      autoplay: 1,
      fs: 0,
      start: steps[0].start,
    },
  };

  const playerRef = React.useRef({ player: null, state: initState(steps) });

  useInterval(() => {
    const { player, state } = playerRef.current;
    if (!player) return;

    const time = player.getCurrentTime();
    const { pause, seek } = state.tick(time);
    const newTime = state.getTime();

    if (pause) {
      player.pauseVideo();
    }

    if (seek) {
      player.seekTo(newTime, true);
    }

    onChange(state.get());
  }, 100);

  React.useImperativeHandle(parentRef, () => ({
    seek: (stepIndex, stepProgress, ahead) => {
      const { player, state } = playerRef.current;
      state.seek(stepIndex, stepProgress);
      const newTime = state.getTime();
      player.seekTo(newTime, true);
      onChange(state.get());
    },
    play: () => playerRef.current.player.playVideo(),
    pause: () => playerRef.current.player.pauseVideo(),
  }));

  return (
    <YouTube
      videoId="9cQT4urTlXM"
      opts={opts}
      onReady={({ target }) => {
        playerRef.current.player = target;
      }}
    />
  );
});

function initState(steps) {
  const state = {
    currentIndex: 0,
    stepProgress: 0,
  };

  return {
    get: () => ({
      stepIndex: state.currentIndex,
      stepProgress: state.stepProgress,
    }),
    getTime: () => {
      return steps[state.currentIndex].start + state.stepProgress;
    },
    seek: (stepIndex, stepProgress) => {
      state.currentIndex = stepIndex;
      state.stepProgress = stepProgress;
    },
    tick: (time) => {
      const currentStep = steps[state.currentIndex];
      const stepChanged = time >= currentStep.end;
      if (!stepChanged) {
        state.stepProgress = time - currentStep.start;
        return {};
      }

      const isLastStep = state.currentIndex === steps.length - 1;
      if (isLastStep) {
        state.stepProgress = currentStep.end - currentStep.start;
        return { pause: true };
      }

      const nextStep = steps[state.currentIndex + 1];
      const jump = currentStep.end !== nextStep.start;
      if (jump) {
        state.currentIndex++;
        state.stepProgress = 0;
        return { seek: true };
      } else {
        state.currentIndex++;
        state.stepProgress = time - nextStep.start;
        return {};
      }
    },
  };
}
