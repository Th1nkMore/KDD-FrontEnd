import { Card, Stack, Container, Row, Col } from 'react-bootstrap'
import { KeplerMap } from '../KeplerMap/KeplerMap'

export const KeplerCard = ({ width, height }) => {
  return (
    <Container>
      <Card style={{
        width: { width }, height: { height }
      }}>
        <Card.Body>
          <Card.Title style={{ color: 'black' }}>OD Data</Card.Title>
          <Row className="mb-4">
            {/* <Col md={10}> */}
            <Stack direction="horizontal" gap={3}>
              <KeplerMap
                id={"2013"}
                width={1300}
                height={500}
                fileName={'output_taxi.csv'}
              />

            </Stack>
            {/* </Col> */}
            {/* <Col md={2}>
              <h1 style={{ color: 'black' }}>Whatever</h1>
            </Col> */}
          </Row>
        </Card.Body >
      </Card >

    </Container>

  )
}
