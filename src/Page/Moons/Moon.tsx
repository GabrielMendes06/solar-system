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
import "../Planets/css/PagePlanets.css";

//model
import MoonModel from "../Planets/assets/models/moon.glb";
import ScrollToTop from "../../components/GlobalComponents.tsx/ScrollToTop";



const Moon: React.FC = () => {
  return (
    <>
      <header>
        <Navbar />
        <TopOfPage
          planet="moon"
          cardTitle="Moon"
          cardText="Our Moon is the only place beyond Earth where humans have set foot, so far."
          carousel={
            <BottomCarousel
              children={[
                {
                  title: "AVG TEMPERATURE",
                  content: "100ºC",
                },
                {
                  title: "MASS",
                  content: "7,36 x 10^24",
                },
                {
                  title: "GRAVITY",
                  content: "1,62 m/s^2",
                },
                {
                  title: "DENSITY",
                  content: "3,34 g/cm^3",
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
              <Paragraph content="The brightest and largest object in our night sky, the Moon makes Earth a more livable planet by moderating our home planet's wobble on its axis, leading to a relatively stable climate. It also causes tides, creating a rhythm that has guided humans for thousands of years." />
              <Paragraph content="The Moon was likely formed after a Mars-sized body collided with Earth several billion years ago." />
              <Paragraph
                content="Earth's only natural satellite is simply called 'the Moon' because people didn't know other moons existed until Galileo Galilei discovered four moons orbiting Jupiter in 1610. In Latin, the Moon was called Luna, which is the main adjective for all things Moon-related: lunar."
                className="mb-3"
              />
              <Paragraph content ="At its nearest to Earth, Venus is some 38 million miles (about 61 million kilometers) distant. But most of the time the two planets are farther apart; Mercury, the innermost planet, actually spends more time in Earth’s proximity than Venus." />
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
              src={MoonModel}
              alt="Moon model 3D"
              camera-controls
            ></model-viewer>
          </NightBackground>

          <div className="align-self-start model-description">
            <Paragraph
              content="A 3D model of Moon."
              className="text-secondary m-0"
            />
            <Paragraph content="Use our technology and have fun!" />
          </div>
        </div>
        <div className="container new-font text-small">
          <Title content="Pop Culture"/>
          <Paragraph content="Our lunar neighbor has inspired stories since the first humans looked up at the sky and saw its gray, cratered surface. Some observers saw among the craters the shape of a person's face, so stories refer to a mysterious 'man in the Moon.' Hungrier observers compared the craters to cheese and dreamed of an entire sphere made of delicious dairy products."/>
          <Paragraph content="The Moon made its film debut in a 1902 black and white silent French film called 'Le Voyage Dans la Lune' ('A Trip to the Moon'). And a year before astronauts walked on the Moon, '2001: A Space Odyssey'(1968) told the story of astronauts on an outpost on the Moon. Decades later, it is still widely regarded as one of the best science fiction movies ever made."/>
          <Paragraph content="American astronauts have planted six American flags on the Moon. But that doesn't mean the United States has claimed it; in fact, an international law written in 1967 prevents any single nation from owning planets, stars, or any other natural objects in space."/>
        </div>
        <div className="container mb-5">
          <Paragraph content="KEEP EXPLORING" className="text-exploring mt-5" />
          <Title content="Discover More Topics" className="mb-5" />
          <div className="row justify-content-center">
            <CardExploring
              className="sun style-background"
              content="Sun"
              icon={<i className="bi bi-arrow-right"></i>}
              navigateRoute='/sun'
            />
            <CardExploring
              className="saturn style-background"
              content="Saturn"
              icon={<i className="bi bi-arrow-right"></i>}
              navigateRoute="/saturn"
            />
            <CardExploring
              className="comets style-background"
              content="Comets"
              icon={<i className="bi bi-arrow-right"></i>}
              navigateRoute="/comets"
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

export default Moon;
