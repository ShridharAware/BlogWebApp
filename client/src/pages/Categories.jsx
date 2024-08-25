import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import useFetchCategories from "../hooks/useFetchCategories";
const Categories = () => {
  const navigate = useNavigate();
  const { categories } = useFetchCategories("/api/categories");
  return (
    <Container className="my-5">
      <Card className="w-100 mx-auto my-2">
        <Card.Body>
          <Card.Title className="text-center">Categories</Card.Title>
          <Card.Text className="text-center">
            Explore our diverse range of categories. Find articles that interest
            you the most!
          </Card.Text>
          <Button
            variant="primary"
            onClick={() => navigate("/create-category")}
          >
            Add category
          </Button>

          <Row className="mt-4">
            {categories.map((entry) => {
              return (
                <Col md={4} className="mb-3" key={entry._id}>
                  <Card className="text-center">
                    <Card.Img
                      variant="top"
                      src={entry.image}
                      alt="Category 1"
                      style={{ width: "100%", height: "auto" }}
                    />
                    <Card.Body>
                      <Card.Title>{entry.category}</Card.Title>
                      <Card.Text>{entry.description}</Card.Text>
                      <Button
                        as={Link}
                        to={`/category/${entry.slug}`}
                        variant="primary"
                      >
                        Explore
                      </Button>
                    </Card.Body>
                  </Card>
                </Col>
              );
            })}
          </Row>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Categories;
