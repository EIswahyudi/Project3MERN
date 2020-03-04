import React from "react";
import Hero from "../components/Hero";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";

function Dashboard() {
    return (
<div class="container mt">
      <h1 class="text-center">Workout Dashboard</h1>
      {/* <h2 class="text-center">Welcome {user.username}!</h2> */}
      <div class="row mt">
        <div class="col-md-6">
          <canvas id="canvas"></canvas>
        </div>
        <div class="col-md-6">
          <canvas id="canvas2"></canvas>
        </div>
      </div>
      <div class="row mt">
        <div class="col-md-6">
          <canvas id="canvas3"></canvas>
        </div>
        <div class="col-md-6">
          <canvas id="canvas4"></canvas>
        </div>
      </div>
    </div>
    )
}
export default Dashboard;