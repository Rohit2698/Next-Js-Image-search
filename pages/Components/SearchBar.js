import React from "react";
import { Form } from "react-bootstrap";

const SerachBar = ({ setSearchText }) => {
  return (
    <div>
      <Form.Group controlId="formBasicEmail">
        <Form.Control
          type="text"
          placeholder="Search Image"
          onChange={(text) => setSearchText(text.target.value)}
        />
        <Form.Text className="text-muted">
          Type to find all images in our gallery
        </Form.Text>
      </Form.Group>
    </div>
  );
};

export default SerachBar;
