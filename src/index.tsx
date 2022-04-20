import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import AppWithAsynchronousRendering from "./AppWithAsynchronousRendering";

const container = document.getElementById("root");
// @ts-ignore
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <AppWithAsynchronousRendering />
  </React.StrictMode>
);
