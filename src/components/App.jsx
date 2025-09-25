import Footer from "./Footer";
import MusicPlayer from "./MusicPlayer";
import DarkModeToggle from "./DarkModeToggle";
import LoadingSkeleton from "./LoadingSkeleton";

function App() {
  return (
    <div className="h-full flex flex-col justify-between p-8 min-h-screen bg-[var(--color-midnight)] text-[var(--color-text)]">
      {/* Dark mode toggle in top-right corner */}
      <div className="flex justify-end mb-4">
        <DarkModeToggle />
      </div>

      <MusicPlayer />
      <Footer />
    </div>
  );
}

export default App;
