import React from "react";
import Hero from "../components/Hero";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";

function CreateAccount() {
    return (
        <div>
            <Hero backgroundImage="https://static.vecteezy.com/system/resources/previews/000/139/756/large_2x/heart-rate-running-free-vector.jpg">
            </Hero>
            <div class="ui container exercise">
                <div class="ui raised card m-auto">
                    <h2>Create Account</h2>
                    <form action="POST">
                        <div class="login-form d-none">
                           {/* FORM */}
                        </div>
                        <div class="buttons">
                            <button disabled class="huge ui blue button complete">
                                Create Account
              </button>
                            <button disabled class="huge ui positive button add-another">
                                Log In
              </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
export default CreateAccount;