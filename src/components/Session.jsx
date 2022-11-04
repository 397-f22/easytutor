import "./Session.css";

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

export const Session = ({ session, courses }) => {
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
  const credits = session.duration / 60;

  return (
    <Card className="m-3">
      <div className="row">
        <div className="cardBodyDiv">
          <Card.Body>
            <Card.Title>
              {session.course} - {courseName}
            </Card.Title>
            <Card.Text>Date: {date}</Card.Text>
            <Card.Text>Time: {time}</Card.Text>
            <Card.Text>Location: {session.location}</Card.Text>
            <Card.Text>{credits} credits</Card.Text>
          </Card.Body>
        </div>
      </div>
    </Card>
  );
};
