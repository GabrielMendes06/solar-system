//components, css
import Navbar from "../../components/Navbar/Navbar";
import TopOfPage from "../../components/SecondPagePlanets/TopOfPage";
import BottomCarousel from "../../components/GlobalComponents.tsx/BottomCarousel";
import NightBackground from "../../components/Main/MediumPage/NightBackground";
import FinalPage from "../../components/Footer/FinalPage";
import Intercession from "../../components/Main/MediumPage/Intercession";
import Paragraph from "../../components/GlobalComponents.tsx/Paragraph";
import Title from "../../components/GlobalComponents.tsx/Title";
import CardExploring from "../../components/GlobalComponents.tsx/CardExploring";
import "./css/PagePlanets.css";

//model
import NeptuneModel from "./assets/models/neptune.glb";
import ScrollToTop from "../../components/GlobalComponents.tsx/ScrollToTop";



const Neptune: React.FC = () => {
  return (
    <>
      <header>
        <Navbar />
        <TopOfPage
          planet="neptune"
          cardTitle="Neptune"
          cardText="The first planet discovered with math."
          carousel={
            <BottomCarousel
              children={[
                {
                  title: "DAYS IN A YEAR",
                  content: "60.190",
                },
                {
                  title: "AVG TEMPERATURE",
                  content: "-218.15ºC",
                },
                {
                  title: "MASS",
                  content: "1.02413 x 10^26",
                },
                {
                  title: "GRAVITY",
                  content: "11.15 m/s^2",
                },
                {
                  title: "DENSITY",
                  content: "1.64 g/cm^3",
                },
              ]}
            />
          }
        />
      </header>
      <main>
        <Intercession
          children={
            <div>
              <Title content="Overview" className="mb-3" />
              <Paragraph content="Dark, cold and whipped by supersonic winds, giant Neptune is the eighth and most distant major planet orbiting our Sun. More than 30 times as far from the Sun as Earth, Neptune is not visible to the naked eye. In 2011, Neptune completed its first 165-year orbit since its discovery." />
              <Paragraph content="The planet’s rich blue color comes from methane in its atmosphere, which absorbs red wavelengths of light but allows blue ones to be reflected back into space." />
              <Paragraph
                content="Neptune was the first planet located through mathematical calculations. Using predictions sent him by French astronomer Urbain Le Verrier, based on disturbances in the orbit of Uranus, German asstronomer Johann Galle was first to observe the planet in 1846. The planet is named after the Roman god of the sea, as suggested by Le Verrier."
                className="mb-3"
              />
              <Title content="Size and Distance" className="mb-3"/>
              <Paragraph content="With a radius of 15,299.4 miles (24,622 kilometers), Neptune is about four times wider than Earth. If Earth were the size of a nickel, Neptune would be about as big as a baseball." />
              <Paragraph content="From an average distance of 2.8 billion miles (4.5 billion kilometers), Neptune is 30 astronomical units away from the Sun. One astronomical unit (abbreviated as AU), is the distance from the Sun to Earth. From this distance, it takes sunlight 4 hours to travel from the Sun to Neptune." />
            </div>
          }
        />
        <div className="container-for-modelviewer d-flex flex-column">
          <NightBackground>
            <model-viewer 
              disable-tap 
              auto-rotate 
              shadow-intensity="1" 
              id="model-planet"
              src={NeptuneModel}
              alt="Neptune model 3D"
              camera-controls
            ></model-viewer>
          </NightBackground>

          <div className="align-self-start model-description">
            <Paragraph
              content="A 3D model of Neptune, an ice giant planet."
              className="text-secondary m-0"
            />
            <Paragraph content="Use our technology and have fun!" />
          </div>
        </div>
        <div className="container new-font text-small">
        <Title content="Rings"/>
          <Paragraph content="Neptune has at least five main rings and four prominent ring arcs that we know of so far. Starting near the planet and moving outward, the main rings are named Galle, Leverrier, Lassell, Arago, and Adams. The rings are thought to be relatively young and short-lived."/>
          <Title content="Structure" className="mb-3" />
          <Paragraph content="Neptune is one of two ice giants in the outer solar system (the other is Uranus). Most (80% or more) of the planet's mass is made up of a hot dense fluid of 'icy' materials – water, methane, and ammonia – above a small, rocky core. Of the giant planets, Neptune is the densest." />
          <Paragraph content="Scientists think there might be an ocean of super hot water under Neptune's cold clouds. It does not boil away because incredibly high pressure keeps it locked inside." />
        </div>
        <div className="container mb-5">
          <Paragraph content="KEEP EXPLORING" className="text-exploring mt-5" />
          <Title content="Discover More Topics" className="mb-5" />
          <div className="row justify-content-center">
            <CardExploring
              className="keep-earth style-background"
              content="Earth"
              icon={<i className="bi bi-arrow-right"></i>}
              navigateRoute='/earth'
            />
            <CardExploring
              className="keep-venus style-background"
              content="Venus"
              icon={<i className="bi bi-arrow-right"></i>}
              navigateRoute='/venus'
            />
            <CardExploring
              className="keep-neptune style-background"
              content="Neptune"
              icon={<i className="bi bi-arrow-right"></i>}
              navigateRoute='/neptune'
            />
            <CardExploring
              className="keep-mercury style-background"
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

export default Neptune;
