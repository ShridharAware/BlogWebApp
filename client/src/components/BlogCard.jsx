import { Card, Container, Row, Col } from "react-bootstrap";
import useFetchBlogs from "../hooks/useFetchBlogs";
import { useNavigate, useParams } from "react-router-dom";
import { Button } from "react-bootstrap";
const BlogCard = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { blogs } = useFetchBlogs("/api/blogs");
  const filteredBlogs = blogs.filter(
    (blog) => blog.category.category.toLowerCase() === id
  );
  let title;
  filteredBlogs.length > 0 ? (title = filteredBlogs[0].category.category) : "";
  return (
    <>
      <Container className="my-5">
        <h3 className="text-center">
          {title && "Explore " + title + " blogs"}
        </h3>
        <Button variant="primary" onClick={() => navigate("/create-blog")}>
          Write blog
        </Button>
        <Row className="mt-4">
          {filteredBlogs.map((entry) => {
            return (
              <Col sm={6} className="mb-3" key={entry._id}>
                <Card>
                  <Card.Img variant="top" src={entry.image} alt="Image" />
                  <Card.Body>
                    <Card.Title>{entry.title}</Card.Title>
                    <Card.Text>{entry.category.category}</Card.Text>
                    <Card.Text>{entry.content}</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            );
          })}
        </Row>
      </Container>
    </>
  );
};

export default BlogCard;
