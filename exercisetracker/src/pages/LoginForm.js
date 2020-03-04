import React from "react";
import Hero from "../components/Hero";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";

function LoginForm() {
    return (
        <div>
            <Hero backgroundImage="https://www.bcee.lu/fileadmin/_processed_/f/5/csm_Garmin_Fitbit_Cover_a6b7dd078d.jpg">
            </Hero>
            <div class="ui container exercise">
                <div class="ui raised card m-auto">
                    <h2>Log In</h2>
                    <form action="POST">
                        <div class="login-form d-none">
                            <div class="username">
                                <label for="username">Username:</label>
                                <input
                                    type="text"
                                    name="username"
                                    id="username"
                                    placeholder=""
                                />
                            </div>
                            <div class="password">
                                <label for="password">Username:</label>
                                <input
                                    type="text"
                                    name="password"
                                    id="password"
                                    placeholder=""
                                />
                            </div>
                        </div>
                        <div class="buttons">
                            <button disabled class="huge ui blue button complete">
                                Log In
              </button>
                            <button disabled class="huge ui positive button add-another">
                                Create Account
              </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
export default LoginForm;