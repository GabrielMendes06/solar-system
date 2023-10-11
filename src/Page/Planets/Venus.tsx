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
import ScrollToTop from "../../components/GlobalComponents.tsx/ScrollToTop";



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
              <Title content='Potencial for Life'/>
              <Paragraph content="Thirty miles up (about 50 kilometers) from the surface of Venus temperatures range from 86 to 158 Fahrenheit (30 to 70 Celsius). This temperature range could accommodate Earthly life, such as “extremophile” microbes. And atmospheric pressure at that height is similar to what we find on Earth’s surface. At the tops of Venus’ clouds, whipped around the planet by winds measured as high as 224 mph (360 kph), we find another transformation. Persistent, dark streaks appear. Scientists are so far unable to explain why these streaks remain stubbornly intact, even amid hurricane-force winds. They also have the odd habit of absorbing ultraviolet radiation."/>
              <Paragraph content="The most likely explanations focus on fine particles, ice crystals, or even a chemical compound called iron chloride. Although it's much less likely, another possibility considered by scientists who study astrobiology is that these streaks could be made up of microbial life, Venus-style. Astrobiologists note that ring-shaped linkages of sulfur atoms, known to exist in Venus’ atmosphere, could provide microbes with a kind of coating that would protect them from sulfuric acid. These handy chemical cloaks would also absorb potentially damaging ultraviolet light and re-radiate it as visible light." />
              <Paragraph content="Some of the Russian Venera probes did, indeed, detect particles in Venus’ lower atmosphere about a micron in length – roughly the same size as a bacterium on Earth. None of these findings provide compelling evidence for the existence of life in Venus’ clouds. But the questions they raise, along with Venus’ vanished ocean, its violently volcanic surface, and its hellish history, make a compelling case for missions to investigate our temperamental sister planet. There is much, it would seem, that she can teach us."/>
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
          <Title content='Moons'/>
          <Paragraph content="Venus has no moons."/> 
          <Title content='Rings'/>
          <Paragraph content="Venus has no rings"/>
          <Title content="Formation"/>
          <Paragraph content="A critical question for scientists who search for life among the stars: How do habitable planets get their start? The close similarities of early Venus and Earth, and their very different fates, provide a kind of test case for scientists who study planet formation. Similar size, similar interior structure, both harboring oceans in their younger days. Yet one is now an inferno, while the other is the only known world to host abundant life. The factors that set these planets on almost opposite paths began, most likely, in the swirling disk of gas and dust from which they were born. Somehow, 4.6 billion years ago that disk around our Sun accreted, cooled, and settled into the planets we know today. Better knowledge of the formation history of Venus could help us better understand Earth – and rocky planets around other stars."/>
          <Title content="Structure" className="mb-3" />
          <Paragraph content="If we could slice Venus and Earth in half, pole to pole, and place them side by side, they would look remarkably similar. Each planet has an iron core enveloped by a hot-rock mantle; the thinnest of skins forms a rocky, exterior crust. On both planets, this thin skin changes form and sometimes erupts into volcanoes in response to the ebb and flow of heat and pressure deep beneath." />
          <Paragraph content="On Earth, the slow movement of continents over thousands and millions of years reshapes the surface, a process known as “plate tectonics.” Something similar might have happened on Venus early in its history. Today a key element of this process could be operating: subduction, or the sliding of one continental “plate” beneath another, which can also trigger volcanoes. Subduction is believed to be the first step in creating plate tectonics." />
          <Title content="Surface"/>
          <Paragraph content="The Soviet Union sent a series of probes to Venus between 1961 and 1984 as part of its Venera program (Venera is Russian for Venus). Ten probes made it to the surface, and a few functioned briefly after landing. The longest survivor lasted two hours; the shortest, 23 minutes. Photos snapped before the landers fried show a barren, dim, and rocky landscape, and a sky that is likely some shade of sulfur yellow."/>
          <Paragraph content="Volcanoes and tectonic forces appear to have erased most traces of the early surface of Venus. Newer computer models indicate the resurfacing may have happened piecemeal over an extended period of time. The average age of surface features could be as young as 150 million years, with some older surfaces mixed in."/>
          <Paragraph content="Venus has valleys and high mountains dotted with thousands of volcanoes. Its surface features – most named for both real and mythical women – include Ishtar Terra, a rocky, highland area around the size of Australia near the north pole, and an even larger, South-America-sized region called Aphrodite Terra that stretches across the equator. One mountain reaches 36,000 feet (11 kilometers), higher than Mt. Everest. Notably, except for Earth, Venus has by far the fewest impact craters of any rocky planet."/>
          <Title content="Atmosphere"/>
          <Paragraph content="Venus’ atmosphere is one of extremes. With the hottest surface in the solar system, apart from the Sun itself, Venus is hotter even than the innermost planet, charbroiled Mercury. The atmosphere is mostly carbon dioxide – the same gas driving the greenhouse effect on Venus and Earth – with clouds composed of sulfuric acid. And at the surface, the hot, high-pressure carbon dioxide behaves in a corrosive fashion. But higher up in the atmosphere, temperatures and pressure begin to ease."/>
        </div>
        <div className="container mb-5">
          <Paragraph content="KEEP EXPLORING" className="text-exploring mt-5" />
          <Title content="Discover More Topics" className="mb-5" />
          <div className="row justify-content-center">
            <CardExploring
              className="saturn-moon style-background"
              content="Moons of Saturn"
              icon={<i className="bi bi-arrow-right"></i>}
              navigateRoute="/saturn/moon"
            />
            <CardExploring
              className="pluto style-background"
              content="Pluto"
              icon={<i className="bi bi-arrow-right"></i>}
              navigateRoute='/dwarf-planets/pluto'
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

export default Venus;
