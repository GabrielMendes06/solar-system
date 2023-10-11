//components, css
import Navbar from "../../components/Navbar/Navbar";
import TopOfPage from "../../components/SecondPagePlanets/TopOfPage";
import NightBackground from "../../components/Main/MediumPage/NightBackground";
import FinalPage from "../../components/Footer/FinalPage";
import Intercession from "../../components/Main/MediumPage/Intercession";
import Paragraph from "../../components/GlobalComponents.tsx/Paragraph";
import Title from "../../components/GlobalComponents.tsx/Title";
import CardExploring from "../../components/GlobalComponents.tsx/CardExploring";
import Europa from "../Planets/assets/images/moons-card/europa.webp";
import Ganymede from "../Planets/assets/images/moons-card/ganymede.webp";
import Callisto from "../Planets/assets/images/moons-card/callisto.webp";
import Io from "../Planets/assets/images/moons-card/io.webp"; 
import "../Planets/css/PagePlanets.css";

//model
import ScrollToTop from "../../components/GlobalComponents.tsx/ScrollToTop";
import SimpleCard from "../../components/GlobalComponents.tsx/SimpleCard";

const JupiterMoon: React.FC = () => {
  return (
    <>
      <header>
        <Navbar />
        <TopOfPage
          planet="jupiter-moon"
          cardTitle="Moons of Jupiter"
          cardText="By most counts, Jupiter has between 80 and 95 moons, but neither number captures the complexity of the Jovian system of moons, rings and asteroids."
          className="flex justify-content-center"
          marginTopCard="0"
        />
      </header>
      <main>
        <Intercession
          children={
            <div>
              <Title content="Overview" className="mb-3" />
              <Paragraph content="The giant planet commands thousands of small objects in its orbit. Scientists are getting so good at spotting tiny moons orbiting distant, giant planets that the International Astronomical Union has decided the smallest will no longer be given mythological names unless they are of “significant” scientific interest." />
              <div className="row justify-content-center">
                <Title content="Featured Moons"/>
                <Paragraph content="Jupiter's four largest moons were the first moons discovered beyond Earth. They are called the Galilean satellites after Italian astronomer Galileo Galilei, who is credited with their discovery."/>
                <SimpleCard src={Europa} title="Europa" />
                <SimpleCard src={Ganymede} title="Ganymede" />
                <SimpleCard src={Callisto} title="Callisto" />
                <SimpleCard src={Io} title="Io" />
              </div>
            </div>
          }
        />
        <div className="container mb-5">
          <Paragraph content="KEEP EXPLORING" className="text-exploring mt-5" />
          <Title content="Discover More Topics" className="mb-5" />
          <div className="row justify-content-center">
          <CardExploring
              className="comets style-background"
              content="Comets"
              icon={<i className="bi bi-arrow-right"></i>}
              navigateRoute="/comets"
            />
            <CardExploring
              className="saturn-moon style-background"
              content="Moons of Saturn"
              icon={<i className="bi bi-arrow-right"></i>}
              navigateRoute="/saturn/moon"
            />
            <CardExploring
              className="jupiter style-background"
              content="Jupiter"
              icon={<i className="bi bi-arrow-right"></i>}
              navigateRoute="/jupiter"
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

export default JupiterMoon;
