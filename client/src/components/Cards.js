/* eslint-disable */

import React from "react";
import "../App.css";
import { Card, Carousel } from "react-bootstrap";
import Zoom from "./zoom.png";
export function Cards() {
  return (
    <div>
      <Card bg={"primary"} style={{ width: "18rem" }} className='mb-2'>
            <Card.Header>
              <img src={Zoom} alt='zoom logo' height='42' width='42'></img>
            </Card.Header>
            <Card.Body>
              <Card.Title> Zoom Meeting </Card.Title>
              <Card.Text>
                Power your voice communications with our global cloud phone
                solution with secure call routing, call queues, SMS, elevate
                calls to meetings, and much more.
              </Card.Text>
            </Card.Body>
          </Card>
    </div>
  );
}
export default Cards;
