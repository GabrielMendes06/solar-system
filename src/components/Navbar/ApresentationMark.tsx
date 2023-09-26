import SolarSystem from "./imagens/sistema-solar.png"

function ApresentationMark() {
  return (
    <>
      <img src={SolarSystem} alt="SolarSystem" className="icon-nav" />
      <div>
        <p className="text-light new-font config-text">SolarSystem</p>
        <p className="text-light new-font config-text thin-text">
          Galaxy of the universe, our home
        </p>
      </div>
    </>
  );
}

export default ApresentationMark
