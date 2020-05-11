import "./bootstrap";
import React from "react";
import { render } from "react-dom";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

serviceWorker.register({
  onUpdate(registration) {
    if (window.confirm("New version available. Update now?")) {
      const registrationWaiting = registration.waiting;
      if (registrationWaiting) {
        registrationWaiting.postMessage({ type: "SKIP_WAITING" });
        registrationWaiting.addEventListener("statechange", evt => {
          if (evt.target.state === "activated") {
            window.location.reload();
          }
        });
      }
    }
  },
});

document.addEventListener("visibilitychange", () => {
  if (document.visibilityState === "visible") {
    serviceWorker.register({ immediate: true });
  }
});
