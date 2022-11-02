import { useNavigate } from "react-router-dom";
import { DateTimeForm } from "./DateTimeForm";
import { Form } from "react-bootstrap";

export const AddSession = () => {
  const navigate = useNavigate();

  const handleSubmit = (evt) => {
    evt.preventDefault();
  };

  return (
    <Form className="p-3" onSubmit={handleSubmit}>
      <Form.Group className="mb-3">
        <Form.Label>Course</Form.Label>
        <Form.Control type="text" />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Location</Form.Label>
        <Form.Control type="text" />
      </Form.Group>
      <DateTimeForm />
    </Form>
  );
};
