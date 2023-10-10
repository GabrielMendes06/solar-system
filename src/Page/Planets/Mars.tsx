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
import ScrollToTop from "../../components/GlobalComponents.tsx/ScrollToTop";
import Phobos from "./assets/images/phobos.webp"
import Deimos from "./assets/images/deimos.webp"
import "./css/PagePlanets.css";
//model
import MarsModel from "./assets/models/mars.glb";




const Mars: React.FC = () => {
  return (
    <>
      <header>
        <Navbar />
        <TopOfPage
          planet="mars"
          cardTitle="Mars"
          cardText="The only planet we know of inhabited entirely by robots."
          carousel={
            <BottomCarousel
              children={[
                {
                  title: "DAYS IN A YEAR",
                  content: "687",
                },
                {
                  title: "AVG TEMPERATURE",
                  content: "-63.15ºC",
                },
                {
                  title: "MASS",
                  content: "6.41712 x 10^23",
                },
                {
                  title: "GRAVITY",
                  content: "3.71 m/s^2",
                },
                {
                  title: "DENSITY",
                  content: "3.93 g/cm^3",
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
              <Paragraph content="Mars is no place for the faint-hearted. It’s dry, rocky, and bitter cold. The fourth planet from the Sun, Mars is one of Earth's two closest planetary neighbors (Venus is the other). Mars is one of the easiest planets to spot in the night sky – it looks like a bright red point of light." />
              <Paragraph 
              content="Despite being inhospitable to humans, robotic explorers – like NASA's Perseverance rover – are serving as pathfinders to eventually get humans to the surface of the Red Planet." 
              className="mb-3"/>
              <Title content="Potential for Life"/>
              <Paragraph content="Scientists don't expect to find living things currently thriving on Mars. Instead, they're looking for signs of life that existed long ago, when Mars was warmer and covered with water."/>
              <Title content="Size and Distance" className="mb-3"/>
              <Paragraph content="With a radius of 2,106 miles (3,390 kilometers), Mars is about half the size of Earth. If Earth were the size of a nickel, Mars would be about as big as a raspberry." />
              <Paragraph content="From an average distance of 142 million miles (228 million kilometers), Mars is 1.5 astronomical units away from the Sun. One astronomical unit (abbreviated as AU), is the distance from the Sun to Earth. From this distance, it takes sunlight 13 minutes to travel from the Sun to Mars." />
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
              src={MarsModel}
              alt="3D Model of Mars "
              camera-controls
            ></model-viewer>
          </NightBackground>

          <div className="align-self-start model-description">
            <Paragraph
              content="A 3D model of Mars."
              className="text-secondary m-0"
            />
            <Paragraph content="Use our technology and have fun!" />
          </div>
        </div>
        <div className="container new-font text-small">
          <Title content="Moons"/>
          <Paragraph content="Mars has two small moons, Phobos and Deimos, that may be captured asteroids. They're potato-shaped because they have too little mass for gravity to make them spherical. The moons get their names from the horses that pulled the chariot of the Greek god of war, Ares."/>
          <Paragraph content="Phobos, the innermost and larger moon, is heavily cratered, with deep grooves on its surface. It is slowly moving towards Mars and will crash into the planet or break apart in about 50 million years. Deimos is about half as big as Phobos and orbits two and a half times farther away from Mars. Oddly-shaped Deimos is covered in loose dirt that often fills the craters on its surface, making it appear smoother than pockmarked Phobos."/>
          <div >
              <figure className="row">
              <div className="col-sm max-content">
                <img src={Phobos} alt="Phobos image" className="col-sm w-100 min-w-50" style={{minWidth: '300px'}} />
                <figcaption className="figcaption">Phobos, the larger of Mars' two moons, is seen in this image taken by NASA's High Resolution Imaging Science Experiment (HiRISE) camera on the Mars Reconnaissance Orbiter.</figcaption>
              </div>
              <div className="col-sm max-content">
                <img src={Deimos} alt="" className="col-sm w-100" style={{minWidth: '300px'}}/>
                <figcaption className="figcaption">This enhanced-color image of Deimos, the smaller of the two moons of Mars, was taken on Feb. 21, 2009. The image was taken by HiRISE (High Resolution Imaging Science Experiment) on NASA's Mars Reconnaissance Orbiter.</figcaption>
              </div>
              </figure>
          </div>
          <Title content="Rings"/>
          <Paragraph content="Mars has no rings. However, in 50 million years when Phobos crashes into Mars or breaks apart, it could create a dusty ring around the Red Planet."/>
          <Title content="Formation"/>
          <Paragraph content="When the solar system settled into its current layout about 4.5 billion years ago, Mars formed when gravity pulled swirling gas and dust in to become the fourth planet from the Sun. Mars is about half the size of Earth, and like its fellow terrestrial planets, it has a central core, a rocky mantle, and a solid crust."/>
          <Title content="Structure" className="mb-3" />
          <Paragraph content="Mars has a dense core at its center between 930 and 1,300 miles (1,500 to 2,100 kilometers) in radius. It's made of iron, nickel, and sulfur. Surrounding the core is a rocky mantle between 770 and 1,170 miles (1,240 to 1,880 kilometers) thick, and above that, a crust made of iron, magnesium, aluminum, calcium, and potassium. This crust is between 6 and 30 miles (10 to 50 kilometers) deep." />
          <Title content="Surface"/>
          <Paragraph content="The Red Planet is actually many colors. At the surface, we see colors such as brown, gold, and tan. The reason Mars looks reddish is due to oxidization – or rusting – of iron in the rocks, regolith (Martian “soil”), and dust of Mars. This dust gets kicked up into the atmosphere and from a distance makes the planet appear mostly red. Interestingly, while Mars is about half the diameter of Earth, its surface has nearly the same area as Earth’s dry land. Its volcanoes, impact craters, crustal movement, and atmospheric conditions such as dust storms have altered the landscape of Mars over many years, creating some of the solar system's most interesting topographical features."/>
          <Paragraph content="A large canyon system called Valles Marineris is long enough to stretch from California to New York – more than 3,000 miles (4,800 kilometers). This Martian canyon is 200 miles (320 kilometers) at its widest and 4.3 miles (7 kilometers) at its deepest. That's about 10 times the size of Earth's Grand Canyon. Mars is home to the largest volcano in the solar system, Olympus Mons. It's three times taller than Earth's Mt. Everest with a base the size of the state of New Mexico."/>
          <Paragraph content="Mars appears to have had a watery past, with ancient river valley networks, deltas, and lakebeds, as well as rocks and minerals on the surface that could only have formed in liquid water. Some features suggest that Mars experienced huge floods about 3.5 billion years ago. There is water on Mars today, but the Martian atmosphere is too thin for liquid water to exist for long on the surface. Today, water on Mars is found in the form of water-ice just under the surface in the polar regions as well as in briny (salty) water, which seasonally flows down some hillsides and crater walls."/>
          <Title content="Atmosphere"/>
          <Paragraph content="Mars has a thin atmosphere made up mostly of carbon dioxide, nitrogen, and argon gases. To our eyes, the sky would be hazy and red because of suspended dust instead of the familiar blue tint we see on Earth. Mars' sparse atmosphere doesn't offer much protection from impacts by such objects as meteorites, asteroids, and comets."/>
          <Paragraph content="The temperature on Mars can be as high as 70 degrees Fahrenheit (20 degrees Celsius) or as low as about -225 degrees Fahrenheit (-153 degrees Celsius). And because the atmosphere is so thin, heat from the Sun easily escapes this planet. If you were to stand on the surface of Mars on the equator at noon, it would feel like spring at your feet (75 degrees Fahrenheit or 24 degrees Celsius) and winter at your head (32 degrees Fahrenheit or 0 degrees Celsius)."/>
          <Paragraph content="Occasionally, winds on Mars are strong enough to create dust storms that cover much of the planet. After such storms, it can be months before all of the dust settles."/>
        </div>
        <div className="container mb-5">
          <Paragraph content="KEEP EXPLORING" className="text-exploring mt-5" />
          <Title content="Discover More Topics" className="mb-5" />
          <div className="row justify-content-center">
            <CardExploring
              className="keep-pluto style-background"
              content="Pluto"
              icon={<i className="bi bi-arrow-right"></i>}
              navigateRoute='/dwarf-planets/pluto'
            />
            <CardExploring
              className="keep-jupiter style-background"
              content="Jupiter"
              icon={<i className="bi bi-arrow-right"></i>}
              navigateRoute='/jupiter'
            />
            <CardExploring
              className="keep-saturn style-background"
              content="Saturn"
              icon={<i className="bi bi-arrow-right"></i>}
              navigateRoute='/saturn'
            />
            <CardExploring
              className="keep-venus style-background"
              content="Venus"
              icon={<i className="bi bi-arrow-right"></i>}
              navigateRoute='/venus'
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

export default Mars;