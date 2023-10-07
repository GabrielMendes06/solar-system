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
import "./css/PagePlanets.css";

//model
import VenusModel from "./assets/models/venus.glb";



const Venus: React.FC = () => {
  return (
    <>
      <header>
        <Navbar />
        <TopOfPage
          planet="venus"
          cardTitle="Venus"
          cardText="Although it's similar in structure and size to Earth, Venus has a thick atmosphere that traps heat in a runaway greenhouse effect, making it the hottest planet in our solar system."
          carousel={
            <BottomCarousel
              children={[
                {
                  title: "DAYS IN A YEAR",
                  content: "225",
                },
                {
                  title: "AVG TEMPERATURE",
                  content: "463.85ºC",
                },
                {
                  title: "MASS",
                  content: "4.86747 x 10^24",
                },
                {
                  title: "GRAVITY",
                  content: "8.87 m/s^2",
                },
                {
                  title: "DENSITY",
                  content: "5.24 g/cm^3",
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
              <Paragraph content="It's a cloud-swaddled planet named for a love goddess, and often called Earth’s twin. But pull up a bit closer, and Venus turns hellish. Our nearest planetary neighbor, the second planet from the Sun, has a surface hot enough to melt lead. The atmosphere is so thick that, from the surface, the Sun is just a smear of light." />
              <Paragraph content="In some ways it is more an opposite of Earth than a twin: Venus spins backward, has a day longer than its year, and lacks any semblance of seasons. It might once have been a habitable ocean world, like Earth, but that was at least a billion years ago. A runaway greenhouse effect turned all surface water into vapor, which then leaked slowly into space. The present-day surface of volcanic rock is blasted by high temperatures and pressures. Asked if the surface of Venus is likely to be life-bearing today, we can give a quick answer: a hard “no.”" />
              <Paragraph
                content="Further, Venus may hold lessons about what it takes for life to get its start ­– on Earth, in our solar system, or across the galaxy. The ingredients are all there, or at least, they used to be. By studying why our neighbor world went in such a different direction with regard to habitability, we could find out what could make other worlds right. And while it might sound absurd, we can’t rule out life on Venus entirely. Temperature, air pressure, and chemistry are much more congenial up high, in those thick, yellow clouds."
                className="mb-3"
              />
              <Title content="Size and Distance" className="mb-3"/>
              <Paragraph content="Our nearness to Venus is a matter of perspective. The planet is nearly as big around as Earth – 7,521 miles (12,104 kilometers) across, versus 7,926 miles (12,756 kilometers) for Earth. From Earth, Venus is the brightest object in the night sky after our own Moon. The ancients, therefore, gave it great importance in their cultures, even thinking it was two objects: a morning star and an evening star. That’s where the trick of perspective comes in." />
              <Paragraph content="Because Venus’ orbit is closer to the Sun than ours, the two of them – from our viewpoint – never stray far from each other. The ancient Egyptians and Greeks saw Venus in two guises: first in one orbital position (seen in the morning), then another (your “evening” Venus), just at different times of the year." />
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
              src={VenusModel}
              alt="Venus model 3D"
              camera-controls
            ></model-viewer>
          </NightBackground>

          <div className="align-self-start model-description">
            <Paragraph
              content="A 3D model of Venus."
              className="text-secondary m-0"
            />
            <Paragraph content="Use our technology and have fun!" />
          </div>
        </div>
        <div className="container new-font text-small">
          <Title content="Structure" className="mb-3" />
          <Paragraph content="If we could slice Venus and Earth in half, pole to pole, and place them side by side, they would look remarkably similar. Each planet has an iron core enveloped by a hot-rock mantle; the thinnest of skins forms a rocky, exterior crust. On both planets, this thin skin changes form and sometimes erupts into volcanoes in response to the ebb and flow of heat and pressure deep beneath." />
          <Paragraph content="On Earth, the slow movement of continents over thousands and millions of years reshapes the surface, a process known as “plate tectonics.” Something similar might have happened on Venus early in its history. Today a key element of this process could be operating: subduction, or the sliding of one continental “plate” beneath another, which can also trigger volcanoes. Subduction is believed to be the first step in creating plate tectonics." />
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
              className="keep-venus style-background"
              content="Venus"
              icon={<i className="bi bi-arrow-right"></i>}
            />
            <CardExploring
              className="keep-neptune style-background"
              content="Neptune"
              icon={<i className="bi bi-arrow-right"></i>}
            />
            <CardExploring
              className="keep-mercury style-background"
              content="Mercury"
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

export default Venus;
