import Navbar from "../../components/Navbar/Navbar";
import TopOfPage from "../../components/SecondPagePlanets/TopOfPage";
import "../../components/SecondPagePlanets/css/PagePlanets.css";
import BottomCarousel from "../../components/GlobalComponents.tsx/BottomCarousel";
import NightBackground from "../../components/Main/MediumPage/NightBackground";
import FinalPage from "../../components/Footer/FinalPage";
import Intercession from "../../components/Main/MediumPage/Intercession";
import Paragraph from "../../components/GlobalComponents.tsx/Paragraph";
import Title from "../../components/GlobalComponents.tsx/Title";

import MercuryModel from "./mercurio.glb"

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
                className="mb-0"
              />
            </div>
          }
        />

        <NightBackground>
        <model-viewer
        id="model-planet"
        src={MercuryModel}
        alt="Modelo 3D"
        auto-rotate
        camera-controls
      >
         
      </model-viewer>
        </NightBackground>
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
