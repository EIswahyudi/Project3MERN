import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
// import Dashboard from "./pages/Dashboard";
import Tracker from "./pages/Tracker";
// import Userlogin from "./pages/Userlogin";
import Navbar from "./components/Navbar";
// import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper";
import NewExercise from "./pages/New";
import CreateAccount from "./pages/CreateAccount";
import LoginPage from "./pages/LoginForm";
//react bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Wrapper>
          <Route exact path="/" component={Tracker} />
          <Route exact path="/tracker" component={Tracker} />
          <Route exact path="/exercise?" component={NewExercise} />
          <Route exact path="/userlogin" component={LoginPage} />
          <Route exact path="/createaccount" component={CreateAccount} />
        </Wrapper>
        {/* <Footer /> */}
      </div>
    </Router>
  );
}

export default App;
