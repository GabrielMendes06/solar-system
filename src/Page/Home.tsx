import FinalPage from "../components/Footer/FinalPage";
import Paragraph from "../components/GlobalComponents.tsx/Paragraph";
import ScrollToTop from "../components/GlobalComponents.tsx/ScrollToTop";
import CardContainer from "../components/Main/MediumPage/CardContainer";
import Intercession from "../components/Main/MediumPage/Intercession";
import MediumPage from "../components/Main/MediumPage/MediumPage";
import NightBackground from "../components/Main/MediumPage/NightBackground";
import ParallaxContent from "../components/Main/ParallaxContent/ParallaxContent";
import VideoContent from "../components/Main/VideoContent/VideoContent";
import Navbar from "../components/Navbar/Navbar";

const Home: React.FC = () => {
  return (
    <>
      <header>
        <Navbar />
        <VideoContent />
      </header>
      <main className="main">
        <Intercession
          children={
            <>
              <Paragraph content="The solar system can be divided into three regions: the inner solar system, the outer solar system, and the Kuiper Belt and Oort Cloud." />
              <Paragraph content="The inner, rocky planets are Mercury, Venus, Earth, and Mars. These worlds also are known as terrestrial planets because they have solid surfaces. Mercury, Earth, and Mars are currently being explored by spacecraft. Two rovers are on the surface of Mars. NASA's newest rover — Perseverance — landed on Mars on Feb. 18, 2021. Three missions are in development to return to Venus." />
              <Paragraph content="The outer planets are gas giants Jupiter and Saturn and ice giants Uranus and Neptune. NASA's Juno spacecraft is on an extended mission at Jupiter and ESA's JUICE mission is on the way. NASA also is building Europa Clipper and Dragonfly to explore moons of Jupiter and Saturn." />
              <Paragraph
                content="Beyond Neptune, a newer class of smaller worlds called dwarf planets reign, including longtime favorite Pluto. NASA's New Horizons spacecraft visited there in 2015, and is currently exploring the Kuiper Belt beyond Pluto. Thousands more planets have been discovered beyond our solar system. Scientists call them exoplanets (exo means 'from outside')."
                className="mb-0"
              />
            </>
          }
        />
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
      <ScrollToTop />
    </>
  );
};

export default Home;
