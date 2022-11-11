import "./Session.css";
import { tutorSession } from "../utilities/firebase";
import Card from "react-bootstrap/Card";

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

export const Session = ({ session, courses, user, sessid }) => {
  const date = new Date(session.date).toLocaleString("en-US", {
    month: "long",
    day: "numeric",
  });

  const time = new Date(session.date).toLocaleString("en-US", {
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  });

  const courseName = courses[session.course];
  const credits = Math.ceil(session.duration / 60);
  const duration = Math.ceil(session.duration / 60);

  return (
    <Card className="m-3" onClick={() => tutorSession(user.uid, sessid)}>
      <Card.Header>
        {session.course} - {courseName}
      </Card.Header>
      <Card.Body>
        <Card.Text>Date: {date}</Card.Text>
        <Card.Text>Time: {time}</Card.Text>
        <Card.Text>Duration: {duration} hours</Card.Text>
        <Card.Text>Location: {session.location}</Card.Text>
        <Card.Text>{credits} credits</Card.Text>
      </Card.Body>
    </Card>
  );
};
