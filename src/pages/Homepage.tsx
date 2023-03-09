import Categories from "../components/Categories";
import Featured from "../components/Features";
import Hero from "../components/Hero";
import SubHero from "../components/SubHero";

function Homepage() {
  return (
    <div>
      <Hero />

      <div className="max-w-7xl mx-auto">
        <SubHero />
        <Categories />
        <Featured />
      </div>
    </div>
  );
}

export default Homepage;
