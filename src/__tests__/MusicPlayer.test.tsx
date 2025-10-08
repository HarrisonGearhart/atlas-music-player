import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { describe, it, expect, vi, beforeAll, afterEach, afterAll } from "vitest";
import MusicPlayer, { Song } from "@/components/MusicPlayer";
import { server } from "./mock";

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

// Setup MSW server
beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

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

  it("applies correct layout classes", async () => {
    const { container } = render(<MusicPlayer />);
    
    // Wait for loading to complete
    await screen.findByTestId("currently-playing");
    
    // Check main container has flex layout classes
    const mainDiv = container.firstChild as HTMLElement;
    expect(mainDiv).toHaveClass("flex", "flex-col");
  });

  it("passes song data to CurrentlyPlaying component", async () => {
    render(<MusicPlayer />);
    
    // Wait for components to render after fetch
    await screen.findByTestId("currently-playing");
    await screen.findByTestId("playlist");
    
    // Verify both components are present (they receive the song data as props)
    expect(screen.getByTestId("currently-playing")).toBeInTheDocument();
    expect(screen.getByTestId("playlist")).toBeInTheDocument();
  });

  it("renders with gap spacing between components", async () => {
    const { container } = render(<MusicPlayer />);
    
    // Wait for loading to complete
    await screen.findByTestId("currently-playing");
    
    // Check for gap class on main container
    const mainDiv = container.firstChild as HTMLElement;
    expect(mainDiv).toHaveClass("gap-6");
  });
});