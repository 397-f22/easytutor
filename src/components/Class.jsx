import "./Class.css";

import Card from "react-bootstrap/Card";
// import { getUser } from "./User";
import { getUserWithId } from "../utilities/firebase";

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

export const Class = ({ data }) => {
  // const date = new Date(ride.date).toLocaleString("en-US", {
  //   month: "long",
  //   day: "numeric",
  //   hour: "numeric",
  //   minute: "numeric",
  //   hour12: true,
  // });

  // const organizer = getOrganizer(ride);

  return (
    <Card className="m-3">
      <div className="row">
        <div className="profilePicDiv">
          {/* <img
            src={organizer == null ? "" : organizer.photoURL}
            className="profilePic"
          /> */}
        </div>
        <div className="cardBodyDiv">
          <Card.Body>
            <Card.Title>{data.name}</Card.Title>
            <Card.Text>Time: {data.time}</Card.Text>
            <Card.Text>Location: {data.location}</Card.Text>
            <div>
              <p className="alignleft">{data.credits} credits</p>
              {/* <Available user={user} ride={ride} /> */}
            </div>
          </Card.Body>
        </div>
      </div>
    </Card>
  );
};
