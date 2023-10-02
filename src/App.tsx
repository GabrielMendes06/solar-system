import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import VideoContent from "./components/Main/VideoContent/VideoContent";
import MediumPage from "./components/Main/MediumPage/MediumPage";
import NightBackground from "./components/Main/MediumPage/NightBackground";
import ParallaxContent from "./components/Main/ParallaxContent/ParallaxContent";
import Intercession from "./components/Main/MediumPage/Intercession";
import CardContainer from "./components/Main/MediumPage/CardContainer";
import FinalPage from "./components/Footer/FinalPage";

function App() {
  return (
    <div className="App">
      <header>
        <Navbar />
        <VideoContent />
      </header>
      <main className="main">
        <Intercession />
        <NightBackground>
          <MediumPage />
        </NightBackground>
        <ParallaxContent />
        <NightBackground>
          <CardContainer />
        </NightBackground>
      </main>
      <footer>
        <NightBackground>
          <FinalPage />
        </NightBackground>
      </footer>
    </div>
  );
}

export default App;
