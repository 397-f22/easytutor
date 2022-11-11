import "./SessionList.css";

import Form from "react-bootstrap/Form";
import FuzzySearch from "fuzzy-search";
import InputGroup from "react-bootstrap/InputGroup";
import Modal from "react-bootstrap/Modal";
// import { RideInfo } from "./RideInfo";
import { Search } from "react-bootstrap-icons";
import { Session } from "./Session";
import { SessionConfirm } from "./SessionConfirm";
// import { useDbData } from "../utilities/firebase";
import { addSession } from "../utilities/firebase";
import { useState } from "react";

// import { BookRide } from "./BookRide";

export const SessionList = ({ sessions, courses, user, showSearch }) => {
  const [show, setShow] = useState(false);
  const [selectedSession, setSelectedSession] = useState("");

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      {showSearch && (
        <div className="SearchBar">
          <InputGroup className="mb-0">
            <InputGroup.Text id="basic-addon1">
              <Search size={30} />
            </InputGroup.Text>
            <Form.Control
              placeholder="Search for courses"
              // onChange={(change) => setSearch(change.target.value)}
            />
          </InputGroup>
        </div>
      )}
      <div className="mt-2">
        {Object.entries(sessions).map(([id, session]) => {
          return (
            <Session
              key={id}
              session={session}
              courses={courses}
              user={user}
              sessid={id}
              handleShow={handleShow}
              setSelectedSession={setSelectedSession}
            />
          );
        })}
      </div>
      <SessionConfirm
        handleClose={handleClose}
        selectedSession={selectedSession}
        courses={courses}
        sessions={sessions}
        show={show}
        user={user}
      />
    </div>
  );
};
