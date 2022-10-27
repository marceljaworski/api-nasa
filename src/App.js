
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import DateForm from './components/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import DateForm from './components/Form';



function App() {
  return (
    <div className="App">
      <Container>
        <Row>
          <Col>
            <H1>Nasa API</H1>
          </Col>
        </Row>
        <Row>
          <Col>
            <DateForm />
          </Col>
        </Row>
      </Container>
      <DateForm />
    </div>
  );
}

export default App;
