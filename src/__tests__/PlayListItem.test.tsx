import React from "react";
import { render } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import PlayListItem from "../components/PlayListItem";

describe("PlayListItem Component", () => {
  it("renders with default props", () => {
    const { container } = render(<PlayListItem />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it("renders selected item with custom highlight", () => {
    const { container } = render(
      <PlayListItem selected title="Test" artist="Artist" length="4:00" highlightColor="#2ecc71" />
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it("renders unselected item with custom props", () => {
    const { container } = render(
      <PlayListItem title="Song" artist="Someone" length="3:30" selected={false} />
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});
