import React from "react";
import { render } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import VolumeControls from "../components/VolumeControls";

describe("VolumeControls Component", () => {
  it("renders with default volume 50", () => {
    const { container } = render(<VolumeControls volume={50} setVolume={() => {}} />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it("renders with volume 0", () => {
    const { container } = render(<VolumeControls volume={0} setVolume={() => {}} />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it("renders with volume 100", () => {
    const { container } = render(<VolumeControls volume={100} setVolume={() => {}} />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
