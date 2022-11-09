import { SessionList } from "./SessionList";
import "./UserProfile.css";

const UserList = ({ sessions, courses }) => {
  if (sessions) {
    return <SessionList sessions={sessions} courses={courses} />;
  }

  return "";
};

export const UserProfile = ({ sessions, user, courses }) => {
  var userLearnSessions;
  var userTeachSessions;

  console.log(sessions);

  if ("studentOf" in user) {
    const userLearnValues =
      sessions == null ? [] : Object.entries(user.studentOf).map(([k, v]) => v);
    userLearnSessions = userLearnValues.map((x) => sessions[x]);
  }

  if ("teacherOf" in user) {
    const userTeachValues =
      sessions == null ? [] : Object.entries(user.teacherOf).map(([k, v]) => v);
    userTeachSessions = userTeachValues.map((x) => sessions[x]);
  }

  const both = "studentOf" in user || "teacherOf" in user;

  if (both == false) {
    return (
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
    );
  } else {
    return (
      <div>
        <div className="title">
          <h1>Your Learning Sessions</h1>
        </div>
        <UserList sessions={userLearnSessions} courses={courses} />
        <div className="title">
          <h1>Your Teaching Sessions</h1>
        </div>
        <UserList sessions={userTeachSessions} courses={courses} />
      </div>
    );
  }
};
