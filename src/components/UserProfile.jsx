import "./UserProfile.css";

import { BsChevronDown, BsChevronUp } from "react-icons/bs";

import Collapse from "react-bootstrap/Collapse";
import { SessionList } from "./SessionList";
import { useState } from "react";

const UserList = ({ sessions, courses }) => {
  if (sessions.length != 0) {
    return (
      <SessionList
        sessions={sessions}
        courses={courses}
        showSearch={false}
        disableClick={true}
      />
    );
  }
  return <div className="title m-2">No sessions.</div>;
};

export const UserProfile = ({ sessions, user, courses }) => {
  const [openTeach, setOpenTeach] = useState(true);
  const [openLearn, setOpenLearn] = useState(true);
  const sessionsArray =
    sessions == null ? [] : Object.entries(sessions).map(([k, v]) => v);
  var userLearnSessions = sessionsArray.filter(
    (session) => session.student == user.uid
  );
  var userTeachSessions = sessionsArray.filter(
    (session) => session.tutor == user.uid
  );

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
        <div className="credit-div">Your Credits: {user.credits}</div>
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
