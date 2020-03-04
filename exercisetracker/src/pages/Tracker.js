import React from "react";
import Hero from "../components/Hero";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";

function About() {
  return (
    <div>
      <Hero backgroundImage="https://www.bcee.lu/fileadmin/_processed_/f/5/csm_Garmin_Fitbit_Cover_a6b7dd078d.jpg">
      </Hero>

      <div class="ui container workout">
        <div class="ui raised card m-auto">
          <div class="prev-workout">
            <h3>Last Workout</h3>
            <div>
              <div class="workout-stats"></div>
              <div class="buttons">
                <a href="/exercise?" class="huge ui purple button">Continue Workout</a>
                <a href="/exercise?" class="huge yellow ui button">New Workout</a>
              </div>
            </div>
          </div>
          <div class="new-workout">
            <h3>Create Your First Workout</h3>
          </div>
        </div>
      </div>
      <div id="toast">
        Workout Added Successfully!
    </div>
    </div>

  );
}


export default About;
