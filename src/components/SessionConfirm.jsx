import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { tutorSession } from "../utilities/firebase";

export const SessionConfirm = ({
  show,
  handleClose,
  selectedSession,
  courses,
  user,
  sessions,
}) => {
  const handleConfirm = () => {
    tutorSession(user.uid, selectedSession);
    handleClose();
  };

  if (selectedSession !== "") {
    var course = sessions[selectedSession]?.course;
    var courseName = `${course} - ${courses[course]}`;

    return (
      <>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>{courseName}</Modal.Title>
          </Modal.Header>
          <Modal.Body>Book tutoring session?</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Cancel
            </Button>
            <Button variant="primary" onClick={handleConfirm}>
              Confirm
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
};
