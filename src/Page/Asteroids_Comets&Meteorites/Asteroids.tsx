//components, css
import Navbar from "../../components/Navbar/Navbar";
import TopOfPage from "../../components/SecondPagePlanets/TopOfPage";
import NightBackground from "../../components/Main/MediumPage/NightBackground";
import FinalPage from "../../components/Footer/FinalPage";
import Intercession from "../../components/Main/MediumPage/Intercession";
import Paragraph from "../../components/GlobalComponents.tsx/Paragraph";
import Title from "../../components/GlobalComponents.tsx/Title";
import CardExploring from "../../components/GlobalComponents.tsx/CardExploring";
import "../Planets/css/PagePlanets.css";

//asteroids
import Bennu from "../Planets/assets/images/asteroids-card/asteroid-bennu.webp"
import Apophis from "../Planets/assets/images/asteroids-card/asteroid-apophis.webp"
import DidymosAndDimorpho from "../Planets/assets/images/asteroids-card/asteroid-didymos-and-dimorphos.webp"
import Eros from "../Planets/assets/images/asteroids-card/asteroid-eros.webp"
import Psyche from "../Planets/assets/images/asteroids-card/asteroid-psyche.webp"
import Vesta from "../Planets/assets/images/asteroids-card/asteroid-vesta.webp"
import Itokawa from "../Planets/assets/images/asteroids-card/asteroid-itokawa.webp"
import Ida from "../Planets/assets/images/asteroids-card/asteroid-ida.webp"


//model
import AsteroidModel from "../Planets/assets/models/asteroid.glb";
import ScrollToTop from "../../components/GlobalComponents.tsx/ScrollToTop";
import SimpleCard from "../../components/GlobalComponents.tsx/SimpleCard";

const Asteroids: React.FC = () => {
  return (
    <>
      <header>
        <Navbar />
        <TopOfPage
          planet="asteroids"
          cardTitle="Asteroids"
          cardText="They’re all related to the flashes of light called “shooting stars” sometimes seen streaking across the sky. But we call the same object by different names, depending on where it is."
          className="flex justify-content-center"
          marginTopCard="0"
        />
      </header>
      <main>
        <Intercession
          children={
            <div>
              <Title content="Overview" />
              <Paragraph content="Asteroids, sometimes called minor planets, are rocky, airless remnants left over from the early formation of our solar system about 4.6 billion years ago." />
              <Paragraph content="The current known asteroid count is: 1,308,871" />
              <Paragraph content="Most of this ancient space rubble can be found orbiting the Sun between Mars and Jupiter within the main asteroid belt. Asteroids range in size from Vesta – the largest at about 329 miles (530 kilometers) in diameter – to bodies that are less than 33 feet (10 meters) across. The total mass of all the asteroids combined is less than that of Earth's Moon." />
              <NightBackground>
                <model-viewer
                  disable-tap
                  auto-rotate
                  shadow-intensity="1"
                  id="model-planet"
                  src={AsteroidModel}
                  alt="Asteroid model 3D"
                  camera-controls
                ></model-viewer>
              </NightBackground>
              <div className="align-self-start model-description">
                <Paragraph
                  content="A 3D model of Asteroid."
                  className="text-secondary m-0"
                />
                <Paragraph content="Use our technology and have fun!" />
              </div>
              <Title content="Did You Know ?" className="mb-3" />
              <Paragraph content="The total mass of all the asteroids in the main asteroid belt combined is less than that of Earth's Moon." />
            </div>
          }
        />
        <div className="container mb-5">
          <Title content="Featured Asteroids" />
          <div className="row justify-content-center">
            <SimpleCard 
            src={Psyche}
            title='Psyche'/>
            <SimpleCard 
            src={Eros}
            title='Eros'/>
            <SimpleCard 
            src={DidymosAndDimorpho}
            title='DidymosAndDimorpho'/>
            <SimpleCard 
            src={Bennu}
            title='Bennu'/>
            <SimpleCard 
            src={Apophis}
            title='Apophis'/>
            <SimpleCard 
            src={Vesta}
            title='Vesta'/>
            <SimpleCard 
            src={Itokawa}
            title='Itokawa'/>
            <SimpleCard 
            src={Ida}
            title='Ida'/>
          </div>
          <Paragraph content="KEEP EXPLORING" className="text-exploring mt-5" />
          <Title content="Discover More Topics" className="mb-5" />
          <div className="row justify-content-center">
            <CardExploring
              className="earth style-background"
              content="Earth"
              icon={<i className="bi bi-arrow-right"></i>}
              navigateRoute="/earth"
            />
            <CardExploring
              className="venus style-background"
              content="Venus"
              icon={<i className="bi bi-arrow-right"></i>}
              navigateRoute="/venus"
            />
            <CardExploring
              className="neptune style-background"
              content="Neptune"
              icon={<i className="bi bi-arrow-right"></i>}
              navigateRoute="/neptune"
            />
            <CardExploring
              className="mercury style-background"
              content="Mercury"
              icon={<i className="bi bi-arrow-right"></i>}
              navigateRoute="/mercury"
            />
          </div>
        </div>
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

export default Asteroids;
