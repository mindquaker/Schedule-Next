/* eslint-disable */
import React from "react";
import "../App.css";
import { Button, Card,  Carousel } from "react-bootstrap";
import { Cards } from "./Cards";

export function HomeBody() {
  return (
    <div>
      <h2 class='heading'>
        All of your online meetings in one convenient location!!!!
      </h2>
      <p class='sub-heading'>
        Here's where you'll keep track of all your online meetings!!!!
      </p>
    
      <Carousel>
        <Carousel.Item interval={1000}>
          <Cards />
        </Carousel.Item>
        <Carousel.Item interval={500}>
         <Cards />
        </Carousel.Item>
        <Carousel.Item>
         <Cards />
        </Carousel.Item>
        <Carousel.Item>
         <Cards />
        </Carousel.Item>
        <Carousel.Item>
         <Cards />
        </Carousel.Item>
      </Carousel>
      <div class='buttons'>
        <Button variant='primary'>Login</Button>
        <h3 class='or'>OR</h3>
        <Button variant='success'>Sign Up</Button>
      </div>
    </div>
  );
}
export default HomeBody;
