/* eslint-disable */
import React from "react";
import "../App.css";
import { Button, Card } from "react-bootstrap";
import { Cards } from "./Cards"

export function HomeBody() {
  return (
    <div>
        
      <h2 class='heading'>
        All of your online meetings in one convenient location!!!!
      </h2>
      <p class='sub-heading'>
        Here's where you'll keep track of all your online meetings!!!!
      </p>
      <Cards />
      <div class = "buttons">
        <Button variant='primary'>Login</Button>
        <h3 class="or">OR</h3>
        <Button variant='success'>Sign Up</Button>
      </div>
    </div>
  );
}
export default HomeBody;
