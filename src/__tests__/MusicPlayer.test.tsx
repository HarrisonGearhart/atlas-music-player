import { render, screen } from "@testing-library/react";
import MusicPlayer, { Song } from "@/components/MusicPlayer";

// Mock the child components
vi.mock("@/components/CurrentlyPlaying", () => ({
  default: (props: any) => <div data-testid="currently-playing">CurrentlyPlaying</div>,
}));

vi.mock("@/components/Playlist", () => ({
  default: (props: any) => <div data-testid="playlist">Playlist</div>,
}));

vi.mock("@/components/LoadingSkeleton", () => ({
  default: () => <div data-testid="loading">LoadingSkeleton</div>,
}));

describe("MusicPlayer", () => {
  it("renders LoadingSkeleton initially", () => {
    render(<MusicPlayer />);
    expect(screen.getByTestId("loading")).toBeInTheDocument();
  });

  it("renders CurrentlyPlaying and Playlist after loading", async () => {
    render(<MusicPlayer />);

    // Wait for the fetch to complete
    const currentlyPlaying = await screen.findByTestId("currently-playing");
    const playlist = await screen.findByTestId("playlist");

    expect(currentlyPlaying).toBeInTheDocument();
    expect(playlist).toBeInTheDocument();
  });
});
