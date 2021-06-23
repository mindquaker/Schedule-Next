/* eslint-disable */

import React from "react";
import "../App.css";
import { Card } from "react-bootstrap";
export function Cards(props) {
  const  {platform,
  logo, tagline, color} = props;
  return (
    <div>
      <Card bg={color} style={{ width: "18rem" }} className='mb-2'>
            <Card.Header>
              <img src={logo} alt='zoom logo' height='42' width='42'></img>
            </Card.Header>
            <Card.Body>
              <Card.Title> {platform} </Card.Title>
              <Card.Text>
                {tagline}
              </Card.Text>
            </Card.Body>
          </Card>
    </div>
  );
}
export default Cards;
