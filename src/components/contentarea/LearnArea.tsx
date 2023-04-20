import { Container, Button } from 'react-bootstrap';

export default function LearnArea() {
    return (
      <div className="learn-area">
          <Container className="text-center" fluid="true"> 
            <h1 className="learn-title">Rahman</h1>
            <p className="learn-meaning">Beneficient</p>
            <div className="learn-control">
                <Button className="learn-prev-btn btn-sm">Previous</Button>
                <Button className="learn-next-btn btn-sm">Next</Button>
            </div>
            
          </Container>
      </div>
    )
  }