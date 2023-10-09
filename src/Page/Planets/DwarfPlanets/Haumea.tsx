//components, css
import HaumeaModel from "../assets/models/haumea.glb";
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

const Haumea: React.FC = () => {

  return (
    <>
      <header>
        <Navbar />
        <TopOfPage
          planet="haumea"
          cardTitle="Haumea"
          cardText="Originally designated 2003 EL61 (and nicknamed Santa by one discovery team), Haumea is located in the Kuiper Belt, a doughnut-shaped region of icy bodies beyond the orbit of Neptune."
          carousel={
            <BottomCarousel
              children={[
                {
                  title: "DAYS IN A YEAR",
                  content: "103.366",
                },
                {
                  title: "AVG TEMPERATURE",
                  content: "-223 grausºC",
                },
                {
                  title: "MASS",
                  content: "4.0060 x 10^22",
                },
                {
                  title: "GRAVITY",
                  content: "0.401 m/s^2",
                },
                {
                  title: "DENSITY",
                  content: "2.60 g/cm^3",
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
              <Paragraph content="Haumea is roughly the same size as Pluto. It is one of the fastest rotating large objects in our solar system. The fast spin distorts Haumea's shape, making this dwarf planet look like a football. Everything we know about Haumea is from observations with ground-based telescopes from around the world." />
              <Paragraph content="Two teams claim credit for discovering Haumea citing evidence from observations made in 2003 and 2004. The International Astronomical Union’s Gazetteer of Planetary Nomenclature lists the discovery location as Sierra Nevada Observatory in Spain on Mar. 7, 2003, but no official discoverer is listed." />
              <Title content="Potential for Life" className="mb-3" />
              <Paragraph content="Haumea is extremely cold and doesn't appear to have conditions suitable for life" />
              <Title content='Size and Distance' />
              <Paragraph content="With a radius of about 385 miles (620 kilometers), Haumea is about 1/14 the radius of Earth. If Earth were the size of a nickel, Haumea would be about as big as a sesame seed. From an average distance of 4,010,000,000 miles (6,452,000,000 kilometers), Haumea is 43 astronomical units away from the Sun. One astronomical unit (abbreviated as AU), is the distance from the Sun to Earth. From this distance, it takes sunlight 6 hours to travel from the Sun to Haumea." />
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
              src={HaumeaModel}
              alt="Haumea model 3D"
              camera-controls
            ></model-viewer>
          </NightBackground>

          <div className="align-self-start model-description">
            <Paragraph
              content="A 3D model of Haumea."
              className="text-secondary m-0"
            />
            <Paragraph content="Use our technology and have fun!" />
          </div>
        </div>

        <div className="container new-font text-small">
          <Title content="Structure" className="mb-3" />
          <Paragraph content="Astronomers believe Haumea is made of rock with a coating of ice." />

          <Title content='Surface' />
          <Paragraph content="We know very little about Haumea's surface."/>
          <Paragraph content="Pluto's tallest mountains are 6,500 to 9,800 feet (2 to 3 kilometers) in height. The mountains are big blocks of water ice, sometimes with a coating of frozen gases like methane. Long troughs and valleys as long as 370 miles (600 kilometers) add to the interesting features of this faraway dwarf planet."/>

          <Title content='Atmosphere' />
          <Paragraph content="We know very little about Haumea's atmosphere."/>

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

export default Haumea;