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
import UranusModel from "./assets/models/uranus.glb";
import ScrollToTop from "../../components/GlobalComponents.tsx/ScrollToTop";



const Uranus: React.FC = () => {
  return (
    <>
      <header>
        <Navbar />
        <TopOfPage
          planet="uranus"
          cardTitle="Uranus"
          cardText="The first planet discovered with the aid of a telescope."
          carousel={
            <BottomCarousel
              children={[
                {
                  title: "DAYS IN A YEAR",
                  content: "30.681 dias",
                },
                {
                  title: "AVG TEMPERATURE",
                  content: "-197.15ºC",
                },
                {
                  title: "MASS",
                  content: "8.68127 x 10^25",
                },
                {
                  title: "GRAVITY",
                  content: "8.87 m/s^2",
                },
                {
                  title: "DENSITY",
                  content: "1.27 g/cm^3",
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
              <Paragraph content="Uranus is very cold and windy. It is surrounded by faint rings and more than two dozen small moons as it rotates at a nearly 90-degree angle from the plane of its orbit. This unique tilt makes Uranus appear to spin on its side." />
              <Paragraph content="Uranus is blue-green in color due to large amounts of methane, which absorbs red light but allows blues to be reflected back into space. The atmosphere is mostly hydrogen and helium, but also includes large amounts of water, ammonia and methane." />
              <Paragraph
                content="Astronomer William Herschel tried unsuccessfully to name his discovery Georgium Sidus after his patron, English king George III. Instead, the planet was eventually named for Uranus, the Greek god of the sky, who was also the father of Kronos (or Saturn in Roman mythology)."
                className="mb-3"
              />
              <Title content="Size and Distance" className="mb-3"/>
              <Paragraph content="With a radius of 15,759.2 miles (25,362 kilometers), Uranus is 4 times wider than Earth. If Earth was the size of a nickel, Uranus would be about as big as a softball." />
              <Paragraph content="From an average distance of 1.8 billion miles (2.9 billion kilometers), Uranus is 19.8 astronomical units away from the Sun. One astronomical unit (abbreviated as AU), is the distance from the Sun to Earth. From this distance, it takes sunlight 2 hours and 40 minutes to travel from the Sun to Uranus." />
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
              src={UranusModel}
              alt="Uranus model 3D"
              camera-controls
            ></model-viewer>
          </NightBackground>

          <div className="align-self-start model-description">
            <Paragraph
              content="A 3D model of Uranus."
              className="text-secondary m-0"
            />
            <Paragraph content="Use our technology and have fun!" />
          </div>
        </div>
        <div className="container new-font text-small">
        <Title content="Rings"/>
          <Paragraph content="Uranus has two sets of rings. The inner system of nine rings consists mostly of narrow, dark grey rings. There are two outer rings: the innermost one is reddish like dusty rings elsewhere in the solar system, and the outer ring is blue like Saturn's E ring."/>
          <Paragraph content="In order of increasing distance from the planet, the rings are called Zeta, 6, 5, 4, Alpha, Beta, Eta, Gamma, Delta, Lambda, Epsilon, Nu, and Mu. Some of the larger rings are surrounded by belts of fine dust."/>
          <Title content="Structure" className="mb-3" />
          <Paragraph content="Uranus is one of two ice giants in the outer solar system (the other is Neptune). Most (80% or more) of the planet's mass is made up of a hot dense fluid of 'icy' materials – water, methane, and ammonia – above a small rocky core. Near the core, it heats up to 9,000 degrees Fahrenheit (4,982 degrees Celsius)." />
          <Paragraph content="Uranus is slightly larger in diameter than its neighbor Neptune, yet smaller in mass. It is the second least dense planet; Saturn is the least dense of all." />
          <Paragraph content="Uranus gets its blue-green color from methane gas in the atmosphere. Sunlight passes through the atmosphere and is reflected back out by Uranus' cloud tops. Methane gas absorbs the red portion of the light, resulting in a blue-green color." />
        </div>
        <div className="container mb-5">
          <Paragraph content="KEEP EXPLORING" className="text-exploring mt-5" />
          <Title content="Discover More Topics" className="mb-5" />
          <div className="row justify-content-center">
            <CardExploring
              className="keep-earth style-background"
              content="Earth"
              icon={<i className="bi bi-arrow-right"></i>}
            />
            <CardExploring
              className="keep-venus style-background"
              content="Venus"
              icon={<i className="bi bi-arrow-right"></i>}
            />
            <CardExploring
              className="keep-neptune style-background"
              content="Neptune"
              icon={<i className="bi bi-arrow-right"></i>}
            />
            <CardExploring
              className="keep-mercury style-background"
              content="Mercury"
              icon={<i className="bi bi-arrow-right"></i>}
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

export default Uranus;