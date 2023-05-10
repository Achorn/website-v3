import { ReactComponent as AcornSvg } from "../assets/acorn.svg";
import "./Main.css";
import HeroSection from "./hero/Hero";

function Main() {
  return (
    <header className="Main-header">
      <HeroSection />
      <TopicSection />
      <TopicSection />
      <TopicSection />
    </header>
  );
}

function UnderConstruction() {
  return (
    <div className="Under-construction">
      <h3 id="under-construction-text">UNDER </h3>
      <AcornSvg className="Acorn-logo" />
      <h3 id="under-construction-text"> CONSTRUCTION</h3>
    </div>
  );
}

function TopicSection() {
  return (
    <div className="Topic-section">
      <UnderConstruction />
    </div>
  );
}

export default Main;
