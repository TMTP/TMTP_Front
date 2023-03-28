import "./src/styles/global.css";
import React from "react";
import { BrowserRouter } from "react-router-dom";

export const wrapRootElement = ({ element }) => (
  <BrowserRouter>{element}</BrowserRouter>
);
