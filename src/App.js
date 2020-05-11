/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import React from "react";
import { parseToRgb, readableColor, toColorString } from "polished";
import * as colours from "./colours";
import { Tooltip } from "@reach/tooltip";
import { ErrorBoundary } from "react-error-boundary";

function FullPageErrorFallback({ error = null }) {
  return (
    <div
      css={css`
        display: flex;
        height: 100vh;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding: 0 1rem;
        background-color: #f55;
      `}
    >
      <p
        css={css`
          font-size: 1.25rem;
          font-weight: bold;
          line-height: 2;
          text-align: center;
        `}
      >
        Whoops! Something went terribly wrong{" "}
        <span role="img" aria-label="sad">
          (๑◕︵◕๑)
        </span>
        <br />
        Try refreshing the app.
      </p>
      <pre>{error?.message}</pre>
    </div>
  );
}

const white = {
  red: 255,
  green: 255,
  blue: 255,
};

function App() {
  const [color, setColor] = React.useState(white);

  /**
   * @param {React.ChangeEvent<HTMLInputElement>} evt
   */
  const onChange = evt => {
    try {
      const nextColor = parseToRgb(evt.target.value);
      setColor(nextColor);
    } catch (_) {
      // well, do nothing i guess...
    }
  };

  const backgroundColor = toColorString(color);
  const textColor = readableColor(backgroundColor, "rgba(0,0,0,0.87)", "white");

  React.useEffect(() => {
    document.body.style.backgroundColor = backgroundColor;
    document.body.style.color = textColor;
  }, [backgroundColor, textColor]);

  return (
    <ErrorBoundary FallbackComponent={FullPageErrorFallback}>
      <h1
        css={css`
          position: fixed;
          top: 1rem;
          left: 1rem;
          margin: 0;
        `}
      >
        <span role="img" aria-label="unicorn">
          🦄
        </span>{" "}
        colours.
      </h1>
      <div
        css={css`
          display: flex;
          align-items: center;
          justify-content: center;
          flex-direction: column;
          width: 100vw;
          height: 100vh;
          padding: 0 1rem;
        `}
      >
        <div>
          <ColorInput onChange={onChange} />
          <ColorNotations color={color} />
        </div>
      </div>
    </ErrorBoundary>
  );
}

/**
 * @param {object} props
 * @param {(evt: React.ChangeEvent<HTMLInputElement>) => any} props.onChange
 */
function ColorInput({ onChange }) {
  return (
    <div
      css={css`
        position: relative;
      `}
    >
      <label
        htmlFor="color"
        css={css`
          position: absolute;
          border: 0;
          clip: rect(0 0 0 0);
          height: 1px;
          margin: -1px;
          overflow: hidden;
          padding: 0;
          width: 1px;
        `}
      >
        Color:
      </label>
      <input
        type="text"
        id="color"
        onChange={onChange}
        placeholder="hex/rgb(a)/hsl(a)"
        css={css`
          display: block;
          width: 100%;
          min-width: 24ch;
          height: 2em;
          color: inherit;
          font-size: 1.5rem;
          background: none;
          border: 0;
          border-bottom: 1px solid currentColor;
          outline: none;
          ::placeholder {
            color: currentColor;
            opacity: 0.5;
          }
        `}
      />
      <div
        css={css`
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 2px;
          background-color: currentColor;
          transform-origin: center bottom;
          transform: scale(0);
          transition: transform 120ms;
          input:focus + & {
            transform: scale(1);
          }
        `}
      />
    </div>
  );
}

// TODO rename to something meaningful
function Output(props) {
  return (
    <Tooltip
      label="Click to copy"
      css={css`
        font-size: 1rem;
        padding: 0.5em 1em;
        background-color: white;
        border-radius: 0.25em;
        border: 0;
        box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19),
          0 6px 6px rgba(0, 0, 0, 0.23);
      `}
    >
      <button
        css={css`
          display: block;
          width: 100%;
          min-width: 24ch;
          height: 2em;
          padding: 0;
          margin: 0;
          color: inherit;
          font-size: 1.5rem;
          text-align: left;
          background: none;
          border: 0;
          border-bottom: 1px dashed currentColor;
          outline: none;
          cursor: pointer;
        `}
        onClick={copyToClipboard}
        {...props}
      />
    </Tooltip>
  );
}

/**
 * @param {object} props
 * @param {import("./colours").Colour} props.color
 */
function ColorNotations({ color }) {
  return (
    <ul
      css={css`
        width: 100%;
        list-style: none;
        padding: 0.5rem 0;
        margin: 0;
        font-size: 1.5rem;
        line-height: 2;
      `}
    >
      {["hex", "rgba", "hsla"].map(formatName => {
        const format = colours[formatName];
        return (
          <li key={formatName}>
            <Output>{format(color)}</Output>
          </li>
        );
      })}
    </ul>
  );
}

function copyToClipboard(evt) {
  const text = evt.target.textContent;
  // Check if there is any content selected previously
  // and store selection if found
  const selected =
    document.getSelection().rangeCount > 0
      ? document.getSelection().getRangeAt(0)
      : false;

  const el = document.createElement("textarea");
  el.value = text;
  el.setAttribute("readonly", "");
  el.style.position = "absolute";
  el.style.left = "-9999px";
  document.body.appendChild(el);
  el.select();
  document.execCommand("copy");
  document.body.removeChild(el);

  if (selected) {
    document.getSelection().removeAllRanges();
    document.getSelection().addRange(selected);
  }
}

export default App;
