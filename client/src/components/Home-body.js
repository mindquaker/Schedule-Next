/* eslint-disable */
import React,{useState, useEffect} from "react";
import "../App.css";
import { Button, Carousel } from "react-bootstrap";
import { Cards } from "./Cards";
import { Login } from "./Login";
import { SignUp } from "./SignUp";
import Zoom from "./zoom.png";
import Webex from "./webex.png";
import Meet from "./google-meet.png";
import MsTeam from "./ms-team.png";
import Skype from "./skype.png";
import Goto from "./gotomeeting.png";
import More from "./more.png";

export function HomeBody() {
  const [isLogin, setLogin] = useState(false);
  const [isSignup, setSignup] = useState(false);
  function isLoginClicked(){
      setLogin((prevLogin)=>{
        let tempLogin =prevLogin;
        tempLogin = true;
        return tempLogin;
      });
  }
  function isSignupClicked(){
    setSignup((prevSignup)=>{
      let tempSignup =prevSignup;
      tempSignup = true;
      return tempSignup;
    });
  }
  if(isLogin === true){

    return (
      <div>
      <Login />
      </div>
      )
  }
  else if (isSignup === true){
    return (
      <div>
      <SignUp />
      </div>)
  }
  else {

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
            color = "success"
            platform='Zoom Meeting'
            logo={Zoom}
            tagline='Power your voice communications with our global cloud phone solution with secure call routing, call queues, SMS, elevate calls to meetings, and much more.'
          />
        </Carousel.Item>
        <Carousel.Item interval={800}>
          <Cards
            color = "info"
            platform='Webex Meeting'
            logo={Webex}
            tagline='Calling, meetings, messaging, and events in the cloud for teams of all sizes.'
          />
        </Carousel.Item>
        
        <Carousel.Item interval={800}>
          <Cards
          color = "primary"
            platform='Google Meet'
            logo={Meet}
            tagline='Real-time meetings by Google. Using your browser, share your video, desktop, and presentations with teammates and customers.'
          />
        </Carousel.Item>
        <Carousel.Item interval={800}>
          <Cards
          color="warning"
            platform='Skype'
            logo={Skype}
            tagline='Stay in touch! Free online calls, messaging, affordable international calling to mobiles or landlines and instant online meetings on Skype.'
          />
        </Carousel.Item>
        <Carousel.Item interval={800}>
          <Cards
          color="danger"
            platform='Microsoft Team'
            logo={MsTeam}
            tagline='Meet, chat, call, and collaborate in just one place.'
          />
        </Carousel.Item>
        <Carousel.Item interval={800}>
          <Cards
            color="light"
            platform='GoToMeeting'
            logo={Goto}
            tagline='WORK FROM ANYWHERE, LogMeIn has everything your organization needs to work remote and stay connected. Start for Free'
          />
        </Carousel.Item>
        <Carousel.Item interval={800}>
          <Cards
          color = "light"
           platform='Many More' logo={More} 
          tagline = "Enjoy your all online meetings here."/>
        </Carousel.Item>
      </Carousel>

      <div class='buttons'>
        <Button variant='primary' onClick={() => isLoginClicked()}>Login</Button>
        <h3 class='or'>OR</h3>
        <Button variant='success' onClick={() => isSignupClicked() }>Sign Up</Button>
      </div>
    </div>
  );
}
}
export default HomeBody;
