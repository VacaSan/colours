import React from "react";
import { parseToRgb, readableColor, rgb, toColorString } from "polished";

const white = {
  red: 255,
  green: 255,
  blue: 255,
};

function App() {
  const [color, setColor] = React.useState(white);

  const onChange = (evt) => {
    try {
      const nextColor = parseToRgb(evt.target.value);
      setColor(nextColor);
    } catch (_) {
      // well, do nothing i guess...
    }
  };

  const backgroundColor = toColorString(color);
  const textColor = readableColor(rgb(color), "rgba(0,0,0,0.87)", "white");

  React.useEffect(() => {
    document.body.style.backgroundColor = backgroundColor;
    document.body.style.color = textColor;
  }, [backgroundColor, textColor]);

  return (
    <React.Fragment>
      <h1
        style={{
          position: "fixed",
          top: "1rem",
          left: "1rem",
          fontSize: 32,
          fontWeight: 500,
          lineHeight: 1.2,
          margin: 0,
        }}
      >
        <span role="img" aria-label="unicorn">
          🦄
        </span>
      </h1>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          width: "100vw",
          height: "100vh",
        }}
      >
        <input
          type="text"
          onChange={onChange}
          placeholder="hex/rgb(a)/hsl(a)"
          style={{
            display: "block",
            width: "100%",
            height: 48,
            maxWidth: 320,
            color: "inherit",
            fontSize: "1.5rem",
            background: "none",
            border: 0,
            borderBottom: "1px solid currentColor",
          }}
        />
      </div>
    </React.Fragment>
  );
}

export default App;
