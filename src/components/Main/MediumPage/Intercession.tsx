import Paragraph from "../../GlobalComponents.tsx/Paragraph";

const Intercession: React.FC = () => {
  return (
    <div className="container w-50 new-font text-small m-auto py-4">
        <Paragraph content="The solar system can be divided into three regions: the inner solar system, the outer solar system, and the Kuiper Belt and Oort Cloud."/>
        <Paragraph content="The inner, rocky planets are Mercury, Venus, Earth, and Mars. These worlds also are known as terrestrial planets because they have solid surfaces. Mercury, Earth, and Mars are currently being explored by spacecraft. Two rovers are on the surface of Mars. NASA's newest rover — Perseverance — landed on Mars on Feb. 18, 2021. Three missions are in development to return to Venus."/>
        <Paragraph content="The outer planets are gas giants Jupiter and Saturn and ice giants Uranus and Neptune. NASA's Juno spacecraft is on an extended mission at Jupiter and ESA's JUICE mission is on the way. NASA also is building Europa Clipper and Dragonfly to explore moons of Jupiter and Saturn."/>
        <Paragraph content="Beyond Neptune, a newer class of smaller worlds called dwarf planets reign, including longtime favorite Pluto. NASA's New Horizons spacecraft visited there in 2015, and is currently exploring the Kuiper Belt beyond Pluto. Thousands more planets have been discovered beyond our solar system. Scientists call them exoplanets (exo means 'from outside')." className="mb-0"/>
    </div>
  );
};

export default Intercession
