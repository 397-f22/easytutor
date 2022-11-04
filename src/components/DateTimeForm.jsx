import Form from "react-bootstrap/Form";

export const DateTimeForm = () => {
  return (
    <div>
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
        <Form.Control type="number"/>
      </Form.Group>
    </div>
  );
};
