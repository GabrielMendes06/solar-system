//components, css
import Navbar from "../../components/Navbar/Navbar";
import TopOfPage from "../../components/SecondPagePlanets/TopOfPage";
import NightBackground from "../../components/Main/MediumPage/NightBackground";
import FinalPage from "../../components/Footer/FinalPage";
import Intercession from "../../components/Main/MediumPage/Intercession";
import Paragraph from "../../components/GlobalComponents.tsx/Paragraph";
import Title from "../../components/GlobalComponents.tsx/Title";
import CardExploring from "../../components/GlobalComponents.tsx/CardExploring";
import miranda from "../Planets/assets/images/moons-card/miranda.webp";
import ariel from "../Planets/assets/images/moons-card/ariel.webp";
import umbriel from "../Planets/assets/images/moons-card/umbriel.webp";
import titania from "../Planets/assets/images/moons-card/titania.webp";
import oberon from "../Planets/assets/images/moons-card/oberon.webp";


import "../Planets/css/PagePlanets.css";

//model
import ScrollToTop from "../../components/GlobalComponents.tsx/ScrollToTop";
import SimpleCard from "../../components/GlobalComponents.tsx/SimpleCard";

const UranusMoon: React.FC = () => {
  return (
    <>
      <header>
        <Navbar />
        <TopOfPage
          planet="uranus-moon"
          cardTitle="Moons of Uranus"
          cardText="Uranus has 27 known moons, including five major moons: Miranda, Ariel, Umbriel, Titania, and Oberon."
          className="flex justify-content-center"
          marginTopCard="0"
        />
      </header>
      <main>
        <Intercession
          children={
            <div>
              <Title content="Overview" className="mb-3" />
              <Paragraph content="The moons are sometimes called the 'literary moons' because they are named for Shakespearean characters, along with a couple of the moons being named for characters from the works of Alexander Pope." />
              <div className="row justify-content-center">
                <Title content="Featured Moons" />
                <SimpleCard src={miranda} title="Miranda" />
                <SimpleCard src={ariel} title="Ariel" />
                <SimpleCard src={umbriel} title="Umbriel" />
                <SimpleCard src={titania} title="Titania" />
                <SimpleCard src={oberon} title="Oberon" />

              </div>
            </div>
          }
        />
        <div className="container mb-5">
          <Paragraph content="KEEP EXPLORING" className="text-exploring mt-5" />
          <Title content="Discover More Topics" className="mb-5" />
          <div className="row justify-content-center">
            <CardExploring
              className="sun style-background"
              content="Sun"
              icon={<i className="bi bi-arrow-right"></i>}
              navigateRoute="/sun"
            />
            <CardExploring
              className="eris style-background"
              content="Eris"
              icon={<i className="bi bi-arrow-right"></i>}
              navigateRoute='/dwarf-planets/eris'
            />
            <CardExploring
              className="jupiter style-background"
              content="Jupiter"
              icon={<i className="bi bi-arrow-right"></i>}
              navigateRoute="/jupiter"
            />
            <CardExploring
              className="comets style-background"
              content="Comets"
              icon={<i className="bi bi-arrow-right"></i>}
              navigateRoute="/comets"
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

export default UranusMoon;