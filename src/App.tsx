import Navbar from "./components/Navbar/Navbar";
import "./App.css";
import VideoContent from "./components/Main/VideoContent/VideoContent";
import MediumPage from "./components/Main/MediumPage/MediumPage";
import NightBackground from "./components/Main/MediumPage/NightBackground";

function App() {
  return (
    <div className="App">
      <header>
        <Navbar />
        <VideoContent />
      </header>
      <main className="main">
        <NightBackground>
          <MediumPage />
        </NightBackground> 
      </main>
    </div>
  );
}

export default App;
