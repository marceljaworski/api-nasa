import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import InputGroup from 'react-bootstrap';
import moment from 'moment';

export default function DateForm ({date, setDate}) {
   const [formValue, setFormValue] = useState(date)
    const changeHandler = (event) => {
        setDate(event.target.value)
    }
    const clickHandler =() => {
        setDate(formValue)
    }
    return(

        <Form>
        <Form.Group className="mb-3" controlId="dateInput">
          <Form.Label>Wunchsdatum</Form.Label>
          <InputGroup>
            <Form.Control type="date" value={formValue} onChange={changeHandler}/>
            <Button variant="primary" onClick={clickHandler}>
                Senden
            </Button>
          </InputGroup>
        </Form.Group>

      </Form>
    )
} 