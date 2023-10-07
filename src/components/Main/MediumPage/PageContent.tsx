import CardStructure from "../../GlobalComponents.tsx/CardStructure";
import Title from "../../GlobalComponents.tsx/Title";
import sun from "../assets/sun.webp";
import meteors from "../assets/meteors.webp";
import moon from "../assets/moon.webp";
import jupiter from "../assets/jupiter.webp";
import uranus from "../assets/uranus.webp";
import asteroid from "../assets/asteroid.webp";
import { useNavigate } from "react-router-dom";
import { Fade } from "react-awesome-reveal";

const PageContent: React.FC = () => {

  const navigate = useNavigate()

  return (
    <>
      <Title
        className="h1 text-light text-center new-font p-4 border-bottom border-dark border-3 w-50 mx-auto"
        content="Curiosities about the solar system"
      />
      <Fade delay={100}>
        <div className="row">
          <CardStructure
            feature="Information about our star"
            text="Our Sun is a 4.5 billion-year-old star – a hot glowing ball of hydrogen and helium at the center of our solar system. The Sun is about 93 million miles (150 million kilometers) from Earth, and without its energy, life as we know it could not exist here on our home planet."
            title="Sun, the star that warms us"
            alt="Sun"
            imgSrc={sun}
          />
          <CardStructure
            feature="Uranus, the coldest planet in the solar system"
            text="Uranus is very cold and windy. It is surrounded by faint rings and more than two dozen small moons as it rotates at a nearly 90-degree angle from the plane of its orbit. This unique tilt makes Uranus appear to spin on its side. Uranus is blue-green in color due to large amounts of methane, which absorbs red light but allows blues to be reflected back into space. The atmosphere is mostly hydrogen and helium, but also includes large amounts of water, ammonia and methane."
            title="The first planet discovered with the aid of a telescope."
            alt="Uranus"
            imgSrc={uranus}
            onClick={() => navigate('/uranus')}  
          />
          <CardStructure
            feature="Moons of Our Solar System"
            text="The moon count most people are familiar with stands at 290: One moon for Earth; two for Mars; 95 at Jupiter; 146 at Saturn; 27 at Uranus; 14 at Neptune; and five for dwarf planet Pluto. According to NASA/JPL's Solar System Dynamics team, astronomers have documented more than 460 natural satellites orbiting smaller objects, such as asteroids, other dwarf planets, or Kuiper Belt Objects (KBOs) beyond the orbit of Neptune."
            title="How Many Moons Are There in Our Solar System?"
            alt="Moon"
            imgSrc={moon}
          />
          <CardStructure
            feature="The big planet Jupiter"
            text="Jupiter's stripes and swirls are actually cold, windy clouds of ammonia and water, floating in an atmosphere of hydrogen and helium. Jupiter’s iconic Great Red Spot is a giant storm bigger than Earth that has raged for hundreds of years."
            title="Jupiter is, by far, the largest planet in the solar system – more than twice as massive as all the other planets combined."
            alt="Jupiter"
            imgSrc={jupiter}
            onClick={() => navigate('/jupiter')}
          />
          <CardStructure
            feature="Meteors and Meteorites"
            text="Comets are frozen leftovers from the formation of the solar system composed of dust, rock, and ices. They range from a few miles to tens of miles wide, but as they orbit closer to the Sun, they heat up and spew gases and dust into a glowing head that can be larger than a planet. This material forms a tail that stretches millions of miles."
            title="What’s the difference between a meteoroid, a meteor, and a meteorite?"
            alt="Meteor"
            imgSrc={meteors}
          />
          <CardStructure
            feature="Asteroids, stone giants"
            text="Asteroids, sometimes called minor planets, are rocky, airless remnants left over from the early formation of our solar system about 4.6 billion years ago."
            title="The current known asteroid count is: 1,308,871"
            alt="Moon"
            imgSrc={asteroid}
          />
        </div>
      </Fade>
    </>
  );
};

export default PageContent;
