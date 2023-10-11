//components, css
import Navbar from "../../components/Navbar/Navbar";
import TopOfPage from "../../components/SecondPagePlanets/TopOfPage";
import NightBackground from "../../components/Main/MediumPage/NightBackground";
import FinalPage from "../../components/Footer/FinalPage";
import Intercession from "../../components/Main/MediumPage/Intercession";
import Paragraph from "../../components/GlobalComponents.tsx/Paragraph";
import Title from "../../components/GlobalComponents.tsx/Title";
import CardExploring from "../../components/GlobalComponents.tsx/CardExploring";
import despina from "../Planets/assets/images/moons-card/despina.webp";
import galatea from "../Planets/assets/images/moons-card/galatea.webp";
import halimede from "../Planets/assets/images/moons-card/halimede.webp";
import larissa from "../Planets/assets/images/moons-card/larissa.webp";
import naiad from "../Planets/assets/images/moons-card/naiad.webp";
import nereid from "../Planets/assets/images/moons-card/nereid.webp";
import neso from "../Planets/assets/images/moons-card/neso.webp";
import proteus from "../Planets/assets/images/moons-card/proteus.webp";
import psamathe from "../Planets/assets/images/moons-card/psamathe.webp";
import thalassa from "../Planets/assets/images/moons-card/thalassa.webp";
import triton from "../Planets/assets/images/moons-card/triton.webp";

import "../Planets/css/PagePlanets.css";

//model
import ScrollToTop from "../../components/GlobalComponents.tsx/ScrollToTop";
import SimpleCard from "../../components/GlobalComponents.tsx/SimpleCard";

const NeptuneMoon: React.FC = () => {
  return (
    <>
      <header>
        <Navbar />
        <TopOfPage
          planet="neptune-moon"
          cardTitle="Moons of Neptune"
          cardText="We don't know if William Lassell had a celebratory beverage after his discovery of Neptune's moon, Triton, but beer made the finding possible. Lassell was one of 19th century England's grand amateur astronomers, using the fortune he made in the brewery business to finance his telescopes."
          className="flex justify-content-center"
          marginTopCard="0"
        />
      </header>
      <main>
        <Intercession
          children={
            <div>
              <Title content="Overview" className="mb-3" />
              <Paragraph content="Triton (not to be confused with Saturn's moon, Titan), is far and away the largest of Neptune's satellites. Dutch-American astronomer Gerard Kuiper (for whom the Kuiper Belt was named) found Neptune's third-largest moon, Nereid, in 1949. He missed Proteus, the second-largest because it's too dark and too close to Neptune for telescopes of that era. Proteus is a slightly non-spherical moon, and it is thought to be right at the limit of how massive an object can be before its gravity pulls it into a sphere." />
              <Paragraph content="Proteus and five other moons had to wait for Voyager 2 to make themselves known. All six are among the darker objects found in the solar system. Astronomers using improved ground-based telescopes found more satellites in 2002 and 2003."/>
              <Paragraph content="Voyager 2 revealed fascinating details about Triton. Part of its surface resembles the rind of a cantaloupe. Ice volcanoes spout what is probably a mixture of liquid nitrogen, methane, and dust, which instantly freezes and then snows back down to the surface. Voyager 2 took an image showing a frosty plume shooting 5 miles (8 kilometers) into the sky and drifting 87 miles (140 kilometers) downwind."/>
              <Paragraph content="Triton's icy surface reflects so much of what little sunlight reaches it that the moon is one of the coldest objects in the solar system, about -400 degrees Fahrenheit (-240 degrees Celsius)."/>
              <Paragraph content="Triton is the only large moon in the solar system that circles its planet in a direction opposite to the planet's rotation (a retrograde orbit), which suggests that it may once have been an independent object that Neptune captured. The disruptive effect this would have had on other satellites could help to explain why Nereid has the most eccentric orbit of any known moon – it's almost seven times as far from Neptune at one end of its orbit as at the other end."/>
              <Paragraph content="Neptune's gravity acts as a drag on the counter-orbiting Triton, slowing it down and making it drop closer and closer to the planet. Millions of years from now, Triton will come close enough for gravitational forces to break it apart – possibly forming a ring around Neptune bright enough for Lassell to have seen with his telescope."/>
              <div className="row justify-content-center">
                <Title content="Featured Moons"/>
                <SimpleCard src={despina} title="Despina" />
                <SimpleCard src={galatea} title="Galatea" />
                <SimpleCard src={halimede} title="Halimede" />
                <SimpleCard src={larissa} title="Larissa" />
                <SimpleCard src={naiad} title="Naiad" />
                <SimpleCard src={nereid} title="Nereid" />
                <SimpleCard src={neso} title="Neso" />
                <SimpleCard src={proteus} title="Proteus" />
                <SimpleCard src={psamathe} title="Psamathe" />
                <SimpleCard src={thalassa} title="Thalassa" />
                <SimpleCard src={triton} title="Triton" />
              </div>
            </div>
          }
        />
        <div className="container mb-5">
          <Paragraph content="KEEP EXPLORING" className="text-exploring mt-5" />
          <Title content="Discover More Topics" className="mb-5" />
          <div className="row justify-content-center">
          <CardExploring
              className="makemake style-background"
              content="Makemake"
              icon={<i className="bi bi-arrow-right"></i>}
              navigateRoute='/dwarf-planets/makemake'
            />
            <CardExploring
              className="mars-moon style-background"
              content="Moons of Mars"
              icon={<i className="bi bi-arrow-right"></i>}
              navigateRoute="/mars/moon"
            />
            <CardExploring
              className="jupiter style-background"
              content="Jupiter"
              icon={<i className="bi bi-arrow-right"></i>}
              navigateRoute="/jupiter"
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

export default NeptuneMoon;