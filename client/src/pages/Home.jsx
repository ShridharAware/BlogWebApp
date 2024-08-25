import { Container, Row, Col, Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import useFetchBlogs from "../hooks/useFetchBlogs";
const Home = () => {
  const { blogs } = useFetchBlogs("/api/blogs");
  const lastThree = blogs.slice(-3);
  return (
    <>
      <Container className="my-5">
        <div className="jumbotron text-center">
          <h3 className="display-4">Welcome to BlogWEB!</h3>
          <p className="lead">
            Your go-to source for insights, stories, and trends across various
            topics.
          </p>
          <Link to="/categories">
            <Button variant="primary">Explore Categories</Button>
          </Link>
        </div>
        <h2 className="text-center my-4">Featured Articles</h2>
        <Row>
          {lastThree.map((entry) => {
            return (
              <Col md={4} className="mb-3" key={entry._id}>
                <Card>
                  <Card.Img variant="top" src={entry.image} alt="Image" />
                  <Card.Body>
                    <Card.Title>{entry.title}</Card.Title>
                    <Card.Text>{entry.category.category}</Card.Text>
                    <Card.Text>{entry.content}</Card.Text>
                    <Link
                      to={`/category/${entry.category.category.toLowerCase()}`}
                    >
                      <Button variant="primary">Read more</Button>
                    </Link>
                  </Card.Body>
                </Card>
              </Col>
            );
          })}
        </Row>

        <div className="text-center my-5">
          <h2>Join Our Community</h2>
          <p>
            Subscribe to our newsletter for the latest updates and exclusive
            content!
          </p>
          <Button variant="success">Subscribe Now</Button>
        </div>
      </Container>
    </>
  );
};

export default Home;
