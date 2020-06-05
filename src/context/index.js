import React from "react";
import { Toaster } from "./toaster";

function AppProviders({ children }) {
  return <Toaster>{children}</Toaster>;
}

export { AppProviders };
