import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import InputGroup from 'react-bootstrap';
import moment from 'moment';

export default function DateForm () {
    const today = moment().format("YYY-MM-DD")
    const [date, setDate] = useState(today)
    const changeHandler = (event) => {
        console.log(event)
    }
    return(

        <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Wunchsdatum</Form.Label>
          <InputGroup>
            <Form.Control type="date" value={date} onChange={changeHandler}/>
            <Button variant="primary" >
                Button
            </Button>
          </InputGroup>
        </Form.Group>

      </Form>
    )
} 