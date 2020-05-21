export default function ErrorOverlay() {
  return (
    <div
      style={{
        position: "relative",
        display: "inline-flex",
        flexDirection: "column",
        height: "100%",
        width: "1024px",
        maxWidth: "100%",
        overflow: "hidden auto",
        padding: "0.5rem",
        boxSizing: "border-box",
        textAlign: "left",
        fontFamily: "Consolas, Menlo, monospace",
        fontSize: "11px",
        whiteSpace: "pre-wrap",
        wordBreak: "break-word",
        lineHeight: "1.5",
        color: "rgb(41, 50, 56)",
      }}
    >
      <div
        style={{
          fontSize: "2em",
          fontFamily: "Roboto, sans-serif",
          color: "rgb(206, 17, 38)",
        }}
      >
        TypeError: Cannot read property 'setState' of undefined
      </div>
      <div
        style={{
          fontSize: "1em",
          flex: "0 1 auto",
          minHeight: "0px",
          overflow: "auto",
          paddingTop: "1rem",
        }}
      >
        <div>handleNameChange</div>
        <div style={{ fontSize: "0.9em", color: "rgb(135, 142, 145)" }}>
          src/ClassExample.js
        </div>
        <pre
          style={{
            display: "block",
            padding: "0.5em",
            marginTop: "0.5em",
            marginBottom: "0.5em",
            overflowX: "auto",
            whiteSpace: "pre-wrap",
            borderRadius: "0.25rem",
            backgroundColor: "rgba(206, 17, 38, 0.05)",
            cursor: "pointer",
          }}
        >
          {`  10 | }
  11 | 
  12 | handleNameChange(e) {`}
          <div
            style={{ background: "rgb(252, 207, 207)", fontWeight: "bold" }}
          >{`> 13 |   this.setState({`}</div>
          {`     |       ^
  14 |     name: e.target.value
  15 |   });
  16 | }`}
        </pre>
      </div>
      <div
        style={{
          fontFamily: "sans-serif",
          color: "rgb(135, 142, 145)",
          marginTop: "0.5rem",
          flex: "0 0 auto",
        }}
      >
        This screen is visible only in development. It will not appear if the
        app crashes in production.
        <br />
        Open your browser’s developer console to further inspect this error.
        <br />
        This error overlay is powered by `react-error-overlay` used in
        `create-react-app`.
      </div>
    </div>
  );
}
