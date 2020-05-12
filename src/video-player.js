import React from "react";
import { useInterval } from "./use-interval";
import YouTube from "react-youtube";

export { VideoPlayer };

function VideoPlayer({ steps, onChange }) {
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

  const ref = React.useRef({ player: null, time: steps[0].start });
  const { stepIndex } = getStepProgressFromValue(steps, ref.current.time);
  const step = steps[stepIndex];

  useInterval(() => {
    const { player } = ref.current;
    if (!player) return;

    const prev = ref.current.time;
    const now = player.getCurrentTime();
    if (prev < step.end && step.end <= now) {
      if (stepIndex < steps.length - 1) {
        const newTime = steps[stepIndex + 1].start;
        player.seekTo(newTime);
        ref.current.time = newTime;
        onChange(getStepProgressFromValue(steps, newTime));
      } else {
        player.pause();
        ref.current.time = now;
        onChange(getStepProgressFromValue(steps, now));
      }
    } else {
      ref.current.time = now;
      onChange(getStepProgressFromValue(steps, now));
    }
  }, 100);

  const onReady = ({ target }) => {
    ref.current.player = target;
  };
  return <YouTube videoId="9cQT4urTlXM" opts={opts} onReady={onReady} />;
}

function getStepProgressFromValue(steps, value) {
  let i = 0;
  for (; i < steps.length - 1; i++) {
    if (value < steps[i].end) break;
  }
  return { stepIndex: i, stepProgress: value - steps[i].start };
}
