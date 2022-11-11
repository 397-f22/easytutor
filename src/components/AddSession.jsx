import { useNavigate } from "react-router-dom";
import { Form } from "react-bootstrap";
import { useState } from "react";
import { addSession } from "../utilities/firebase";

const ButtonBar = ({ disabled }) => {
  const navigate = useNavigate();
  return (
    <div className="d-flex">
      <button
        type="button"
        className="btn btn-outline-dark me-2"
        onClick={() => navigate("/teach")}
      >
        Cancel
      </button>
      <button
        type="submit"
        className="btn btn-primary me-auto"
        disabled={disabled}
      >
        Submit
      </button>
    </div>
  );
};

export const AddSession = ({ courses, user }) => {
  const navigate = useNavigate();
  const [selCourse, setSelCourse] = useState("");

  const handleSubmit = (evt) => {
    evt.preventDefault();
    const formData = evt.target;
    const date = new Date(`${formData.date.value}T${formData.time.value}:00`);
    addSession(
      selCourse,
      date,
      formData.duration.value,
      formData.location.value,
      user.uid
    );
    navigate("/teach");
  };

  return (
    <Form className="p-3" onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="course">
        <Form.Label>Course</Form.Label>
        <Form.Select onChange={(evt) => setSelCourse(evt.target.value)}>
          <option>Select Your Course</option>
          {Object.entries(courses).map(([id, course]) => (
            <option key={id} value={id}>
              {course}
            </option>
          ))}
        </Form.Select>
      </Form.Group>

      <Form.Group className="mb-3" controlId="location">
        <Form.Label>Location</Form.Label>
        <Form.Control type="text" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="date">
        <Form.Label>Date</Form.Label>
        <Form.Control type="date" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="time">
        <Form.Label>Start Time</Form.Label>
        <Form.Control type="time" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="duration">
        <Form.Label>Hours</Form.Label>
        <Form.Control type="number" />
      </Form.Group>

      <ButtonBar />
    </Form>
  );
};
