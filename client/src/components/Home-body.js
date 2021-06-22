/* eslint-disable */
import React from "react";
import "../App.css";
import { Button,  Carousel } from "react-bootstrap";
import { Cards } from "./Cards";
import Zoom from "./zoom.png";
import Webex from "./webex.png";
import Meet from "./google-meet.png";
import MsTeam from "./ms-team.png";
import Skype from './skype.png'
import Goto from "./gotomeeting.png";
import More from "./more.png"
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
        <Carousel.Item interval={800}>
          <Cards  platform = "Zoom Meeting" logo = {Zoom}/>
        </Carousel.Item>
        <Carousel.Item interval={800}>
         <Cards platform = "Webex Meeting" logo = {Webex}/>
        </Carousel.Item>
        <Carousel.Item interval={800}>
         <Cards platform = "Google Meet" logo = {Meet}/>
        </Carousel.Item>
        <Carousel.Item interval={800}>
         <Cards platform = "Skype" logo = {Skype}/>
        </Carousel.Item >
        <Carousel.Item interval={800}>
         <Cards platform="Microsoft Team" logo = {MsTeam}/>
        </Carousel.Item>
        <Carousel.Item interval={800}>
         <Cards platform="GoToMeeting" logo = {Goto}/>
        </Carousel.Item>
        <Carousel.Item interval={800}>
         <Cards platform="Many More" logo = {More}/>
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
