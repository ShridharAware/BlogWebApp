import axios from "axios";
import React, { useState } from "react";
import { Form, Button, Row, Col, Card } from "react-bootstrap";

const CreateCategoryForm = () => {
  const [file, setFile] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    let formData = new FormData(e.target);

    if (file) {
      try {
        const base64Image = await convertToBase64(file);
        formData.set("image", base64Image);
      } catch (error) {
        console.error("Error converting file to base64:", error);
      }
    }

    formData = Object.fromEntries(formData.entries());
    await axios.post("/api/categories", formData);
  };

  const convertToBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onloadend = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
      reader.readAsDataURL(file);
    });
  };

  return (
    <Card className="w-75 mx-auto mt-5 mb-5">
      <Card.Header>
        <h3 className="text-center">Create New Category for Blogs</h3>
      </Card.Header>
      <Card.Body>
        <Form onSubmit={handleSubmit}>
          <Row sm={8} className="mt-3 ">
            <Form.Group>
              <Form.Label>Category</Form.Label>
              <Form.Control
                type="text"
                name="category"
                placeholder="Enter category"
                required
              />
            </Form.Group>
          </Row>
          <Row sm={8} className="mt-3 ">
            <Form.Group>
              <Form.Label>Description</Form.Label>
              <Form.Control
                as="textarea"
                rows="3"
                name="description"
                placeholder="Enter description"
                required
              />
            </Form.Group>
          </Row>
          <Row sm={8} className="mt-3 ">
            <Form.Group>
              <Form.Label>Image for Category</Form.Label>
              <Form.Control
                type="file"
                name="image"
                accept=".jpeg, .png, .jpg"
                onChange={(e) => setFile(e.target.files[0])}
                required
              />
            </Form.Group>
          </Row>
          <Row sm={8} className="mt-3 ">
            <Form.Group>
              <Row>
                <Col sm={2}>
                  <Button variant="primary" type="submit">
                    Add Category
                  </Button>
                </Col>
                <Col sm={2}>
                  <Button variant="danger" type="reset">
                    Clear Form
                  </Button>
                </Col>
              </Row>
            </Form.Group>
          </Row>
        </Form>
      </Card.Body>
    </Card>
  );
};

export default CreateCategoryForm;
