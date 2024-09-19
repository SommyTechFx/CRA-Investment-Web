import { FaLocationArrow } from "react-icons/fa";
import "./Hero.css";

function Hero() {
  return (
    <div className="hero">
      <div className="hero-text container">
        <h1>We Ensure better Education for a better World</h1>
        <p>
          Our cutting-edge curriculum is designed to empower students with the
          knowledge, skills, and experiences needed to excel in the dynamic
          field of education
        </p>
        <button className="btn">
          Explore more <FaLocationArrow className="arrow" />
        </button>
      </div>
    </div>
  );
}

export default Hero;
