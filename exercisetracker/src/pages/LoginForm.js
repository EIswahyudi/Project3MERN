import React from "react";
import Hero from "../components/Hero";
import LoginForm from "../components/LoginForm";

function LoginPage() {
    return (
        <div>
            <Hero backgroundImage="https://static.vecteezy.com/system/resources/previews/000/139/756/large_2x/heart-rate-running-free-vector.jpg">
            </Hero>
            <div class="ui container exercise">
                <div class="ui raised card m-auto">
                    <LoginForm>
                    </LoginForm>
                </div>
            </div>
            </div>
            )
        }
export default LoginPage;