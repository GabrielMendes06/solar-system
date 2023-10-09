//components, css
import ErisModel from "../assets/models/eris.glb";
import Navbar from "../../../components/Navbar/Navbar";
import TopOfPage from "../../../components/SecondPagePlanets/TopOfPage";
import BottomCarousel from "../../../components/GlobalComponents.tsx/BottomCarousel";
import Intercession from "../../../components/Main/MediumPage/Intercession";
import Paragraph from "../../../components/GlobalComponents.tsx/Paragraph";
import Title from "../../../components/GlobalComponents.tsx/Title";
import NightBackground from "../../../components/Main/MediumPage/NightBackground";
import CardExploring from "../../../components/GlobalComponents.tsx/CardExploring";
import FinalPage from "../../../components/Footer/FinalPage";
import ScrollToTop from "../../../components/GlobalComponents.tsx/ScrollToTop";

import "../css/PagePlanets.css";

//model

const Eris: React.FC = () => {

  return (
    <>
      <header>
        <Navbar />
        <TopOfPage
          planet="eris"
          cardTitle="Eris"
          cardText="Eris is one of the largest known dwarf planets in our solar system. It's about the same size as Pluto but is three times farther from the Sun."
          carousel={
            <BottomCarousel
              children={[
                {
                  title: "DAYS IN A YEAR",
                  content: "204.540",
                },
                {
                  title: "AVG TEMPERATURE",
                  content: "-243ºC",
                },
                {
                  title: "MASS",
                  content: "1.66000 x 10^22",
                },
                {
                  title: "GRAVITY",
                  content: "0.82 m/s^2",
                },
                {
                  title: "DENSITY",
                  content: "2.52 g/cm^3",
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
              <Paragraph content="At first, Eris appeared to be larger than Pluto. This triggered a debate in the scientific community that led to the International Astronomical Union's decision in 2006 to clarify the definition of a planet. Pluto, Eris, and other similar objects are now classified as dwarf planets." />
              <Paragraph content="Originally designated 2003 UB313 – and nicknamed for the television warrior Xena by its discovery team – Eris is named for the ancient Greek goddess of discord and strife. The name fits since Eris remains at the center of a scientific debate about the definition of a planet." />
              <Title content="Potential for Life" className="mb-3" />
              <Paragraph content="The surface of Eris is extremely cold, so it seems unlikely that life could exist there." />
              <Title content='Size and Distance' />
              <Paragraph content="With a radius of about 722 miles (1,163 kilometers), Eris is about 1/5 the radius of Earth. Eris, like Pluto, is a little smaller than Earth's Moon. If the Earth were the size of a nickel, Eris would be about as big as a popcorn kernel." />
              <Paragraph content="From an average distance of 6,289,000,000 miles (10,125,000,000 kilometers), Eris is about 68 astronomical units away from the Sun. One astronomical unit (abbreviated as AU), is the distance from the Sun to Earth. From this distance, it takes sunlight more than nine hours to travel from the Sun to the surface of Eris." />
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
              src={ErisModel}
              alt="Eris model 3D"
              camera-controls
            ></model-viewer>
          </NightBackground>

          <div className="align-self-start model-description">
            <Paragraph
              content="A 3D model of Eris."
              className="text-secondary m-0"
            />
            <Paragraph content="Use our technology and have fun!" />
          </div>
        </div>

        <div className="container new-font text-small">
          <Title content="Structure" className="mb-3" />
          <Paragraph content="We know very little about Eris' internal structure." />

          <Title content='Surface' />
          <Paragraph content="Eris most likely has a rocky surface similar to Pluto. Scientists think surface temperatures vary from about -359 degrees Fahrenheit (-217 degrees Celsius) to -405 degrees Fahrenheit (-243 degrees Celsius)."/>

          <Title content='Atmosphere' />
          <Paragraph content="The dwarf planet is often so far from the Sun that its atmosphere collapses and freezes, falling to the surface as snow. As it gets closest to the Sun in its faraway orbit, the atmosphere thaws."/>
        </div>

        <div className="container mb-5">
          <Paragraph content="KEEP EXPLORING" className="text-exploring mt-5" />
          <Title content="Discover More Topics" className="mb-5" />
          <div className="row justify-content-center">
            <CardExploring
              className="keep-neptune style-background"
              content="Neptune"
              icon={<i className="bi bi-arrow-right"></i>}
              navigateRoute='/neptune'
            />
            <CardExploring
              className="keep-venus style-background"
              content="Venus"
              icon={<i className="bi bi-arrow-right"></i>}
              navigateRoute='/venus'
            />
            <CardExploring
              className="keep-mercury style-background"
              content="Mercury"
              icon={<i className="bi bi-arrow-right"></i>}
              navigateRoute='/mercury'
            />
            <CardExploring
              className="keep-uranus style-background"
              content="Uranus"
              icon={<i className="bi bi-arrow-right"></i>}
              navigateRoute='/uranus'
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

export default Eris;
