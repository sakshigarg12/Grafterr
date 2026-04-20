import useContent from "../hooks/useContent";
import { fetchNavigation } from "../services/api";

function Navbar() {
  const { data, loading, error, retry } = useContent(fetchNavigation);

  if (loading) return <p className="hero">Loading...</p>;

  if (error) {
    return (
      <div className="hero">
        <p>Error loading nav</p>
        <button onClick={retry}>Retry</button>
      </div>
    );
  }
  return (
    <header className="navbar">
      <div className="logo">{data.logo.text}</div>

      <nav>
        {data.links.map((link, i) => {
          <a key={i}>{link}</a>;
        })}
      </nav>

      <button className="cta-button">{data.ctaNav}</button>
    </header>
  );
}

export default Navbar;
