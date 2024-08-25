import { Container, Card, Button } from "react-bootstrap";

const About = () => {
  return (
    <Container className="my-5">
      <Card className="w-100 mx-auto my-3">
        <Card.Body>
          <Card.Title className="text-center">About Us</Card.Title>
          <hr />
          <Card.Text>
            Welcome to our blog! We are passionate about sharing insights,
            stories, and knowledge across various topics that inspire, educate,
            and entertain. Our team consists of dedicated writers and creators
            who are committed to delivering high-quality content that resonates
            with our readers.
          </Card.Text>

          <h5 className="mt-4">Our Mission</h5>
          <Card.Text>
            Our mission is to foster a vibrant community of learners and
            thinkers by providing diverse content that sparks curiosity and
            encourages exploration.
          </Card.Text>

          <h5 className="mt-4">What We Offer</h5>
          <ul className="list-unstyled">
            <li>
              <strong>Informative Articles:</strong> In-depth explorations of
              trending topics and timeless issues.
            </li>
            <li>
              <strong>Personal Stories:</strong> Authentic narratives from our
              writers and guest contributors that connect on a personal level.
            </li>
            <li>
              <strong>Guides and Tips:</strong> Practical advice to help you
              navigate everyday challenges and make informed decisions.
            </li>
          </ul>

          <h5 className="mt-4">Join Us</h5>
          <Card.Text>
            We invite you to engage with our content, share your thoughts, and
            become part of our growing community. Follow us on social media and
            subscribe to our newsletter for the latest updates and exclusive
            content!
          </Card.Text>

          <div className="text-center mt-4">
            <Button variant="primary">Subscribe Now</Button>
          </div>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default About;
