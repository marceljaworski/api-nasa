import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import DateForm from './components/Form';
import {useState} from 'react';
import Apod from './components/Apod'
import moment from 'moment';


function App() {
  const today = moment().format("YYYY-MM-DD")
  const [date, setDate] = useState(today)
  return (
    <div className="App">
      <Container>
        <Row>
          
          <h1>Space Pic des Tages</h1>
          
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
