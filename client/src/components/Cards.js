/* eslint-disable */

import React from "react";
import "../App.css";
import { Card, Carousel } from "react-bootstrap";
import Zoom from "./zoom.png";
export function Cards() {
  return (
    <div>
      <Carousel>
  <Carousel.Item interval={1000}>
  <Card bg={"danger"} style={{ width: "18rem" }} className='mb-2'>
        <Card.Header>
          <img src={Zoom} alt='zoom logo' height='42' width='42'></img>
        </Card.Header>
        <Card.Body>
          <Card.Title> Zoom Meeting </Card.Title>
          <Card.Text>
            Power your voice communications with our global cloud phone solution
            with secure call routing, call queues, SMS, elevate calls to
            meetings, and much more.
          </Card.Text>
        </Card.Body>
      </Card>
  </Carousel.Item>
  <Carousel.Item interval={500}>
  <Card bg={"primary"} style={{ width: "18rem" }} className='mb-2'>
        <Card.Header>
          <img src={Zoom} alt='zoom logo' height='42' width='42'></img>
        </Card.Header>
        <Card.Body>
          <Card.Title> Zoom Meeting </Card.Title>
          <Card.Text>
            Power your voice communications with our global cloud phone solution
            with secure call routing, call queues, SMS, elevate calls to
            meetings, and much more.
          </Card.Text>
        </Card.Body>
      </Card>
  </Carousel.Item>
  <Carousel.Item>
  <Card bg={"warning"} style={{ width: "18rem" }} className='mb-2'>
        <Card.Header>
          <img src={Zoom} alt='zoom logo' height='42' width='42'></img>
        </Card.Header>
        <Card.Body>
          <Card.Title> Zoom Meeting </Card.Title>
          <Card.Text>
            Power your voice communications with our global cloud phone solution
            with secure call routing, call queues, SMS, elevate calls to
            meetings, and much more.
          </Card.Text>
        </Card.Body>
      </Card>
  </Carousel.Item>
</Carousel>
      
    </div>
  );
}
export default Cards;
