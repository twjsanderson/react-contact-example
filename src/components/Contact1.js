import React , { Fragment } from 'react';
import Nav1 from './Navbar';
import { Container, Row, Col } from 'react-bootstrap';
// 

const Contact1 = () => {
  return (
    <Fragment>
      <Nav1 />
      <Container>
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
      </Container>
    </Fragment>
  );
}

export default Contact1;
