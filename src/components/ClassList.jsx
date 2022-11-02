import "./ClassList.css";

import { Class } from "./Class";
import Form from "react-bootstrap/Form";
// import FuzzySearch from "fuzzy-search";
import InputGroup from "react-bootstrap/InputGroup";
// import { RideInfo } from "./RideInfo";
import { Search } from "react-bootstrap-icons";

// import { useDbData } from "../utilities/firebase";
// import { useState } from "react";

// import { BookRide } from "./BookRide";

export const ClassList = ({ data, type }) => {
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

  return (
    <div>
      <div className="SearchBar">
        <InputGroup className="mb-0">
          <InputGroup.Text id="basic-addon1">
            <Search size={30} />
          </InputGroup.Text>
          <Form.Control
            placeholder="Search for classes"
            // onChange={(change) => setSearch(change.target.value)}
          />
        </InputGroup>
      </div>
      <div className="mt-2">
        {/* {Object.entries(filteredRides()).map(([id, ride]) => {
          ride.key = id;
          return <Ride user={user} key={id} ride={ride} handleShow={handleShow} />;
        })} */}
        {Object.entries(data.courses).map(([id, course]) => {
          return <Class key={id} data={course} type={type} />;
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
