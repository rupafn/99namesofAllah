import React from 'react';
import {useState} from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import ContentArea from './components/contentarea';
import './App.css';

function App() {
  const [active, setActive] = useState("learn")
  return (
    <div className="App">
      <Container>
        <Row>
          <Col md={2}> 
            <Button onClick={() => {
              setActive("learn")
            }} >Learn</Button>
            <Button onClick={() => {
              setActive("quiz")
            }}>Quiz</Button>
           </Col>
          <Col md={9}> 
            <ContentArea active={active}/>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
