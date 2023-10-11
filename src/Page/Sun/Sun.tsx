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
import SunModel from "../Planets/assets/models/sun.glb";
import ScrollToTop from "../../components/GlobalComponents.tsx/ScrollToTop";



const Sun: React.FC = () => {
  return (
    <>
      <header>
        <Navbar />
        <TopOfPage
          planet="sun"
          cardTitle="Sun"
          cardText="The Sun is a yellow dwarf star, a hot ball of glowing gases at the heart of our solar system."
          carousel={
            <BottomCarousel
              children={[
                {
                  title: "AVG TEMPERATURE",
                  content: "5498.85ºC",
                },
                {
                  title: "MASS",
                  content: "1.98892 x 10^30",
                },
                {
                  title: "GRAVITY",
                  content: "274 m/s^2",
                },
                {
                  title: "DENSITY",
                  content: "1,41 g/cm^3",
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
              <Paragraph content="The Sun's gravity holds the solar system together, keeping everything – from the biggest planets to the smallest particles of debris – in its orbit. The connection and interactions between the Sun and Earth drive the seasons, ocean currents, weather, climate, radiation belts and auroras. Though it is special to us, there are billions of stars like our Sun scattered across the Milky Way galaxy." />
              <Paragraph content="The Sun has many names in many cultures. The Latin word for Sun is “sol,” which is the main adjective for all things Sun-related: solar." />
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
              src={SunModel}
              alt="Sun model 3D"
              camera-controls
            ></model-viewer>
          </NightBackground>

          <div className="align-self-start model-description">
            <Paragraph
              content="A 3D model of Sun."
              className="text-secondary m-0"
            />
            <Paragraph content="Use our technology and have fun!" />
          </div>
        </div>
        <div className="container new-font text-small">
          <Title content='Pop Culture'/>
          <Paragraph content="The Sun has inspired us since ancient times. It’s central to mythology and religion in cultures around the world, including the ancient Egyptians, the Aztecs of Mexico, Native American tribes of North and South America, the Chinese, and many others."/> 
          <Paragraph content="Countless musicians have written songs about the Sun. The Beatles had a hit in 1969 with “Here Comes the Sun.” Other popular songs that reference the Sun include: “Walkin’ on the Sun” by Smashmouth; “Ain’t No Sunshine” by Bill Withers; “Walking on Sunshine” by Katrina and the Waves; “Pocketful of Sunshine” by Natasha Bedingfield; and “Let the Sunshine In” by the Fifth Dimension."/>
          <Paragraph content="If you're Superman or a fellow Kryptonian of comic book fame, your powers are heightened by the yellow glow of our Sun. There are several science fiction films featuring the Sun in the storyline."/>
        </div>
        <div className="container mb-5">
          <Paragraph content="KEEP EXPLORING" className="text-exploring mt-5" />
          <Title content="Discover More Topics" className="mb-5" />
          <div className="row justify-content-center">
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
            <CardExploring
              className="saturn style-background"
              content="Saturn"
              icon={<i className="bi bi-arrow-right"></i>}
              navigateRoute='/saturn'
            />
            <CardExploring
              className="makemake style-background"
              content="Makemake"
              icon={<i className="bi bi-arrow-right"></i>}
              navigateRoute='/dwarf-planets/makemake'
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

export default Sun;