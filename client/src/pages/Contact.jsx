import { Container, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <Container className="my-5">
      <Card className="w-100 mx-auto my-3">
        <Card.Body>
          <Card.Title className="text-center">Contact Us</Card.Title>
          <hr />
          <Card.Text>
            We would love to hear from you! Whether you have questions,
            feedback, or just want to say hello, feel free to reach out to us.
          </Card.Text>

          <h5 className="mt-4">Get in Touch</h5>
          <Card.Text>You can contact us via email at:</Card.Text>
          <Card.Text>
            <strong>
              <a href="mailto:info@example.com">info@example.com</a>
            </strong>
          </Card.Text>

          <h5 className="mt-4">Follow Us</h5>
          <Card.Text>
            Stay updated with our latest news and posts by following us on
            social media!
          </Card.Text>

          <div className="mt-4 text-center">
            <Button variant="primary" className="me-2">
              <Link to="#" className="text-white text-decoration-none">
                Follow Us on Facebook
              </Link>
            </Button>
            <Button variant="info">
              <Link to="#" className="text-white text-decoration-none">
                Follow Us on Twitter
              </Link>
            </Button>
          </div>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Contact;
