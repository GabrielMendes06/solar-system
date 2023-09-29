import CardStructure from "../../GlobalComponents.tsx/CardStructure";
import Title from "../../GlobalComponents.tsx/Title";
import sun from "../assets/sun.jpg";
import meteors from "../assets/meteors.jpg";
import moon from "../assets/moon.jpg";
import jupiter from "../assets/jupiter.jpg";
import uranus from "../assets/uranus.jpg";
import asteroid from "../assets/asteroid.jpg";

const PageContent: React.FC = () => {
  return (
    <>
      <Title
        className="h1 text-center new-font m-4 border-bottom border-3 w-50 mx-auto"
        content="Curiosities about the solar system"
      />
      <div className="row">
        <CardStructure
          feature="Information about our star"
          text="Our Sun is a 4.5 billion-year-old star – a hot glowing ball of hydrogen and helium at the center of our solar system. The Sun is about 93 million miles (150 million kilometers) from Earth, and without its energy, life as we know it could not exist here on our home planet."
          title="sun, the star that warms us"
          alt="Sun"
          imgSrc={sun}
        />
        <CardStructure
          feature="Uranus, the coldest planet in the solar system"
          text="Uranus is very cold and windy. It is surrounded by faint rings and more than two dozen small moons as it rotates at a nearly 90-degree angle from the plane of its orbit. This unique tilt makes Uranus appear to spin on its side. Uranus is blue-green in color due to large amounts of methane, which absorbs red light but allows blues to be reflected back into space. The atmosphere is mostly hydrogen and helium, but also includes large amounts of water, ammonia and methane."
          title="The first planet discovered with the aid of a telescope."
          alt="Uranus"
          imgSrc={uranus}
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
        />
        <CardStructure
          feature="Meteors and Meteorites"
          text="Our Sun is a 4.5 billion-year-old star – a hot glowing ball of hydrogen and helium at the center of our solar system. The Sun is about 93 million miles (150 million kilometers) from Earth, and without its energy, life as we know it could not exist here on our home planet."
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
    </>
  );
};

export default PageContent;
