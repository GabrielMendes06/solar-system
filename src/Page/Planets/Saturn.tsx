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
import SaturnModel from "./assets/models/saturn.glb";
import ScrollToTop from "../../components/GlobalComponents.tsx/ScrollToTop";

const Saturn: React.FC = () => {
  return (
    <>
      <header>
        <Navbar />
        <TopOfPage
          planet="saturn"
          cardTitle="Saturn"
          cardText="Saturn's beautiful rings are relatively young. They may have formed in the era of the dinosaurs here on Earth."
          carousel={
            <BottomCarousel
              children={[
                {
                  title: "DAYS IN A YEAR",
                  content: "10.755",
                },
                {
                  title: "AVG TEMPERATURE",
                  content: "-139.15ºC",
                },
                {
                  title: "MASS",
                  content: "5.68336 x 10^26",
                },
                {
                  title: "GRAVITY",
                  content: "10.44 m/s^2",
                },
                {
                  title: "DENSITY",
                  content: "0.69 g/cm^3",
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
              <Paragraph content="Saturn is the sixth planet from the Sun and the second largest planet in our solar system. Adorned with a dazzling system of icy rings, Saturn is unique among the planets." />
              <Paragraph content="It is not the only planet to have rings, but none are as spectacular or as complex as Saturn's. Like fellow gas giant Jupiter, Saturn is a massive ball made mostly of hydrogen and helium." />
              <Paragraph
                content="The farthest planet from Earth discovered by the unaided human eye, Saturn has been known since ancient times. The planet is named for the Roman god of agriculture and wealth, who was also the father of Jupiter."
                className="mb-3"
              />
              <Title content="Potential for Life"/>
              <Paragraph content="Saturn's environment is not conducive to life as we know it. The temperatures, pressures, and materials that characterize this planet are most likely too extreme and volatile for organisms to adapt to."/>
              <Paragraph content="While planet Saturn is an unlikely place for living things to take hold, the same is not true of some of its many moons. Satellites like Enceladus and Titan, home to internal oceans, could possibly support life."/>
              <Title content="Size and Distance" className="mb-3" />
              <Paragraph content="With a radius of 36,183.7 miles (58,232 kilometers), Saturn is 9 times wider than Earth. If Earth were the size of a nickel, Saturn would be about as big as a volleyball." />
              <Paragraph content="From an average distance of 886 million miles (1.4 billion kilometers), Saturn is 9.5 astronomical units away from the Sun. One astronomical unit (abbreviated as AU), is the distance from the Sun to Earth. From this distance, it takes sunlight 80 minutes to travel from the Sun to Saturn." />
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
              src={SaturnModel}
              alt="Saturn model 3D"
              camera-controls
            ></model-viewer>
          </NightBackground>

          <div className="align-self-start model-description">
            <Paragraph
              content="A 3D model of Saturn, the ringed gas giant planet."
              className="text-secondary m-0"
            />
            <Paragraph content="Use our technology and have fun!" />
          </div>
        </div>
        <div className="container new-font text-small">
          <Title content="Moons"/>
          <Paragraph content="Saturn is home to a vast array of intriguing and unique worlds. From the haze-shrouded surface of Titan to crater-riddled Phoebe, each of Saturn's moons tells another piece of the story surrounding the Saturn system. As of June 8, 2023, Saturn has 146 moons in its orbit, with others continually awaiting confirmation of their discovery and official naming by the International Astronomical Union (IAU)."/>
          <Title content="Rings"/>
          <Paragraph content="Saturn's rings are thought to be pieces of comets, asteroids, or shattered moons that broke up before they reached the planet, torn apart by Saturn's powerful gravity. They are made of billions of small chunks of ice and rock coated with other materials such as dust. The ring particles mostly range from tiny, dust-sized icy grains to chunks as big as a house. A few particles are as large as mountains. The rings would look mostly white if you looked at them from the cloud tops of Saturn, and interestingly, each ring orbits at a different speed around the planet."/>
          <Paragraph content="Saturn's ring system extends up to 175,000 miles (282,000 kilometers) from the planet, yet the vertical height is typically about 30 feet (10 meters) in the main rings. Named alphabetically in the order they were discovered, the rings are relatively close to each other, with the exception of a gap measuring 2,920 miles (4,700 kilometers) in width called the Cassini Division that separates Rings A and B. The main rings are A, B, and C. Rings D, E, F, and G are fainter and more recently discovered."/>
          <Paragraph content="Starting at Saturn and moving outward, there is the D ring, C ring, B ring, Cassini Division, A ring, F ring, G ring, and finally, the E ring. Much farther out, there is the very faint Phoebe ring in the orbit of Saturn's moon Phoebe." />
          <Title content="Formation"/>
          <Paragraph content="Saturn took shape when the rest of the solar system formed about 4.5 billion years ago when gravity pulled swirling gas and dust in to become this gas giant. About 4 billion years ago, Saturn settled into its current position in the outer solar system, where it is the sixth planet from the Sun. Like Jupiter, Saturn is mostly made of hydrogen and helium, the same two main components that make up the Sun."/>
          <Title content="Structure" className="mb-3" />
          <Paragraph content="Like Jupiter, Saturn is made mostly of hydrogen and helium. At Saturn's center is a dense core of metals like iron and nickel surrounded by rocky material and other compounds solidified by intense pressure and heat. It is enveloped by liquid metallic hydrogen inside a layer of liquid hydrogen –similar to Jupiter's core but considerably smaller." />
          <Paragraph content="It's hard to imagine, but Saturn is the only planet in our solar system with an average density that is less than water. The giant gas planet could float in a bathtub if such a colossal thing existed." />
          <Title content="Surface"/>
          <Paragraph content="As a gas giant, Saturn doesn’t have a true surface. The planet is mostly swirling gases and liquids deeper down. While a spacecraft would have nowhere to land on Saturn, it wouldn’t be able to fly through unscathed either. The extreme pressures and temperatures deep inside the planet would crush, melt, and vaporize any spacecraft trying to fly into the planet."/>
          <Title content="Atmosphere"/>
          <Paragraph content="Saturn is blanketed with clouds that appear as faint stripes, jet streams, and storms. The planet is many different shades of yellow, brown, and gray. Winds in the upper atmosphere reach 1,600 feet per second (500 meters per second) in the equatorial region. In contrast, the strongest hurricane-force winds on Earth top out at about 360 feet per second (110 meters per second). And the pressure – the same kind you feel when you dive deep underwater – is so powerful it squeezes gas into a liquid."/>
          <Paragraph content="Saturn's north pole has an interesting atmospheric feature – a six-sided jet stream. This hexagon-shaped pattern was first noticed in images from the Voyager I spacecraft and has been more closely observed by the Cassini spacecraft since. Spanning about 20,000 miles (30,000 kilometers) across, the hexagon is a wavy jet stream of 200-mile-per-hour winds (about 322 kilometers per hour) with a massive, rotating storm at the center. There is no weather feature like it anywhere else in the solar system."/>
        </div>
        <div className="container mb-5">
          <Paragraph content="KEEP EXPLORING" className="text-exploring mt-5" />
          <Title content="Discover More Topics" className="mb-5" />
          <div className="row justify-content-center">
            <CardExploring
              className="earth style-background"
              content="Earth"
              icon={<i className="bi bi-arrow-right"></i>}
              navigateRoute='/earth'
            />
            <CardExploring
              className="eris style-background"
              content="Eris"
              icon={<i className="bi bi-arrow-right"></i>}
              navigateRoute='/dwarf-planets/eris'
            />
            <CardExploring
              className="neptune style-background"
              content="Neptune"
              icon={<i className="bi bi-arrow-right"></i>}
              navigateRoute='/neptune'
            />
            <CardExploring
              className="pluto style-background"
              content="Pluto"
              icon={<i className="bi bi-arrow-right"></i>}
              navigateRoute='/dwarf-planets/pluto'
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

export default Saturn;
