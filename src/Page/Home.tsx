import FinalPage from "../components/Footer/FinalPage";
import CardContainer from "../components/Main/MediumPage/CardContainer";
import Intercession from "../components/Main/MediumPage/Intercession";
import MediumPage from "../components/Main/MediumPage/MediumPage";
import NightBackground from "../components/Main/MediumPage/NightBackground";
import ParallaxContent from "../components/Main/ParallaxContent/ParallaxContent";
import VideoContent from "../components/Main/VideoContent/VideoContent";
import Navbar from "../components/Navbar/Navbar";


const Home: React.FC = () => {
  return (
    <div>
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
};

export default Home
