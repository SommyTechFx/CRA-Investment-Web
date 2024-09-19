/* eslint-disable react/prop-types */
import "./About.css";
import about_img from "./../../assets/about.png";
// import play_icon from "./../../assets/play-icon.png";
function About() {
  return (
    <div className="about">
      <div className="about-left">
        <img src={about_img} alt="" className="about-img" />
        {/* <img
          src={play_icon}
          alt=""
          className="play_icon"
          onClick={() => {
            setPlayState(true);
          }}
        /> */}
      </div>
      <div className="about-right">
        <h3>ABOUT CRA INVESTMENT LTD</h3>
        <h2>Connecting Nigeria to the World’s Finest Stockfish.</h2>
        <p>
          CRA Investment Limited is a leading player in the import and export of
          premium stockfish, dedicated to connecting Nigeria with the
          world&#39;s finest seafood. Established with a vision to bridge the
          gap between high-quality stockfish producers and Nigerian consumers,
          our company stands at the forefront of the seafood trade industry,
          ensuring the best products reach your table.
        </p>
        <p>
          At CRA Investment Limited, our mission is to deliver top-quality
          stockfish through robust and reliable trade practices. We are
          committed to sourcing only the finest stockfish from renowned
          international suppliers and making it accessible to Nigerian markets.
          Our goal is to elevate the culinary experience of our customers by
          providing them with premium seafood that meets the highest standards
          of quality and freshness.
        </p>
      </div>
    </div>
  );
}

export default About;
