import React from "react";

const view = (
  <SmoothView>
    <Row>
      <Column width={400}>
        <SmoothBrowser url="/step1" />
        <SmoothVideo clip="12:31-12:50" />
      </Column>
      <SmoothEditor
        width={400}
        files={{ "ClassExample.js": "" }}
        active={"ClassExample.js"}
      />
      <ProgressRange />
    </Row>
  </SmoothView>
);
