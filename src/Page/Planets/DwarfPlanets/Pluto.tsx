//components, css
import PlutoModel from "../assets/models/pluto.glb";
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

const Pluto: React.FC = () => {

  return (
    <>
      <header>
        <Navbar />
        <TopOfPage
          planet="pluto"
          cardTitle="Pluto"
          cardText="Pluto's heart-shaped glacier is about the size of Texas and Oklahoma."
          carousel={
            <BottomCarousel
              children={[
                {
                  title: "DAYS IN A YEAR",
                  content: "90.520",
                },
                {
                  title: "AVG TEMPERATURE",
                  content: "-230 grausºC",
                },
                {
                  title: "MASS",
                  content: "1.30300 x 10^22",
                },
                {
                  title: "GRAVITY",
                  content: "0.62 m/s^2",
                },
                {
                  title: "DENSITY",
                  content: "1.89 g/cm^3",
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
              <Paragraph content="Pluto is a complex and mysterious world with mountains, valleys, plains, craters, and apparently even glaciers." />
              <Paragraph content="Discovered in 1930, Pluto was long considered our solar system's ninth planet. But after the discovery that many similar, intriguing worlds inhabit the distant region beyond Neptune known as the Kuiper Belt, icy Pluto was reclassified as a dwarf planet." />
              <Paragraph content="Pluto is named after the Roman god of the underworld. It is the only planet named by an 11-year-old girl." />
              <Title content="Potential for Life" className="mb-3" />
              <Paragraph content="The surface of Pluto is extremely cold, so it seems unlikely that life could exist there. At such cold temperatures, water, which is vital for life as we know it, is essentially rock-like. Pluto's interior is warmer, however, and some think there could even be an ocean deep inside." />
              <Title content='Size and Distance' />
              <Paragraph content="With a radius of 715 miles (1,151 kilometers), Pluto is about 1/6 the width of Earth. If Earth was the size of a nickel, Pluto would be about as big as a popcorn kernel." />
              <Paragraph content="From an average distance of 3.7 billion miles (5.9 billion kilometers), Pluto is 39 astronomical units away from the Sun. One astronomical unit (abbreviated as AU), is the distance from the Sun to Earth. From this distance, it takes sunlight 5.5 hours to travel from the Sun to Pluto." />
              <Paragraph content="If you were to stand on the surface of Pluto at noon, the Sun would be 1/900 the brightness it is here on Earth, or about 300 times as bright as our full moon. There is a moment each day near sunset here on Earth when the light is the same brightness as midday on Pluto. Find out when you can experience 'Pluto time' where you live."/>
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
              src={PlutoModel}
              alt="Pluto model 3D"
              camera-controls
            ></model-viewer>
          </NightBackground>

          <div className="align-self-start model-description">
            <Paragraph
              content="A 3D model of Pluto."
              className="text-secondary m-0"
            />
            <Paragraph content="Use our technology and have fun!" />
          </div>
        </div>

        <div className="container new-font text-small">
          <Title content="Structure" className="mb-3" />
          <Paragraph content="Pluto is about two-thirds the diameter of Earth's Moon and probably has a rocky core surrounded by a mantle of water ice. Interesting ices like methane and nitrogen frost coat the surface. Due to its lower density, Pluto's mass is about one-sixth that of Earth's Moon." />

          <Title content='Surface' />
          <Paragraph content="Pluto's surface is characterized by mountains, valleys, plains, and craters. The temperature on Pluto can be as cold as -375 to -400 degrees Fahrenheit (-226 to -240 degrees Celsius)."/>
          <Paragraph content="Pluto's tallest mountains are 6,500 to 9,800 feet (2 to 3 kilometers) in height. The mountains are big blocks of water ice, sometimes with a coating of frozen gases like methane. Long troughs and valleys as long as 370 miles (600 kilometers) add to the interesting features of this faraway dwarf planet."/>
          <Paragraph content="Craters as large as 162 miles (260 kilometers) in diameter dot some of the landscape on Pluto, with some showing signs of erosion and filling. This suggests tectonic forces are slowly resurfacing Pluto." />
          <Paragraph content="The most prominent plains observed on Pluto appear to be made of frozen nitrogen gas and show no craters. These plains do show structures suggesting convection (blobs of material circulating up and down)." />

          <Title content='Atmosphere' />
          <Paragraph content="Pluto has a thin, tenuous atmosphere that expands when it comes closer to the Sun and collapses as it moves farther away – similar to a comet. The main constituent is molecular nitrogen, though molecules of methane and carbon monoxide have also been detected."/>
          <Paragraph content="When Pluto is close to the Sun, its surface ices sublimate (changing directly from solid to gas) and rise to temporarily form a thin atmosphere. Pluto's low gravity (about 6% of Earth's) causes the atmosphere to be much more extended in altitude than our planet's atmosphere. Pluto becomes much colder during the part of each year when it is traveling far away from the Sun. During this time, the bulk of the planet's atmosphere may freeze and fall as snow to the surface."/>

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

export default Pluto;