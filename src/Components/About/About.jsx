import React from "react";
import "./About.css";
import { useSpring, animated } from "react-spring";
import imgAboutads from "/src/assets/Aboutads.jpg";

function Number({ n }) {
  const { number } = useSpring({
    from: { number: 0 },
    number: n,
    delay: 200,
    config: { mass: 1, tension: 20, friction: 10 },
  });
  return <animated.div>{number.to((n) => n.toFixed(0))}</animated.div>;
}
const About = () => {
  return (
    <div>
      <div className="About">
        <div className="About-heading">
          <p>ABOUT US</p>
        </div>
        <div className="About-content">
          <div className="About-content-text">
            <p>
              At ADS (Analytics And Data Summit Conference), we strive to bring
              together the global data science community, facilitate the
              exchange of innovative ideas, promote the growth of open source
              software, and prepare data and AI practitioners of all levels for
              success in their rapidly changing field.
              <br /> <br />
              To this end, we host 4 Data analytics and AI Training Conferences
              around the globe, including in Boston, San Francisco, London,
              APAC, as well as in-person meetups, live virtual events, lighting
              interviews, free webinars, and more.
            </p>
          </div>
          <div className="About-content-image">
            <img src={imgAboutads} alt="" />
          </div>
        </div>
        <div className="About-ratingbar">
            <div className="About-ratingbar-first">
                <div className="About-ratingbar-num">
                <Number n={6} />
                </div>
                <div className="About-ratingbar-text">
                    <p>Annual Events</p>
                </div>
            </div>
            <div className="About-ratingbar-second">
                <div className="About-ratingbar-num">
                    <Number n={32} />
                </div>
                <div className="About-ratingbar-text">
                    <p>Livestreams</p>
                </div>
            </div>
            <div className="About-ratingbar-third">
                <div className="About-ratingbar-num">
                    <Number n={78} />
                </div>
                <div className="About-ratingbar-text">
                    <p>Global Meetups</p>
                </div>
            </div>
            <div className="About-ratingbar-fourth">
                <div className="About-ratingbar-num">
                    <Number n={11000} />
                </div>
                <div className="About-ratingbar-text">
                    <p>Attendees Across All Events</p>
                </div>
            </div>
            <div className="About-ratingbar-fifth">
                <div className="About-ratingbar-num">
                    <Number n={300000} />
                </div>
                <div className="About-ratingbar-text">
                    <p>Community Members</p>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default About;
