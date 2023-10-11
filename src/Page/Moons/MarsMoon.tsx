//components, css
import Navbar from "../../components/Navbar/Navbar";
import TopOfPage from "../../components/SecondPagePlanets/TopOfPage";
import NightBackground from "../../components/Main/MediumPage/NightBackground";
import FinalPage from "../../components/Footer/FinalPage";
import Intercession from "../../components/Main/MediumPage/Intercession";
import Paragraph from "../../components/GlobalComponents.tsx/Paragraph";
import Title from "../../components/GlobalComponents.tsx/Title";
import CardExploring from "../../components/GlobalComponents.tsx/CardExploring";
import Phobos from "../Planets/assets/images/phobos.webp";
import Deimos from "../Planets/assets/images/deimos.webp";
import "../Planets/css/PagePlanets.css";

//model
import ScrollToTop from "../../components/GlobalComponents.tsx/ScrollToTop";

const MarsMoon: React.FC = () => {
  return (
    <>
      <header>
        <Navbar />
        <TopOfPage
          planet="mars-moon"
          cardTitle="Moons of Mars"
          cardText="Mars has two moons, Phobos and Deimos. Both are believed to be captured asteroids or other debris from early in the formation of our solar system."
          className="flex justify-content-center"
          marginTopCard="0"
        />
      </header>
      <main>
        <Intercession
          children={
            <div>
              <Title content="Overview" className="mb-3" />
              <Paragraph content="Mars' moons are among the smallest in the solar system. Phobos is a bit larger than Deimos, and orbits only 3,700 miles (6,000 kilometers) above the Martian surface. No known moon orbits closer to its planet. It whips around Mars three times a day, while the more distant Deimos takes 30 hours for each orbit. Phobos is gradually spiraling inward, drawing about six feet (1.8 meters) closer to the planet each century. Within 50 million years, it will either crash into Mars or break up and form a ring around the planet." />
              <Paragraph content="To someone standing on the Mars-facing side of Phobos, Mars would take up a large part of the sky. And people may one day do just that. Scientists have discussed the possibility of using one of the Martian moons as a base from which astronauts could observe the Red Planet and launch robots to its surface, while shielded by miles of rock from cosmic rays and solar radiation for nearly two-thirds of every orbit." />
              <Paragraph
                content="Like Earth's Moon, Phobos and Deimos always present the same face to their planet. Both are lumpy, heavily-cratered and covered in dust and loose rocks. They are among the darker objects in the solar system. The moons appear to be made of carbon-rich rock mixed with ice and may be captured asteroids."
                className="mb-3"
              />
              <Paragraph content="At its nearest to Earth, Venus is some 38 million miles (about 61 million kilometers) distant. But most of the time the two planets are farther apart; Mercury, the innermost planet, actually spends more time in Earth’s proximity than Venus." />
            </div>
          }
        />

        <div className="container new-font text-small">
          <div>
            <figure className="row">
              <div className="col-sm max-content">
                <img
                  src={Phobos}
                  alt="Phobos"
                  className="col-sm w-100 min-w-50"
                  style={{ minWidth: "300px" }}
                />
                <figcaption className="figcaption">
                  Phobos, the larger of Mars' two moons, is seen in this image
                  taken by NASA's High Resolution Imaging Science Experiment
                  (HiRISE) camera on the Mars Reconnaissance Orbiter.
                </figcaption>
              </div>
              <div className="col-sm max-content">
                <img
                  src={Deimos}
                  alt="Deimos"
                  className="col-sm w-100"
                  style={{ minWidth: "300px" }}
                />
                <figcaption className="figcaption">
                  This enhanced-color image of Deimos, the smaller of the two
                  moons of Mars, was taken on Feb. 21, 2009. The image was taken
                  by HiRISE (High Resolution Imaging Science Experiment) on
                  NASA's Mars Reconnaissance Orbiter.
                </figcaption>
              </div>
            </figure>
          </div>
          <Title content="How Mars Moons Got Their Names" />
          <Paragraph content="Hall named the moons for the mythological sons of Ares, the Greek counterpart of the Roman god, Mars. Phobos means fear and Deimos means dread. Fitting names for the sons of a war god." />
        </div>
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
              className="eris style-background"
              content="Eris"
              icon={<i className="bi bi-arrow-right"></i>}
              navigateRoute='/dwarf-planets/eris'
            />
            <CardExploring
              className="neptune-moon style-background"
              content="Moons of Neptune"
              icon={<i className="bi bi-arrow-right"></i>}
              navigateRoute="/neptune/moon"
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

export default MarsMoon;
