import {
  Navbar,
  Container,
  Nav,
  Card,
  Row,
  Col,
  Form,
  Button,
} from "react-bootstrap";

function App() {
  return (
    <>
      {/* React Fragment */}
      <div className="App">
        {/* Navbar */}
        <Navbar bg="dark" variant="dark" expand="lg">
          <Container>
            <Navbar.Brand href="#home">My React App</Navbar.Brand>
            <Nav className="ms-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#features">Features</Nav.Link>
              <Nav.Link href="#contact">Contact</Nav.Link>
            </Nav>
          </Container>
        </Navbar>

        {/* Heading */}
        <Container className="mt-4">
          <h1 className="text-center">Welcome to My React-Bootstrap App</h1>

          {/* Cards Section */}
          <Row className="mt-4">
            {/* Card 1 */}
            <Col md={4}>
              <Card>
                <Card.Img variant="top" src="https://picsum.photos/200" />
                <Card.Body>
                  <Card.Title>Card One</Card.Title>
                  <Card.Text>
                    This is the first card using React-Bootstrap!
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>

            {/* Card 2 */}
            <Col md={4}>
              <Card>
                <Card.Img variant="top" src="https://picsum.photos/200" />
                <Card.Body>
                  <Card.Title>Card Two</Card.Title>
                  <Card.Text>This is the second card in the row.</Card.Text>
                </Card.Body>
              </Card>
            </Col>

            {/* Card 3 */}
            <Col md={4}>
              <Card>
                <Card.Img variant="top" src="https://picsum.photos/200" />
                <Card.Body>
                  <Card.Title>Card Three</Card.Title>
                  <Card.Text>
                    This is the third card showing Bootstrap layout.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>

          {/* Contact Form Section */}
          <Row className="mt-5">
            <Col md={{ span: 6, offset: 3 }}>
              <h2 className="text-center mb-4">Contact Us</h2>
              <Form>
                {/* Name Input */}
                <Form.Group className="mb-3" controlId="formName">
                  <Form.Label>Name</Form.Label>
                  <Form.Control type="text" placeholder="Enter your name" />
                </Form.Group>

                {/* Email Input */}
                <Form.Group className="mb-3" controlId="formEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control type="email" placeholder="Enter your email" />
                  <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                  </Form.Text>
                </Form.Group>

                {/* Message Textarea */}
                <Form.Group className="mb-3" controlId="formMessage">
                  <Form.Label>Message</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={3}
                    placeholder="Your message"
                  />
                </Form.Group>

                {/* Checkbox */}
                <Form.Group className="mb-3" controlId="formCheckbox">
                  <Form.Check type="checkbox" label="Subscribe to newsletter" />
                </Form.Group>

                {/* Submit Button */}
                <Button variant="primary" type="submit">
                  Submit
                </Button>
              </Form>
            </Col>
          </Row>
        </Container>

        {/* Footer */}
        <footer className="bg-dark text-white text-center py-4 mt-5">
          <Container>
            <p className="mb-0">© 2025 My React App. All rights reserved.</p>
            <p className="mb-0">Built with React & Bootstrap</p>
          </Container>
        </footer>
      </div>
    </>
  );
}

export default App;
