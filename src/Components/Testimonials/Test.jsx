import "./Test.css";
import next_icon from "./../../assets/next_icon.png";
import back_icon from "./../../assets/back-icon.png";
import user_1 from "./../../assets/user-1.png";
import user_2 from "./../../assets/user-2.png";
import user_3 from "./../../assets/user-3.png";
import user_4 from "./../../assets/user-4.png";
import { useRef } from "react";
function Test() {
  const slider = useRef();
  let tx = 0;
  const slideForward = () => {
    if (tx > -50) {
      tx -= 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
  };
  const slideBackward = () => {
    if (tx < 0) {
      tx += 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
  };
  return (
    <div className="test">
      <img src={next_icon} alt="" className="next-btn" onClick={slideForward} />
      <img
        src={back_icon}
        alt=""
        className="back-btn"
        onClick={slideBackward}
      />
      <div className="slider">
        <ul ref={slider}>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_1} alt="" />
                <div>
                  <h3>Agbo Ann</h3>
                  <span>Nsukka, Enugu</span>
                </div>
              </div>

              <div>
                <p>
                  CRA Investment Ltd. consistently delivers top-quality
                  stockfish that has transformed my business. Their attention to
                  detail and customer service is second to none. Highly
                  recommended!
                </p>
              </div>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_2} alt="" />
                <div>
                  <h3>Chioma N.</h3>
                  <span>Edo Market, Abuja</span>
                </div>
              </div>

              <div>
                <p>
                  The best stockfish supplier in the market! The quality is
                  unbeatable, and their timely delivery makes working with them
                  a breeze.
                </p>
              </div>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_3} alt="" />
                <div>
                  <h3>Funmi I</h3>
                  <span>Wholesaler, Port Harcourt</span>
                </div>
              </div>

              <div>
                <p>
                  Great service and competitive pricing! CRA Investment Ltd.
                  always delivers on time and exceeds our expectations with the
                  quality of their stockfish.
                </p>
              </div>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_4} alt="" />
                <div>
                  <h3>Olumide K</h3>
                  <span>Business Owner, Kano</span>
                </div>
              </div>

              <div>
                <p>
                  Their stockfish is consistently of premium quality. We&#39;ve
                  been importing through them for years and have always had
                  excellent experiences
                </p>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Test;
