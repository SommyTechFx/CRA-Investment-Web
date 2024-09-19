import "./Program.css";
import program_1 from "./../../assets/program-1.png";
import program_2 from "./../../assets/program-2.png";
import program_3 from "./../../assets/program-3.png";

function Programs() {
  return (
    <div className="programs" id="">
      <div className="program">
        <img src={program_1} alt="" />
        <div className="caption">
          <p>Quality</p>
        </div>
      </div>
      <div className="program">
        <img src={program_2} alt="" />
        <div className="caption">
          <p>Quantity</p>
        </div>
      </div>
      <div className="program">
        <img src={program_3} alt="" />
        <div className="caption">
          <p>Taste</p>
        </div>
      </div>
    </div>
  );
}

export default Programs;
