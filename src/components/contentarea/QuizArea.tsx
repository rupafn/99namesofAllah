import { Container, Row, Col, Button} from 'react-bootstrap';

export default function QuizArea() {
    return (
      <div>
          <Container> 
                <Row>
                    <Col md={12}><p>Quiz Area</p></Col>
                </Row>
                <Row>
                    <Col xs={6}>Col1</Col>
                    <Col xs={6}>Col2</Col>
                </Row>
                <Row>
                    <Col xs={6}>Col1</Col>
                    <Col xs={6}>Col2</Col>
                </Row>
                <Row>
                    <Col xs={6}>Col1</Col>
                    <Col xs={6}>Col2</Col>
                </Row>
                <Row>
                    <Col xs={6}>Col1</Col>
                    <Col xs={6}>Col2</Col>
                </Row>
                <Row>
                    <Col xs={6}>Col1</Col>
                    <Col xs={6}>Col2</Col>
                </Row>
                <Button>Reset</Button>

                
          </Container>
      </div>
    )
  }
