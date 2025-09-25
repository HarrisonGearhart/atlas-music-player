import React from "react";
import { render } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import CoverArt from "../components/CoverArt";

describe("CoverArt Component", () => {
  it("renders placeholder when no song is selected", () => {
    const { container } = render(<CoverArt selectedSong={null} />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it("renders placeholder when song has no cover", () => {
    const songWithoutCover = {
      id: "1",
      title: "No Cover",
      artist: "Artist",
      cover: "",
      song: "test.mp3",
      duration: 180,
    };
    const { container } = render(<CoverArt selectedSong={songWithoutCover} />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it("renders with song cover", () => {
    const songWithCover = {
      id: "2",
      title: "Has Cover",
      artist: "Artist",
      cover: "https://example.com/cover.jpg",
      song: "test.mp3",
      duration: 200,
    };
    const { container } = render(<CoverArt selectedSong={songWithCover} />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
