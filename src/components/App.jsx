import Footer from "./Footer";
import MusicPlayer from "./MusicPlayer";

export default function App() {
  return (
    <div className="h-full flex flex-col justify-between p-8 min-h-screen transition-colors duration-300">
      <MusicPlayer />
      <Footer />
    </div>
  );
}
