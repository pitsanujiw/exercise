import { render, RenderResult } from "@testing-library/react";
import React, { ReactElement } from "react";

const customRender = (ui: ReactElement, options = {}): RenderResult =>
  render(ui, { ...options });

export * from "@testing-library/react";

export { customRender };
