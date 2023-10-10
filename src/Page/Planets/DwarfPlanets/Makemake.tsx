//components, css
import MakemakeModel from "../assets/models/makemake.glb";
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

const Makemake: React.FC = () => {

  return (
    <>
      <header>
        <Navbar />
        <TopOfPage
          planet="makemake"
          cardTitle="Makemake"
          cardText="Slightly smaller than Pluto, Makemake is the second-brightest object in the Kuiper Belt as seen from Earth (while Pluto is the brightest)."
          carousel={
            <BottomCarousel
              children={[
                {
                  title: "DAYS IN A YEAR",
                  content: "103.731",
                },
                {
                  title: "AVG TEMPERATURE",
                  content: "-243,2 grausºC",
                },
                {
                  title: "MASS",
                  content: "4.4000 x 10^21",
                },
                {
                  title: "GRAVITY",
                  content: "0.50 m/s^2",
                },
                {
                  title: "DENSITY",
                  content: "1.40 g/cm^3",
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
              <Paragraph content="Makemake holds an important place in the history of solar system studies because it was one of the objects – along with Eris – whose discovery prompted the International Astronomical Union to reconsider the definition of a planet, and to create the new group of dwarf planets." />
              <Paragraph content="Makemake was first observed in March 2005 by M.E. Brown, C.A. Trujillo, and D.L. Rabinowitz at the Palomar Observatory, California. Its unofficial codename was Easterbunny, Brown said, 'in honor of the fact that it was discovered just a few days past Easter.' Before this dwarf planet was confirmed, its provisional name was 2005 FY9. In 2016, NASA’s Hubble Space Telescope spotted a small, dark moon orbiting Makemake." />
              <Title content="Potential for Life" className="mb-3" />
              <Paragraph content="The surface of Makemake is extremely cold, so it seems unlikely that life could exist there." />
              <Title content='Size and Distance' />
              <Paragraph content="With a radius of approximately 444 miles (715 kilometers), Makemake is 1/9 the radius of Earth. If Earth were the size of a nickel, Makemake would be about as big as a mustard seed." />
              <Paragraph content="From an average distance of 4,253,000,000 miles (6,847,000,000 kilometers), Makemake is 45.8 astronomical units away from the Sun. One astronomical unit (abbreviated as AU), is the distance from the Sun to Earth. From this distance, it takes sunlight 6 hours and 20 minutes to travel from the Sun to Makemake." />
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
              src={MakemakeModel}
              alt="Makemake model 3D"
              camera-controls
            ></model-viewer>
          </NightBackground>

          <div className="align-self-start model-description">
            <Paragraph
              content="A 3D model of Makemake, a dwarf planet in the Kuiper Belt."
              className="text-secondary m-0"
            />
            <Paragraph content="Use our technology and have fun!" />
          </div>
        </div>

        <div className="container new-font text-small">
          <Title content="Structure" className="mb-3" />
          <Paragraph content="Scientists know very little about Makemake's structure." />

          <Title content='Surface' />
          <Paragraph content="We can't see too many details of Makemake's surface from so far away, but it does appear to be a reddish-brownish color, similar to Pluto. Scientists have also detected frozen methane and ethane on its surface. In fact, pellets of frozen methane as big as half an inch (1 centimeter) in diameter may rest on Makemake's cold surface."/>

          <Title content='Atmosphere' />
          <Paragraph content="Makemake may develop a very thin atmosphere, most likely made of nitrogen, near perihelion – when it is closest to the Sun."/>

        </div>

        <div className="container mb-5">
          <Paragraph content="KEEP EXPLORING" className="text-exploring mt-5" />
          <Title content="Discover More Topics" className="mb-5" />
          <div className="row justify-content-center">
          <CardExploring
              className="keep-asteroids style-background"
              content="Asteroids"
              icon={<i className="bi bi-arrow-right"></i>}
              navigateRoute="/asteroids"
            />
            <CardExploring
              className="keep-jupiter style-background"
              content="Jupiter"
              icon={<i className="bi bi-arrow-right"></i>}
              navigateRoute="/jupiter"
            />
            <CardExploring
              className="keep-saturn style-background"
              content="Saturn"
              icon={<i className="bi bi-arrow-right"></i>}
              navigateRoute="/saturn"
            />
            <CardExploring
              className="keep-meteors-meteorites style-background"
              content="Meteors & Meteorites"
              icon={<i className="bi bi-arrow-right"></i>}
              navigateRoute="/meteors-meteorites"
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

export default Makemake;