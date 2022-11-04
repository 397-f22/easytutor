import { useNavigate } from "react-router-dom";
import { DateTimeForm } from "./DateTimeForm";
import { Form } from "react-bootstrap";
import { addSession } from "../utilities/firebase";

//Button Bar added for stylistic purpose, let me know if this should change - Sam
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

  const handleSubmit = (evt) => {
    evt.preventDefault();
    var formData = evt.target;
    const date = new Date(
      `${formData.date.value}T${formData.time.value}:00`
    );
    

    addSession(formData.course, date, formData.duration, formData.location, user.uid);
  };

  return (
    <Form className="p-3" onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="course">
        <Form.Label>Course</Form.Label>
        <Form.Select>
          <option>Select Your Course</option>
          {Object.entries(courses).map(([id, course]) => (
            <option key={id} value={course}>
              {course}
            </option>
          ))}
        </Form.Select>
      </Form.Group >
      <Form.Group className="mb-3" controlId="location">
        <Form.Label>Location</Form.Label>
        <Form.Control type="text"/>
      </Form.Group>
      <DateTimeForm/>
      <ButtonBar />
    </Form>
  );
};
