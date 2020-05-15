import React from "react";

export { SmoothView };

function SmoothView({ children, stepIndex }) {
  const kids = React.Children.toArray(children);
  return kids[stepIndex];
}
