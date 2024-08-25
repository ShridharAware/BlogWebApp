import axios from "axios";
import React, { useEffect, useState } from "react";
import { Form, Button, Row, Col, Card } from "react-bootstrap";
import useFetchCategories from "../hooks/useFetchCategories";

const CreateBlog = () => {
  const [file, setFile] = useState(null);
  const { categories } = useFetchCategories("/api/categories");

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
    await axios.post("/api/blogs", formData);
  };

  const convertToBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onloadend = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
      reader.readAsDataURL(file);
    });
  };

  useEffect(() => {}, []);
  return (
    <Card className="w-75 mx-auto mt-5 mb-5">
      <Card.Header>
        <h3 className="text-center">Write your blog</h3>
      </Card.Header>
      <Card.Body>
        <Form onSubmit={handleSubmit}>
          <Row sm={8} className="mt-3 ">
            <Form.Group>
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="text"
                name="title"
                placeholder="Write descriptive title for your blog"
                required
              />
            </Form.Group>
          </Row>
          <Row sm={8} className="mt-3 ">
            <Form.Group>
              <Form.Label>Category</Form.Label>
              <Form.Select name="category" required>
                <option>Choose category</option>
                {categories.map((entry) => {
                  return (
                    <option value={entry._id} key={entry._id}>
                      {entry.category}
                    </option>
                  );
                })}
              </Form.Select>
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
              <Form.Label>Content</Form.Label>
              <Form.Control
                as="textarea"
                rows="5"
                name="content"
                placeholder="Write your blog here..."
                required
              />
            </Form.Group>
          </Row>

          <Row sm={8} className="mt-3 ">
            <Form.Group>
              <Row>
                <Col sm={2}>
                  <Button variant="primary" type="submit">
                    Add Blog
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

export default CreateBlog;
