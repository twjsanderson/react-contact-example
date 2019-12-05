import React , { Fragment } from 'react';
import Nav1 from './Navbar';
import { Container, Row, Col, Form, Button, Card } from 'react-bootstrap';


const Contact3 = () => {
  return (
    <Fragment>
      <Nav1 />
      <Container style={{ height: 700 }}>
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
        <Row className="h-50">
            <Col md={8}>
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
            <Col md={4}>
               <Card>
                    <Card.Body className="text-center">
                        <h4 className="p-3">Subtitle</h4>
                        <p className="p-2">lorem Ipsum tuff guy ado sula</p>
                        <p className="p-2">lorem Ipsum tuff guy ado sula</p>
                        <p className="p-2">M7Y 8R9</p>
                        <p className="p-2">Somewhere, USA</p>
                        <p className="p-2">555-555-5555</p>
                    </Card.Body>
               </Card>
            </Col>
        </Row>
      </Container>
    </Fragment>
  );
}

export default Contact3;
