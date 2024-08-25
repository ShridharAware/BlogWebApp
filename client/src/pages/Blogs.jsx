import { Container, Row, Col, Card, Button } from "react-bootstrap";
import useFetchBlogs from "../hooks/useFetchBlogs";
import { useNavigate } from "react-router-dom";
const Blogs = () => {
  const navigate = useNavigate();
  const { blogs } = useFetchBlogs("/api/blogs");
  return (
    <Container className="my-5">
      <h3 className="text-center">Explore Blogs</h3>
      <Button variant="primary" onClick={() => navigate("/create-blog")}>
        Write blog
      </Button>

      <Row className="mt-4">
        {blogs.map((entry) => {
          return (
            <Col md={6} className="mb-3" key={entry._id}>
              <Card>
                <Card.Img
                  variant="top"
                  src={entry.image}
                  alt="Sample"
                  style={{ width: "100%", height: "auto" }}
                />
                <Card.Body>
                  <Card.Title>{entry.title}</Card.Title>
                  <Card.Text>{entry.content}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};

export default Blogs;
