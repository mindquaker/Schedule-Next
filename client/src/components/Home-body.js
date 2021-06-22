/* eslint-disable */
import React from "react";
import "../App.css";
import { Button, Carousel } from "react-bootstrap";
import { Cards } from "./Cards";
import Zoom from "./zoom.png";
import Webex from "./webex.png";
import Meet from "./google-meet.png";
import MsTeam from "./ms-team.png";
import Skype from "./skype.png";
import Goto from "./gotomeeting.png";
import More from "./more.png";
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
          <Cards
            platform='Zoom Meeting'
            logo={Zoom}
            tagline='Power your voice communications with our global cloud phone solution with secure call routing, call queues, SMS, elevate calls to meetings, and much more.'
          />
        </Carousel.Item>
        <Carousel.Item interval={800}>
          <Cards
            platform='Webex Meeting'
            logo={Webex}
            tagline='Calling, meetings, messaging, and events in the cloud for teams of all sizes.'
          />
        </Carousel.Item>
        <Carousel.Item interval={800}>
          <Cards
            platform='Google Meet'
            logo={Meet}
            tagline='Real-time meetings by Google. Using your browser, share your video, desktop, and presentations with teammates and customers.'
          />
        </Carousel.Item>
        <Carousel.Item interval={800}>
          <Cards
            platform='Skype'
            logo={Skype}
            tagline='Stay in touch! Free online calls, messaging, affordable international calling to mobiles or landlines and instant online meetings on Skype.'
          />
        </Carousel.Item>
        <Carousel.Item interval={800}>
          <Cards
            platform='Microsoft Team'
            logo={MsTeam}
            tagline='Meet, chat, call, and collaborate in just one place.'
          />
        </Carousel.Item>
        <Carousel.Item interval={800}>
          <Cards
            platform='GoToMeeting'
            logo={Goto}
            tagline='WORK FROM ANYWHERE, LogMeIn has everything your organization needs to work remote and stay connected. Start for Free'
          />
        </Carousel.Item>
        <Carousel.Item interval={800}>
          <Cards platform='Many More' logo={More} />
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
