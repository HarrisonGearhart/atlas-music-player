import React from "react";
import { render } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import SongTitle from "../components/SongTitle";

describe("SongTitle Component", () => {
  it("renders with default props", () => {
    const { container } = render(<SongTitle />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it("renders with custom title and artist", () => {
    const { container } = render(<SongTitle title="Test Song" artist="Test Artist" />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it("renders with only title", () => {
    const { container } = render(<SongTitle title="Title Only" />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it("renders with only artist", () => {
    const { container } = render(<SongTitle artist="Artist Only" />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
