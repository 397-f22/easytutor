import "./SessionList.css";

import Form from "react-bootstrap/Form";
import FuzzySearch from "fuzzy-search";
import InputGroup from "react-bootstrap/InputGroup";
// import { RideInfo } from "./RideInfo";
import { Search } from "react-bootstrap-icons";
import { Session } from "./Session";

// import { useDbData } from "../utilities/firebase";
import { useState } from "react";

// import { BookRide } from "./BookRide";

export const SessionList = ({ sessions, courses, user }) => {
  // const [show, setShow] = useState(false);
  // const [selectedRide, setSelectedRide] = useState();
  const [searchstr, setSearch] = useState("");

  // const handleClose = () => setShow(false);
  // const handleShow = (ride) => {
  //   setShow(true);
  //   setSelectedRide(ride);
  // };

  const searcher = new FuzzySearch(
    null ? [] : Object.entries(sessions).map(([k, v]) => v),
    ["course", "location"],
    {
      caseSensitive: false,
    }
  );

  const searchResults = () => {
    return searchstr == "" ? sessions : searcher.search(searchstr);
  };
  return (
    <div>
      <div className="SearchBar">
        <InputGroup className="mb-0">
          <InputGroup.Text id="basic-addon1">
            <Search size={30} />
          </InputGroup.Text>
          <Form.Control
            placeholder="Search for courses"
            onChange={(change) => setSearch(change.target.value)}
          />
        </InputGroup>
      </div>
      <div className="mt-2">
        {Object.entries(searchResults()).map(([id, session]) => {
          return (
            <Session
              key={id}
              session={session}
              courses={courses}
              user={user}
              sessid={id}
            />
          );
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
