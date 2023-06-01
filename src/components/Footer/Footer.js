import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

export const Footer = () => {
  const API_URL = 'http://10.16.49.15:5000/file/'
  const handleDownload = (fileName) => {
    const fileUrl = API_URL + fileName
    window.open(fileUrl, '_blank')
  }

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
              <li><a href="/about">About</a></li>
              <li><a href="/contact">Contact</a></li>
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
