import "./css/PagePlanets.css";
import Navbar from "../../components/Navbar/Navbar";
import TopOfPage from "../../components/SecondPagePlanets/TopOfPage";
import BottomCarousel from "../../components/GlobalComponents.tsx/BottomCarousel";
import NightBackground from "../../components/Main/MediumPage/NightBackground";
import FinalPage from "../../components/Footer/FinalPage";
import Intercession from "../../components/Main/MediumPage/Intercession";
import Paragraph from "../../components/GlobalComponents.tsx/Paragraph";
import Title from "../../components/GlobalComponents.tsx/Title";
import MercuryModel from "./assets/models/mercury.glb";
import CardExploring from "../../components/GlobalComponents.tsx/CardExploring";

const Mercury: React.FC = () => {
  return (
    <>
      <header>
        <Navbar />
        <TopOfPage
          planet="mercury"
          cardTitle="Mercury"
          cardText="From the surface of Mercury, the Sun would appear more than three times as large as it does when viewed from Earth."
          carousel={
            <BottomCarousel
              children={[
                {
                  title: "DAYS IN A YEAR",
                  content: "88",
                },
                {
                  title: "AVG TEMPERATURE",
                  content: "166.85ºC",
                },
                {
                  title: "MASS",
                  content: "3.30114 x 10^23",
                },
                {
                  title: "GRAVITY",
                  content: "3.7 m/s^2",
                },
                {
                  title: "DENSITY",
                  content: "5.43 g/cm^3"
                }
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
              <Paragraph content="Mercury—the smallest planet in our solar system and nearest to the Sun—is only slightly larger than Earth's Moon. Its surface is covered in tens of thousands of impact craters." />
              <Paragraph content="From the surface of Mercury, the Sun would appear more than three times as large as it does when viewed from Earth, and the sunlight would be as much as 11 times brighter." />
              <Paragraph
                content="Despite its proximity to the Sun, Mercury is not the hottest planet in our solar system— that title belongs to nearby Venus, thanks to its dense atmosphere. But Mercury is the fastest planet, zipping around the Sun every 88 Earth days. Mercury is appropriately named for the swiftest of the ancient Roman gods."
                className="mb-3"
              />
            </div>
          }
        />
        <div className="container-for-modelviewer d-flex flex-column">
          <NightBackground>
            <model-viewer
              id="model-planet"
              src={MercuryModel}
              alt="Mercury model 3D"
              auto-rotate
              camera-controls
            ></model-viewer>
          </NightBackground>
          
          <div className="align-self-start model-description">
            <Paragraph
              content="A 3D model of Mercury, the innermost planet."
              className="text-secondary m-0"
            />
            <Paragraph content="Use our technology and have fun!" />
          </div>         
        </div>
        <div className="container new-font">
          <Title content='Structure'
          className="mb-3"/>
          <Paragraph content="Mercury is the second densest planet, after Earth. It has a large metallic core with a radius of about 1,289 miles (2,074 kilometers), about 85% of the planet's radius. There is evidence that it is partly molten or liquid. Mercury's outer shell, comparable to Earth's outer shell (called the mantle and crust), is only about 400 kilometers (250 miles) thick."/>
          <Paragraph content="Most of Mercury's surface would appear greyish-brown to the human eye. The bright streaks are called 'crater rays'. They are formed when an asteroid or comet strikes the surface. The tremendous amount of energy that is released in such an impact digs a big hole in the ground, and also crushes a huge amount of rock under the point of impact. Some of this crushed material is thrown far from the crater and then falls to the surface, forming the rays. Fine particles of crushed rock are more reflective than large pieces, so the rays look brighter. The space environment – dust impacts and solar-wind particles – causes the rays to darken with time." />
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
            className="keep-jupiter style-background"
              content="Jupiter"
              icon={<i className="bi bi-arrow-right"></i>}
            />
            <CardExploring
            className="keep-saturn style-background"
              content="Saturn"
              icon={<i className="bi bi-arrow-right"></i>}
            />
            <CardExploring
            className="keep-venus style-background"
              content="Venus"
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
    </>
  );
};

export default Mercury;
