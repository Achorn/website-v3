import "./Main.css";
import HeroSection from "./hero/Hero";
import UnderConstruction from "../components/display/under-construction/Under-construction";

function Main() {
  return (
    <header className="Main-header">
      <HeroSection />
      <NavBar />
      <TopicSection />
      <TopicSection />
      <TopicSection />
    </header>
  );
}

function NavBar() {
  return <div className="Nav-bar">Home - music - coding - design</div>;
}

function TopicSection() {
  return (
    <div className="Topic-section">
      <UnderConstruction />
    </div>
  );
}

export default Main;
