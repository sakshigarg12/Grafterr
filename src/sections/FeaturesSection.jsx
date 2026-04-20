import useContent from "../hooks/useContent";
import { fetchFeaturesContent } from "../services/api";
import useCarousel from "../hooks/useCarousel";
import ProductCard from "../ui/ProductCard";
import Skeleton from "../ui/Skeleton";

function FeaturesSection() {
  const { data, loading, error, retry } = useContent(fetchFeaturesContent);

  // ✅ safe fallback (avoid crash when data is null)
  const length = data?.products?.length || 0;

  const { index, next, prev } = useCarousel(length);

  let itemsPerView = 1;

  if (window.innerWidth >= 1024) {
    itemsPerView = 3;
  } else if (window.innerWidth >= 768) {
    itemsPerView = 2;
  }

  if (loading || !data) {
    return (
      <div className="carousel-container">
        <Skeleton />
        <Skeleton />
        <Skeleton />
      </div>
    );
  }
  if (error) {
    return (
      <div className="hero">
        <p>Failed to load features.</p>
        <button onClick={retry}>Retry</button>
      </div>
    );
  }

  return (
    <section className="hero">
      <h2>
        {data.title} <span className="gradient-text">{data.titleAccent}</span>
      </h2>

      <p>{data.subtitle}</p>

      <div className="features-divider"></div>

      <div className="carousel-container">
        <div
          className="carousel-track"
          style={{
            transform: `translateX(-${index * (100 / itemsPerView)}%)`,
          }}
        >
          {data.products.map((item, i) => (
            <ProductCard key={i} title={item.title} desc={item.desc} />
          ))}
        </div>
      </div>

      <div className="carousel-buttons">
        <button onClick={prev}>⬅</button>
        <button onClick={next}>➡</button>
      </div>
    </section>
  );
}

export default FeaturesSection;
