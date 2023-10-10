//components, css
import Navbar from "../../components/Navbar/Navbar";
import TopOfPage from "../../components/SecondPagePlanets/TopOfPage";
import Intercession from "../../components/Main/MediumPage/Intercession";
import Title from "../../components/GlobalComponents.tsx/Title";
import Paragraph from "../../components/GlobalComponents.tsx/Paragraph";
import NightBackground from "../../components/Main/MediumPage/NightBackground";
import CardExploring from "../../components/GlobalComponents.tsx/CardExploring";
import FinalPage from "../../components/Footer/FinalPage";

import Comet1 from "../Planets/assets/images/comets-card/comet-103p.webp"
import Comet2 from "../Planets/assets/images/comets-card/comet-109p.webp"
import Comet3 from "../Planets/assets/images/comets-card/comet-19p.webp"
import Comet4 from "../Planets/assets/images/comets-card/comet-1p.webp"
import Comet5 from "../Planets/assets/images/comets-card/comet-67p.webp"
import Comet6 from "../Planets/assets/images/comets-card/comet-2i.webp"
import Comet7 from "../Planets/assets/images/comets-card/comet-2p.webp"
import Comet8 from "../Planets/assets/images/comets-card/comet-81p.webp"
import Comet9 from "../Planets/assets/images/comets-card/comet-9p.webp"
import Comet10 from "../Planets/assets/images/comets-card/comet-c1995.gif"
import Comet11 from "../Planets/assets/images/comets-card/comet-c2013.webp"
import Comet12 from "../Planets/assets/images/comets-card/comet-c2012.webp"
import Comet13 from "../Planets/assets/images/comets-card/comet-oumuamua.webp"
import Comet14 from "../Planets/assets/images/comets-card/comet-shoemaker.webp"

import "../Planets/css/PagePlanets.css";

//model
import ScrollToTop from "../../components/GlobalComponents.tsx/ScrollToTop";
import SimpleCard from "../../components/GlobalComponents.tsx/SimpleCard";

const Comets: React.FC = () => {
  return (
    <>
      <header>
        <Navbar />
        <TopOfPage
          planet="comets"
          cardTitle="Comets"
          cardText="Comets are frozen leftovers from the formation of the solar system composed of dust, rock, and ices."
          className="flex justify-content-center"
          marginTopCard="0"
        />
      </header>
      <main>
        <Intercession
          children={
            <div>
              <Title content="Overview" />
              <Paragraph content="They range from a few miles to tens of miles wide, but as they orbit closer to the Sun, they heat up and spew gases and dust into a glowing head that can be larger than a planet. This material forms a tail that stretches millions of miles." />
              <div className="gif-comet"></div>
              <Paragraph content="Comets are cosmic snowballs of frozen gases, rock, and dust that orbit the Sun. When frozen, they are the size of a small town. When a comet's orbit brings it close to the Sun, it heats up and spews dust and gases into a giant glowing head larger than most planets. The dust and gases form a tail that stretches away from the Sun for millions of miles. There are likely billions of comets orbiting our Sun in the Kuiper Belt and even more distant Oort Cloud." />
              <Paragraph content="The current number of known comets is more than 3,800." />
            </div>
          }
        />
        <div className="container mb-5">
        <Title content="Featured Asteroids" />
          <div className="row justify-content-center">
            <SimpleCard 
            src={Comet1}
            title='Comet 103P/Hartley (Hartley 2)'/>
            <SimpleCard 
            src={Comet2}
            title='109P/Swift-Tuttle'/>
            <SimpleCard 
            src={Comet3}
            title='Comet 19P/Borrelly'/>
            <SimpleCard 
            src={Comet4}
            title='1P/Halley'/>
            <SimpleCard 
            src={Comet5}
            title='67P/Churyumov-Gerasimenko'/>
            <SimpleCard 
            src={Comet6}
            title='Comet 2I/Borisov'/>
            <SimpleCard 
            src={Comet7}
            title='2P/Encke'/>
            <SimpleCard 
            src={Comet8}
            title='81P/Wild (Wild 2)'/>
            <SimpleCard 
            src={Comet9}
            title='9P/Tempel 1'/>
            <SimpleCard 
            src={Comet10}
            title='C/1995 O1 (Hale-Bopp)'/>
            <SimpleCard 
            src={Comet11}
            title='C/2013 A1 Siding Spring'/>
            <SimpleCard 
            src={Comet12}
            title='C/2012 S1 (ISON)'/>
            <SimpleCard 
            src={Comet13}
            title='Oumuamua'/>
            <SimpleCard 
            src={Comet14}
            title='Shoemaker-Levy 9'/>
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

export default Comets;
