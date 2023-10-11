//components, css
import Navbar from "../../components/Navbar/Navbar";
import TopOfPage from "../../components/SecondPagePlanets/TopOfPage";
import NightBackground from "../../components/Main/MediumPage/NightBackground";
import FinalPage from "../../components/Footer/FinalPage";
import Intercession from "../../components/Main/MediumPage/Intercession";
import Paragraph from "../../components/GlobalComponents.tsx/Paragraph";
import Title from "../../components/GlobalComponents.tsx/Title";
import CardExploring from "../../components/GlobalComponents.tsx/CardExploring";
import titan from "../Planets/assets/images/moons-card/titan.webp";
import enceladus from "../Planets/assets/images/moons-card/enceladus.webp";
import hyperion from "../Planets/assets/images/moons-card/hyperion.webp";
import prometheus from "../Planets/assets/images/moons-card/prometheus.webp";
import pandora from "../Planets/assets/images/moons-card/pandora.webp";
import janus from "../Planets/assets/images/moons-card/janus.webp";
import epimetheus from "../Planets/assets/images/moons-card/epimetheus.webp";
import mimas from "../Planets/assets/images/moons-card/mimas.webp";
import iapetus from "../Planets/assets/images/moons-card/iapetus.webp";
import phoebe from "../Planets/assets/images/moons-card/phoebe.webp";
import tethys from "../Planets/assets/images/moons-card/tethys.webp";
import telesto from "../Planets/assets/images/moons-card/telesto.webp";

import "../Planets/css/PagePlanets.css";

//model
import ScrollToTop from "../../components/GlobalComponents.tsx/ScrollToTop";
import SimpleCard from "../../components/GlobalComponents.tsx/SimpleCard";

const SaturnMoon: React.FC = () => {
  return (
    <>
      <header>
        <Navbar />
        <TopOfPage
          planet="saturn-moon"
          cardTitle="Moons of Saturn"
          cardText="The Saturn system teems with natural satellites, from planet-sized Titan to small oddballs, shaped like potatoes or ravioli."
          className="flex justify-content-center"
          marginTopCard="0"
        />
      </header>
      <main>
        <Intercession
          children={
            <div>
              <Title content="Overview" className="mb-3" />
              <Paragraph content="As of June 8, 2023, Saturn has 146 moons in its orbit. The moons range in size from larger than the planet Mercury – the giant moon Titan – to as small as a sports arena. The small moon Enceladus has a global ocean under a thick, icy shell. Scientists have identified both moons as high-priority science destinations for future deep space missions." />
              <Paragraph content="Saturn's moons shape, contribute to, and also collect material from Saturn's rings and magnetosphere." />
              <div className="row justify-content-center">
                <Title content="Featured Moons" />
                <SimpleCard src={titan} title="Titan" />
                <SimpleCard src={enceladus} title="Enceladus" />
                <SimpleCard src={hyperion} title="Hyperion" />
                <SimpleCard src={prometheus} title="Prometheus" />
                <SimpleCard src={pandora} title="Pandora" />
                <SimpleCard src={janus} title="Janus" />
                <SimpleCard src={epimetheus} title="Epimetheus" />
                <SimpleCard src={mimas} title="Mimas" />
                <SimpleCard src={iapetus} title="Iapetus" />
                <SimpleCard src={phoebe} title="Phoebe" />
                <SimpleCard src={tethys} title="Tethys" />
                <SimpleCard src={telesto} title="Telesto" />
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
              className="uranus style-background"
              content="Uranus"
              icon={<i className="bi bi-arrow-right"></i>}
              navigateRoute="/uranus"
            />
            <CardExploring
              className="mercury style-background"
              content="Mercury"
              icon={<i className="bi bi-arrow-right"></i>}
              navigateRoute='/mercury'
            />
            <CardExploring
              className="earth style-background"
              content="Earth"
              icon={<i className="bi bi-arrow-right"></i>}
              navigateRoute='/earth'
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

export default SaturnMoon;
