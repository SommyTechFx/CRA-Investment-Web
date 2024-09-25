import { FaLocationArrow } from "react-icons/fa";
import "./Hero.css";

function Hero() {
  return (
    <div className="hero">
      <div className="hero-text container">
        <h1>Delivering Premium Stockfish, From Ocean to Plate..</h1>
        <p>
          At CRA Investment Ltd., we bring you the finest, sustainably sourced
          stockfish from the icy waters of Norway, delivered with unmatched
          quality and reliability. we are committed to ensuring that every
          product meets the highest standards, whether you&apos;re a business,
          retailer, or chef seeking the best seafood in the market. Discover why
          our stockfish is the top choice for discerning customers across the
          globe!
        </p>
        <button className="btn">
          Explore more <FaLocationArrow className="arrow" />
        </button>
      </div>
    </div>
  );
}

export default Hero;
