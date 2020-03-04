import React, { Component } from "react";
import Hero from "../components/Hero";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";

function NewExercise() {
    return (
        <div>
            <Hero backgroundImage="https://www.bcee.lu/fileadmin/_processed_/f/5/csm_Garmin_Fitbit_Cover_a6b7dd078d.jpg">
            </Hero>
            <div class="ui container exercise">
                <div class="ui raised card m-auto">
                    <h2>Add Your Exercise</h2>
                    <form action="POST">
                        <div class="workout-type">
                            <label for="type">Exercise Type:</label>
                            <select name="type" id="type">
                                <option disabled selected>Select Exercise Type</option>
                                <option value="resistance">Resistance</option>
                                <option value="cardio">Cardio</option>
                                <option value="steps">Steps</option>
                            </select>
                        </div>
                        <div class="cardio-form d-none">
                            <div class="cardio-name">
                                <label for="cardio-name">Name:</label>
                                <input
                                    type="text"
                                    name="cardio-name"
                                    id="cardio-name"
                                    placeholder="Running"
                                />
                            </div>
                            <div class="distance">
                                <label for="distance">Distance (miles):</label>
                                <input
                                    type="number"
                                    name="distance"
                                    id="distance"
                                    placeholder="5"
                                />
                            </div>
                            <div class="duration">
                                <label for="duration">Duration (minutes):</label>
                                <input
                                    type="number"
                                    name="duration"
                                    id="duration"
                                    placeholder="10"
                                />
                            </div>
                        </div>
                        <div class="resistance-form d-none">
                            <div class="exercise">
                                <label for="name">Exercise Name:</label>
                                <input
                                    type="text"
                                    name="name"
                                    id="name"
                                    placeholder="Bench Press"
                                />
                            </div>
                            <div class="weight">
                                <label for="weight">Weight (lbs):</label>
                                <input
                                    type="number"
                                    name="weight"
                                    id="weight"
                                    placeholder="200"
                                />
                            </div>
                            <div class="sets">
                                <label for="sets">Sets:</label>
                                <input type="number" name="sets" id="sets" placeholder="4" />
                            </div>
                            <div class="reps">
                                <label for="reps">Reps:</label>
                                <input type="number" name="reps" id="reps" placeholder="10" />
                            </div>
                            <div class="resistance-duration">
                                <label for="resistance-duration">Duration (minutes):</label>
                                <input
                                    type="number"
                                    name="resistance-duration"
                                    id="resistance-duration"
                                    placeholder="10"
                                />
                            </div>
                        </div>
                        <div class="buttons">
                            <button disabled class="huge ui blue button complete">
                                Complete
              </button>
                            <button disabled class="huge ui positive button add-another">
                                Add Exercise
              </button>
                        </div>
                    </form>
                    <script src="../public/api.js"></script>
                    <script src="../public/index.js"></script>
                </div>
            </div>
        </div>
    )
}
export default NewExercise;