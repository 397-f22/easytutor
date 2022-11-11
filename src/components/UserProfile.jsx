import { SessionList } from "./SessionList";
import "./UserProfile.css";
import Collapse from "react-bootstrap/Collapse";
import { useState } from "react";
import { BsChevronDown, BsChevronUp } from "react-icons/bs";

const UserList = ({ sessions, courses }) => {
  console.log("in user list");
  if (sessions.length != 0) {
    return (
      <SessionList sessions={sessions} courses={courses} showSearch={false} />
    );
  }
  return (
    <div className="title m-2" >
      No sessions.
    </div>
  );
};

export const UserProfile = ({ sessions, user, courses }) => {
  const [openTeach, setOpenTeach] = useState(true);
  const [openLearn, setOpenLearn] = useState(true);
  const sessionsArray =
    sessions == null ? [] : Object.entries(sessions).map(([k, v]) => v);
  console.log(sessionsArray);
  var userLearnSessions = sessionsArray.filter(
    (session) => session.student == user.uid
  );
  console.log(userLearnSessions);
  var userTeachSessions = sessionsArray.filter(
    (session) => session.tutor == user.uid
  );
  console.log(userTeachSessions);

  // if ("studentOf" in user) {
  //   const userLearnValues =
  //     sessions == null ? [] : Object.entries(user.studentOf).map(([k, v]) => v);
  //   userLearnSessions = userLearnValues.map((x) => sessions[x]);
  // }

  // if ("teacherOf" in user) {
  //   const userTeachValues =
  //     sessions == null ? [] : Object.entries(user.teacherOf).map(([k, v]) => v);
  //   userTeachSessions = userTeachValues.map((x) => sessions[x]);
  // }

  const bothEmpty =
    userLearnSessions.length == 0 && userTeachSessions.length == 0;
  if (bothEmpty) {
    return (
      <div>
        <h1>Your Credits: {user.credits}</h1>
        <div
          style={{
            height: "80vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <h1>No sessions booked yet.</h1>
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <div className="credit-div">
          Your Credits: {user.credits}
        </div>
        <div className="panel">
        <div
          className="title"
          onClick={() => setOpenLearn(!openLearn)}
          aria-expanded={openLearn}
          aria-controls="example-collapse-text-learn"
        >
          <div className="panel-title">Your Learning Sessions</div>
          {openLearn ? <BsChevronDown /> : <BsChevronUp />}
        </div>
        <Collapse in={openLearn}>
          <div id="example-collapse-text-learn">
            <UserList sessions={userLearnSessions} courses={courses} />
          </div>
        </Collapse>
        </div>

        <div className="panel">
        <div
          className="title"
          onClick={() => setOpenTeach(!openTeach)}
          aria-expanded={openTeach}
          aria-controls="example-collapse-text-teach"
        >
          <div className="panel-title">Your Teaching Sessions</div>
          {openTeach ? <BsChevronDown /> : <BsChevronUp />}
        </div>
        <Collapse in={openTeach}>
          <div id="example-collapse-text-teach">
            <UserList sessions={userTeachSessions} courses={courses} />
          </div>
        </Collapse>
        </div>
      </div>
    );
  }
};
