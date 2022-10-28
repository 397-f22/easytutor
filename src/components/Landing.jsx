import "./Landing.css";
import logodark from "../static/logodark.svg";

import { SignIn, SignOut } from "./Auth";

import Image from "react-bootstrap/Image";

const Landing = ({ user }) => {
  return user ? (
    <SignOut />
  ) : (
    <div className="landing">
      <Image src={logodark} width={320}></Image>
      <div className="subheading">Get easy, on-demand tutoring for free!</div>
      <p className="description">
        EasyTutor is a fast and easy tutoring exchange service for Northwestern
        students. Earn EasyTutor credits by helping others, then spend those
        credits to get help when you need it!
      </p>
      <SignIn />
    </div>
  );
};

export default Landing;
