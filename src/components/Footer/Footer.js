import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

export const Footer = () => {

  return (

    <footer className=" text-light py-3">
      <br />
      <Container>
        <Row>
          <Col md={6}>
            <h5>About Us</h5>
            <p>Here is Data mining project about visualization about one day taxi in ShenZhen</p>
          </Col>
          <Col md={3}>
            <h5>Links</h5>
            <ul className="list-unstyled">
              <li><a href="/">Home</a></li>
              <li><a href="/Map">Map</a></li>
              <li><a href="/Statistics">Statistics</a></li>
            </ul>
          </Col>
          <Col md={3}>
            <h4>Data Resources</h4>
            <p>output_taxi.csv</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer
