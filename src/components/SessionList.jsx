import "./SessionList.css";

import Form from "react-bootstrap/Form";
import FuzzySearch from "fuzzy-search";
import InputGroup from "react-bootstrap/InputGroup";
// import { RideInfo } from "./RideInfo";
import { Search } from "react-bootstrap-icons";
import { Session } from "./Session";

// import { useDbData } from "../utilities/firebase";
import { hasTutor } from "../utilities/firebase";
import { useState } from "react";

// import { BookRide } from "./BookRide";

export const SessionList = ({ sessions, courses, user }) => {
  const availSessions = Object.entries(sessions).filter(
    ([id, _]) => !hasTutor(id)
  );

  const [searchstr, setSearch] = useState("");

  const searcher = new FuzzySearch(
    null ? [] : availSessions.map(([k, v]) => v),
    ["course", "location"],
    {
      caseSensitive: false,
    }
  );

  const getSearchResults = () => {
    return searchstr == "" ? availSessions : searcher.search(searchstr);
  };

  return availSessions.length == 0 ? (
    <div>
      <h1>No sessions available</h1>
    </div>
  ) : (
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
        {getSearchResults().map(([id, session]) => {
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
