import { Container, Row, Col, Card } from 'react-bootstrap'
import order_dis from '../../assets/img/order_dis.png'
import distance_dis from '../../assets/img/distance_dis.png'
export const TaxiDayCard = () => {
  return (

    <Container>
      <h1 className="text-center my-4">One Day Taxi Statistics - Shenzhen</h1>
      <h4 className="text-right my-4">2013-10-22</h4>
      <Row className="mb-4">
        <Col md={4}>
          <Card>
            <Card.Body>
              <Card.Title style={{ color: 'black' }}>Average Distance For One Order</Card.Title>
              <Card.Text style={{ color: 'black', fontSize: '35px' }}>8.0789km</Card.Text>
              <Card.Text style={{ color: 'grey', fontSize: '12px' }}>About 10000 steps, 2 hours walk</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card>
            <Card.Body>
              <Card.Title style={{ color: 'black' }}>Average Time For One Order</Card.Title>
              <Card.Text style={{ color: 'black', fontSize: '35px' }}>16 minutes 57 seconds</Card.Text>
              <Card.Text style={{ color: 'grey', fontSize: '12px' }}>Longest Trip Takes </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card>
            <Card.Body>
              <Card.Title style={{ color: 'black' }}>Average Order</Card.Title>
              <Card.Text style={{ color: 'black', fontSize: '35px' }}>45.17</Card.Text>
              <Card.Text style={{ color: 'grey', fontSize: '12px' }}>Minimum is 1 while the Maximum is 132</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col md={6}>
          <Card>
            <Card.Body>
              <Card.Title style={{ color: 'black' }}>Distribution of Taxi Order Counts</Card.Title>
              <Card.Img variant="top" src={order_dis} />
            </Card.Body>
          </Card>
        </Col>
        <Col md={6}>
          <Card>
            <Card.Body>
              <Card.Title style={{ color: 'black' }}>Distribution of Taxi Order Distance</Card.Title>
              <Card.Img variant="top" src={distance_dis} />
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  )
}
