//components, css
import Navbar from "../../components/Navbar/Navbar";
import TopOfPage from "../../components/SecondPagePlanets/TopOfPage";
import Intercession from "../../components/Main/MediumPage/Intercession";
import Title from "../../components/GlobalComponents.tsx/Title";
import Paragraph from "../../components/GlobalComponents.tsx/Paragraph";
import NightBackground from "../../components/Main/MediumPage/NightBackground";
import CardExploring from "../../components/GlobalComponents.tsx/CardExploring";
import FinalPage from "../../components/Footer/FinalPage";
import CollectMeteorite from "../Planets/assets/images/collecting-meteorite.webp"


import "../Planets/css/PagePlanets.css";

//model
import ScrollToTop from "../../components/GlobalComponents.tsx/ScrollToTop";
import { Image } from "react-bootstrap";



const Meteors: React.FC = () => {
  return (
    <>
      <header>
        <Navbar />
        <TopOfPage
          planet="meteors-meteorites"
          cardTitle="Meteors"
          cardText="They’re all related to the flashes of light called “shooting stars” sometimes seen streaking across the sky. But we call the same object by different names, depending on where it is."
          className="flex justify-content-center"
          marginTopCard="0"
        />
      </header>
      <main>
        <Intercession
          children={
            <div>
              <Title content='What’s the difference between a meteoroid, a meteor, and a meteorite?'/>
              <Paragraph content="Meteoroids: Objects in space that range in size from dust grains to small asteroids."/>
              <Paragraph content="Meteors: When meteoroids enter Earth’s atmosphere (or that of another planet, like Mars) at high speed and burn up, the fireballs or “shooting stars” are called meteors." />
              <Paragraph content="Meteorites: When a meteoroid survives a trip through the atmosphere and hits the ground, it’s called a meteorite."/>
              <figure className="figure">
                <Image src={CollectMeteorite} className='w-100' alt='CollectingMeteorite'/>
                <figcaption className="figure-caption">Alex Meshik and Morgan Nunn Martinez collect a meteorite in Antarctica's Miller Range during the 2013-2014 ANSMET field season. ANSMET is the Antarctic Search for Meteorites program. Credit: NASA/JSC/ANSMET</figcaption>
              </figure>
              <Title content="FAQ: What is a Meteor Shower?" className="mb-3"/>
              <Paragraph content="Scientists estimate that about 48.5 tons (44 tonnes or 44,000 kilograms) of meteoritic material falls on Earth each day. Almost all the material is vaporized in Earth's atmosphere, leaving a bright trail fondly called 'shooting stars.' Several meteors per hour can usually be seen on any given night. Sometimes the number increases dramatically—these events are termed meteor showers." />  
            </div>
          }
        />
        <div className="container mb-5">
          <Paragraph content="KEEP EXPLORING" className="text-exploring mt-5" />
          <Title content="Discover More Topics" className="mb-5" />
          <div className="row justify-content-center">
            <CardExploring
              className="earth style-background"
              content="Earth"
              icon={<i className="bi bi-arrow-right"></i>}
              navigateRoute='/earth'
            />
            <CardExploring
              className="venus style-background"
              content="Venus"
              icon={<i className="bi bi-arrow-right"></i>}
              navigateRoute='/venus'
            />
            <CardExploring
              className="neptune style-background"
              content="Neptune"
              icon={<i className="bi bi-arrow-right"></i>}
              navigateRoute='/neptune'
            />
            <CardExploring
              className="mercury style-background"
              content="Mercury"
              icon={<i className="bi bi-arrow-right"></i>}
              navigateRoute='/mercury'
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

export default Meteors;