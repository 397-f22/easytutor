import { SessionList } from "./SessionList";
import "./UserProfile.css";

const UserList = ({ sessions, courses }) => {
  console.log("in user list")
  if (sessions) {
    return (
      <SessionList sessions={sessions} courses={courses} showSearch={false} />
    );
  }

  return "";
};

export const UserProfile = ({ sessions, user, courses }) => {
  console.log(sessions)
  console.log(user)
  const sessionsArray = sessions == null ? [] : Object.entries(sessions).map(([k, v]) => v);
  console.log(sessionsArray);
  var userLearnSessions = sessionsArray.filter(session => session.student == user.uid);
  console.log(userLearnSessions);
  var userTeachSessions = sessionsArray.filter(session => session.tutor == user.uid);
  console.log(userTeachSessions)


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

  const bothEmpty = userLearnSessions.length == 0 && userTeachSessions.length == 0;
  if (bothEmpty) {
    console.log("bothEmpty is false")
    return (
      <div>
        <h4>Your Credits: {user.credits}</h4>
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
        <h4>Your Credits: {user.credits}</h4>
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
