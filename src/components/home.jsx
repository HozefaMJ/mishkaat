import React, { Component } from "react";
//import smallGirl from "../img/kettle-bg.jpg";
import "../../src/styles/home.css";
import Navbar from "./common/navbar";

class Home extends Component {
  state = {};
  render() {
    return (
      <div className="home">
        <Navbar />
        <div className="landing small-girl">
          <div className="tagline">
            <h3>Clean &</h3>
            <h1>Green</h1>
          </div>
          {/* <img className="small-girl" src={smallGirl} alt="" /> */}
        </div>
        <div className="mission">
          <h1>Our Mission:</h1>
          <p>
            To make a greener and a better future more affordable and accessible
            to the mass population.
          </p>
        </div>
        <div className="vision">
          <h1>Our Vision:</h1>
          <p>
            With rising temperature and global warming, we intend to innovate
            and revolutionalize the field with out of the box solutions. We can
            create self-sustainable power resources with the help of solar
            energy to drive towards a cleaner and greener future and reduce
            combustion.
          </p>
        </div>
        {/*
                <div className="Inspiration">
          <h1>Inspiration</h1>
          <p>
            We draw our inspiration from fit india movement, Hon’ble Prime
            Minister of India has launched the Fit India Movement on 29 Aug 2019
            with a view to make Physical Fitness a way of life.
            <br />
            <br />
            Fit India Movement aims at behavioural changes – from sedentary
            lifestyle to physically active way of day-to-day living. Fit India
            would be a success only when it becomes a people’s movement. We have
            to play the role of a catalyst. ‘How to Live’ ought to be the first
            pillar of formal education.
            <br />
            <br /> This involves teaching and practicing the art of taking care
            of one’s body and health daily. Schools have to be the first formal
            institution after home where physical fitness is taught and
            practiced.
            <br />
            <br /> In the above background, the Fit India Mission encourages
            Schools to Organize a Fit India School Week in month of
            November/December. It has also prepared a set of Fit India School
            Certification with simple and easy parameters.
          </p>
        </div>
        <div className="howDifferent">
          <h1>How are we different</h1>
          <p>
            For thousands of people across the country, going to a regular gym
            just doesn't cut it. Instead, they prefer CrossFit routines: like
            swinging kettlebells, flipping tires, and doing squats and dead
            lifts until they drop.
            <br />
            <br /> Now kids as young as 4 are taking part in such activities
            because it is complex and provides a wide variety of excercises
            crossfit juniorz stays on these parameters but differently by making
            it more fun and enjoyable by combination which is more than just
            crossfit.
          </p>
        </div>
        */}
      </div>
    );
  }
}

export default Home;
