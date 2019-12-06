import React , { Fragment } from 'react';
import Nav1 from './Navbar';
import { Container, Row, Col, Form, Button, Card } from 'react-bootstrap';

// TODO: chnaged design from wireframe

const Contact3 = () => {
  return (
    <Fragment>
      <Nav1 />
      <Container className="h-100">
        <Row className="p-3 justify-content-center align-items-center">
          <Col md={8} className="text-center">
              <h1 className="text-black">Main Title</h1>
              <p className="text-black pt-3">
                  fermentum iaculis eu non diam phasellus vestibulum lorem sed risus ultricies 
                  tristique nulla aliquet enim tortor at auctor urna nunc id cursus metus aliquam 
                  eleifend mi in nulla posuere sollicitudin aliquam ultrices sagittis orci a 
                  scelerisque purus semper eget duis
              </p>

          </Col>
        </Row>
        <Row className="h-100">
            <Col md={6}>
                <Form>
                    <Form.Group controlId="exampleForm.ControlInput1">
                        <Form.Label>Name</Form.Label>
                        <Form.Control as="text" />
                    </Form.Group>
                    <Form.Group controlId="exampleForm.ControlSelect1">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="name@example.com" />
                    </Form.Group>
                    <Form.Group controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Example textarea</Form.Label>
                        <Form.Control as="textarea" rows="4" />
                    </Form.Group>
                    <Button>Send</Button>
                </Form>
            </Col>
            <Col md={6}>
               <Card>
                    <Card.Body className="h-100 text-center">
                        <h4 className="p-3">Subtitle</h4>
                        <p className="p-2">lorem Ipsum tuff guy ado sula</p>
                        <p className="p-2">lorem Ipsum tuff guy ado sula</p>
                        <p className="p-2">M7Y 8R9</p>
                        <p className="p-2">Somewhere, USA</p>
                        <p className="p-2">555-555-5555</p>
                    </Card.Body>
               </Card>
            </Col>
            <Col md={12} className="py-3">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31725.981664507668!2d-79.41692390955505!3d43.66113656160857!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d4cb90d7c63ba5%3A0x323555502ab4c477!2sToronto%2C%20ON!5e0!3m2!1sen!2sca!4v1575603072996!5m2!1sen!2sca" width="100%" height="450" frameborder="0" style={{ border: 0 }} allowfullscreen=""></iframe> 
            </Col>
        </Row>
      </Container>
    </Fragment>
  );
}

export default Contact3;
