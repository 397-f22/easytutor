import "./Landing.css";
import { signOut } from "../utilities/firebase";

import { signInWithGoogle, useAuthState } from "../utilities/firebase";

import { Button } from "react-bootstrap";
import { CarFrontFill } from "react-bootstrap-icons";
import { Navigate } from "react-router-dom";

const LandingLogIn = () => {
  return (
    <Button variant="light" size="lg" onClick={signInWithGoogle}>
      Sign In
    </Button>
  );
};

const Landing = () => {
  const [user] = useAuthState();

  return user ? (
    <Button variant="light" size="lg" onClick={signOut}>
      Sign Out
    </Button>
  ) : (
    <div className="landing">
      <CarFrontFill size={100} />
      <div className="logo">
        <div className="logo-black">Easy</div>
        <div>Tutor</div>
      </div>
      <div className="subheading">Get easy, on-demand tutoring!</div>
      <p className="description">
        EasyTutor lets you redeem in app credits to receive tutoring from your
        peers on demand!
      </p>
      <LandingLogIn />
    </div>
  );
};

export default Landing;
