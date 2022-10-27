import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import DateForm from './components/Form';
import {useState} from 'react';
import Apod from './components/Apod'


function App() {
  const today = moment().format("YYY-MM-DD")
  const [date, setDate] = useState(today)
  return (
    <div className="App">
      <Container>
        <Row>
          <Col>
            <H1>Space Pic des Tages</H1>
          </Col>
        </Row>
        <Row>
          <Col>
            <DateForm date={date} setDate={setDate} />
          </Col>
        </Row>
        <Row>
          <Apod date={date}/>
        </Row>
      </Container>
    </div>
  );
}

export default App;
