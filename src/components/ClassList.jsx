import "./ClassList.css";

import { Class } from "./Class";
import Form from "react-bootstrap/Form";
// import FuzzySearch from "fuzzy-search";
import InputGroup from "react-bootstrap/InputGroup";
// import { RideInfo } from "./RideInfo";
import { Search } from "react-bootstrap-icons";
import { useDbData } from "../utilities/firebase";
import { useState } from "react";

// import { BookRide } from "./BookRide";

export const ClassList = () => {
  // const [show, setShow] = useState(false);
  // const [selectedRide, setSelectedRide] = useState();
  // const [searchstr, setSearch] = useState("");

  // const handleClose = () => setShow(false);
  // const handleShow = (ride) => {
  //   setShow(true);
  //   setSelectedRide(ride);
  // };

  // const ridesValues =
  //   rides == null ? [] : Object.entries(rides).map(([k, v]) => v);

  // const searcher = new FuzzySearch(
  //   ridesValues,
  //   [
  //     "destination.city",
  //     "destination.state",
  //     "destination.street_address",
  //     "destination.zip",
  //   ],
  //   {
  //     caseSensitive: false,
  //   }
  // );

  // const filteredRides = () => {
  //   return searchstr == "" ? rides : searcher.search(searchstr);
  // };

  const data = {
    courses: {
      0: {
        name: "CS343 - Operating Systems",
        location: "Mudd Building - 2nd Floor",
        time: "December 16, 2:00 pm - 4:00 pm",
        credits: 20,
      },
      1: {
        name: "CS330 - Human Computer Interaction",
        location: "Garage",
        time: "December 20, 2:00 pm - 3:00 pm",
        credits: 10,
      },
      2: {
        name: "CS340 Intro to Networking",
        location: "Tech M164",
        time: "December 12, 1:00 pm - 4:00 pm",
        credits: 30,
      },
    },
  };

  return (
    <div>
      <div className="SearchBar">
        <InputGroup className="mb-0">
          <InputGroup.Text id="basic-addon1">
            <Search size={30} />
          </InputGroup.Text>
          <Form.Control
            placeholder="Search Destination"
            // onChange={(change) => setSearch(change.target.value)}
          />
        </InputGroup>
      </div>
      <div className="mt-2">
        {/* {Object.entries(filteredRides()).map(([id, ride]) => {
          ride.key = id;
          return <Ride user={user} key={id} ride={ride} handleShow={handleShow} />;
        })} */}
        {Object.entries(data.courses).map((course) => {
          return <Class data={course[1]} />;
        })}
      </div>
      {/* <RideInfo
        show={show}
        onHide={handleClose}
        ride={selectedRide}
        user={user}
        users={users}
      /> */}
    </div>
  );
};
