import { useState } from "react";
import About from "./Components/About/About";
import Campus from "./Components/Campus/Campus";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import Hero from "./Components/Hero/Hero";
import Navbar from "./Components/Navbar/Navbar";
import Programs from "./Components/Programs/Programs";
import Test from "./Components/Testimonials/Test";
import Title from "./Components/Title/Title";
import Videoplayer from "./Components/VideoPlayer/Videoplayer";

const App = () => {
  const [playState, setPlayState] = useState(false);
  return (
    <div>
      <Navbar />
      <Hero />
      <div className="container">
        <Title subTitle="OUR Stocks" title="What We Offer" />
        <Programs />
        <About setPlayState={setPlayState} />
        <Title subTitle="STock Gallery" title="Stock Types" />
        <Campus />
        <Title subTitle="TESTIMONIALS" title="What Student Says" />
        <Test />
        <Title subTitle="Contact Us" title="Get in Touch" />
        <Contact />
        <Footer />
      </div>
      <Videoplayer playState={playState} setPlayState={setPlayState} />
    </div>
  );
};

export default App;
