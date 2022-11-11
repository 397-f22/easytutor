import "./Session.css";

import Card from "react-bootstrap/Card";
import { tutorSession } from "../utilities/firebase";

// import { getUser } from "./User";

// import pikachu from "../../data/pikachu.png";

// const getOrganizer = (ride) => {
//   const organizerId = ride.passengers[0];
//   return getUserWithId(organizerId);
// };

// const Available = ({ user, ride }) => {
//   if (!user) {
//     return ""
//   }
//   if (ride.passengers.includes(user.uid)) {
//     return <p className="alignright">Booked!</p>;
//   } else {
//     return (
//     <p className="alignright">
//       {ride.total_seats - ride.passengers.length} available
//     </p>
//     );
//   }
// };

export const Session = ({ user, session, courses, sessid }) => {
  const d = new Date(session.date);
  const d2 = new Date(session.date);
  d2.setHours(d.getHours() + parseInt(session.duration));

  const date = d.toLocaleString("en-US", {
    month: "long",
    day: "numeric",
  });
  const startTime = d.toLocaleString("en-US", {
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  });
  const endTime = d2.toLocaleString("en-US", {
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  });

  const courseName = courses[session.course];
  const credits = Math.ceil(session.duration);

  return (
    <Card className="m-3" onClick={() => tutorSession(user.uid, sessid)}>
      <Card.Header>
        {session.course} - {courseName}
      </Card.Header>
      <Card.Body>
        <Card.Text>Date: {date}</Card.Text>
        <Card.Text>
          Time: {startTime} - {endTime}
        </Card.Text>
        <Card.Text>Location: {session.location}</Card.Text>
        <Card.Text>{credits} credits</Card.Text>
      </Card.Body>
    </Card>
  );
};
