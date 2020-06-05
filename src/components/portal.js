import React from "react";
import ReactDOM from "react-dom";

function Portal({ children }) {
  const [, forceUpdate] = React.useState();
  const container = React.useRef(null);

  React.useLayoutEffect(() => {
    container.current = document.createElement("div");
    document.body.appendChild(container.current);
    forceUpdate({});
    return () =>
      container.current && document.body.removeChild(container.current);
  }, []);

  return (
    container.current && ReactDOM.createPortal(children, container.current)
  );
}

export { Portal };
