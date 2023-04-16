import "./App.css";
import Eventspage from "./components/Eventspage/Eventspage";
import About from "./components/about/About.jsx";
import { Intro } from "./components/intro/Intro";
import Introloader from "./components/intro/Introloader";
import Footer from "./components/Footer/Footer.jsx";
import Events_landing from "./components/Events_landing/Events_landing.jsx";
import Event_title from "./components/Events_landing/Event_title";

function App() {
  return (
    <div className="App">
    
      <section className="toBlack-Desk">
        {/* <a href="#intro-sec"> */}
        <div className="">
          <Introloader />
        </div>
        {/* </a> */}
        <section className="onClickShow">
          <section className="intro-start " id="intro-sec">
            <Intro />
          </section>
          <div className="event-list">
            <div className="">
              <Event_title />
            </div>
            <div className="">
              <Events_landing />
            </div>
          </div>
          <div className="">
            <About />
          </div>
          <div className="footer">
            <Footer />
          </div>
        </section>
      </section>

      <section className="toBlack-Mob">
        <div className="">
          <Introloader />
        </div>
        <section className="intro-start ">
          <Intro />
        </section>
        <section className="bg-black">
          <div className="event-list">
            <div className="">
              <Event_title />
            </div>
            <div className="">
              <Events_landing />
            </div>
          </div>
          <div className="">
            <About />
          </div>
        </section>
        <div className="footer">
          <Footer />
        </div>
      </section>
    </div>
  );
}

export default App;
