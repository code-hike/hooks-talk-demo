import Demo0 from "../guide/0.0";
import Demo1 from "../guide/0.11.demo";
import Demo2 from "../guide/0.2.class";

async function changeText(element) {
  await mouseAppearAt(x);
  await mouseMoveTo(element.position);
  await clickOn(element);
}

const steps = [
  {
    player: { ...t("17:50-18:04"), hide: true },
    demo: <Demo0 name={`Mary`} />,
    editor: {
      code: require("!!raw-loader!../guide/0.0.js").default,
      lang: "jsx",
      file: "ClassExample.js",
      focus: undefined,
      tabs: ["ClassExample.js"],
    },
  },
  {
    player: { ...t("18:04-18:23") },
    demo: <Demo0 name={`Mary`} />,
    editor: {
      code: require("!!raw-loader!../guide/0.0.js").default,
      lang: "jsx",
      file: "ClassExample.js",
      focus: undefined,
      tabs: ["ClassExample.js"],
    },
  },
  {
    player: { ...t("18:25-18:39") },
    demo: <Demo0 name={`Mary`} />,
    editor: {
      code: require("!!raw-loader!../guide/0.1.js").default,
      lang: "jsx",
      file: "ClassExample.js",
      focus: undefined,
      tabs: ["ClassExample.js"],
    },
  },
  {
    player: { ...t("18:39-18:44") },
    demo: <Demo0 name={`Mary`} />,
    editor: {
      code: require("!!raw-loader!../guide/0.2.js").default,
      lang: "jsx",
      file: "ClassExample.js",
      focus: undefined,
      tabs: ["ClassExample.js"],
    },
  },
  {
    player: { ...t("18:44-18:55") },
    demo: <Demo0 name={`Mary`} />,
    editor: {
      code: require("!!raw-loader!../guide/0.3.js").default,
      lang: "jsx",
      file: "ClassExample.js",
      focus: undefined,
      tabs: ["ClassExample.js"],
    },
  },
  {
    player: { ...t("18:55-18:59") },
    demo: <Demo0 name={`Mary`} />,
    editor: {
      code: require("!!raw-loader!../guide/0.4.js").default,
      lang: "jsx",
      file: "ClassExample.js",
      focus: undefined,
      tabs: ["ClassExample.js"],
    },
  },
  {
    player: { ...t("19:09-19:15") },
    demo: <Demo0 name={`Mary`} />,
    editor: {
      code: require("!!raw-loader!../guide/0.5.js").default,
      lang: "jsx",
      file: "ClassExample.js",
      focus: undefined,
      tabs: ["ClassExample.js"],
    },
  },
  {
    player: { ...t("19:15-19:18") },
    demo: <Demo0 name={`Mary`} />,
    editor: {
      code: require("!!raw-loader!../guide/0.6.js").default,
      lang: "jsx",
      file: "ClassExample.js",
      focus: undefined,
      tabs: ["ClassExample.js"],
    },
  },
  {
    player: { ...t("19:18-19:24") },
    demo: <Demo0 name={`Mary`} />,
    editor: {
      code: require("!!raw-loader!../guide/0.7.js").default,
      lang: "jsx",
      file: "ClassExample.js",
      focus: undefined,
      tabs: ["ClassExample.js"],
    },
  },
  {
    player: { ...t("19:24-19:33") },
    demo: <Demo0 name={`Mary`} />,
    editor: {
      code: require("!!raw-loader!../guide/0.8.js").default,
      lang: "jsx",
      file: "ClassExample.js",
      focus: undefined,
      tabs: ["ClassExample.js"],
    },
  },
  {
    player: { ...t("19:33-19:40") },
    demo: <Demo0 name={`Mary`} />,
    editor: {
      code: require("!!raw-loader!../guide/0.9.js").default,
      lang: "jsx",
      file: "ClassExample.js",
      focus: undefined,
      tabs: ["ClassExample.js"],
    },
  },
  {
    player: { ...t("19:40-19:44") },
    demo: <Demo0 name={`Mary`} />,
    editor: {
      code: require("!!raw-loader!../guide/0.10.js").default,
      lang: "jsx",
      file: "ClassExample.js",
      focus: undefined,
      tabs: ["ClassExample.js"],
    },
  },
  {
    player: { ...t("19:44-19:54") },
    demo: <Demo0 name={`Mary`} />,
    editor: {
      code: require("!!raw-loader!../guide/0.10.js").default,
      lang: "jsx",
      file: "ClassExample.js",
      focus: undefined,
      tabs: ["ClassExample.js"],
    },
  },
  {
    player: { ...t("19:54-19:59") },
    demo: <Demo0 name={`Mary`} />,
    editor: {
      code: require("!!raw-loader!../guide/0.11.js").default,
      lang: "jsx",
      file: "ClassExample.js",
      focus: undefined,
      tabs: ["ClassExample.js"],
    },
  },
  {
    player: { ...t("19:59-20:20") },
    demo: <Demo1 />,
    editor: {
      code: require("!!raw-loader!../guide/0.11.js").default,
      lang: "jsx",
      file: "ClassExample.js",
      focus: undefined,
      tabs: ["ClassExample.js"],
    },
  },
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

export const playerSteps = steps.map((s) => s.player);
export const editorSteps = steps.map((s) => s.editor);
export const browserSteps = steps.map((s) => (
  <div className="demo-container">{s.demo}</div>
));
