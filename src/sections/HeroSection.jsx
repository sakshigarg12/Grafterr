import useContent from "../hooks/useContent";
import { fetchHeroContent } from "../services/api";
import FloatingShape from "../ui/FloatingShape";

function HeroSection() {
  const { data, loading, error, retry } = useContent(fetchHeroContent);
  if (loading) {
    return <p className="hero">Loading...</p>;
  }

  if (error) {
    return (
      <div className="hero">
        <p>Failed to load content</p>
        <button onClick={retry}>Retry</button>
      </div>
    );
  }

  return (
    <section className="hero">
      <FloatingShape type="circle" />
      <FloatingShape type="rectangle" />
      <h1>
        {data.headlinePrefix}{" "}
        <span className="gradient-text">{data.headlineGradient}</span>
      </h1>

      <p>{data.subheadline}</p>
      <button className="cta-button">{data.cta}</button>
    </section>
  );
}

export default HeroSection;
