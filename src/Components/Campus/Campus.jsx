import "./Campus.css";
import gallery1 from "./../../assets/gallery1.png";
import gallery2 from "./../../assets/gallery2.png";
import gallery3 from "./../../assets/gallery3.png";
import gallery4 from "./../../assets/gallery4.png";
import { FaLocationArrow } from "react-icons/fa";
function Campus() {
  return (
    <div className="campus container">
      <div className="gallery">
        <img src={gallery1} alt="" />

        <img src={gallery2} alt="" />

        <img src={gallery3} alt="" />

        <img src={gallery4} alt="" />
      </div>
      <button className="btn dark-btn">
        See more here <FaLocationArrow className="arrow white-arrow" />
      </button>
    </div>
  );
}

export default Campus;
