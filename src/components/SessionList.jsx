import "./SessionList.css";

import Form from "react-bootstrap/Form";
import FuzzySearch from "fuzzy-search";
import InputGroup from "react-bootstrap/InputGroup";
// import { RideInfo } from "./RideInfo";
import { Search } from "react-bootstrap-icons";
import { Session } from "./Session";

// import { useDbData } from "../utilities/firebase";
import { addSession } from "../utilities/firebase";
import { useState } from "react";

// import { BookRide } from "./BookRide";

export const SessionList = ({ sessions, courses, user }) => {
  // const [searchstr, setSearch] = useState("");

  // const availSessions = Object.entries(sessions).filter(
  //   ([id, _]) => !hasTutor(id)
  // );

  // const searcher = new FuzzySearch(
  //   null ? [] : availSessions.map(([k, v]) => v),
  //   ["course", "location"],
  //   {
  //     caseSensitive: false,
  //   }
  // );

  // const getSearchResults = () => {
  //   console.log("GOT TO HERE");
  //   // return searchstr == "" ? availSessions : searcher.search(searchstr);
  // };

  // getSearchResults();

  return (
    <div>
      <div className="SearchBar">
        <InputGroup className="mb-0">
          <InputGroup.Text id="basic-addon1">
            <Search size={30} />
          </InputGroup.Text>
          <Form.Control
            placeholder="Search for courses"
            onChange={(change) => console.log("test")}
          />
        </InputGroup>
      </div>
      <div className="mt-2">
        {Object.entries(sessions).map(([id, session]) => {
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
