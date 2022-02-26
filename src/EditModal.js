import React, {useState, useRef} from 'react';
import './App.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Modal from 'react-bootstrap/Modal';
import { useDispatch, useSelector } from 'react-redux';
import { toggle } from './reducers/ModalSlice';
import { addRow } from './reducers/NewRowSlice';
import { CloseButton } from 'react-bootstrap';

export default function EditModal() {
    handleSubmit = () => {
        getRowTotal();
        // Adds input data to row
        dispatch(saveRow({
            //rowNum: rowNumber,
            fName : firstName,
            lName : lastName, 
            compTime : companyTime, 
            fTime : fullTime,
            oTime : overTime,
            recomm: recommendation,
            total : totalRef.current,
        }));  
    }

  return (
        <Modal className='editModal' onHide={modalHandler} show={isOpen}>
        <Modal.Header>
            <Modal.Title>Employee Evaluation</Modal.Title>
            <CloseButton onClick={modalHandler}/>
        </Modal.Header>

        <Modal.Body>
            <Form onSubmit={handleSubmit} action="../../post" method="post">
                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridFirstName">
                    <Form.Label>First Name</Form.Label>
                    <Form.Control type="text" placeholder="First Name" 
                    value={firstName} onInput={e => setFirstName(e.target.value)}/>
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridLastName">
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control type="text" placeholder="Last Name" 
                    value={lastName} onInput={e => setLastName(e.target.value)}/>
                    </Form.Group>
                </Row>

                <Form.Group className="mb-3" controlId="formGridYearsAtCompany">
                    <Form.Label>Time At Company</Form.Label>
                    <Form.Control placeholder="In Years" type="number" 
                    value={companyTime} onInput={e => setCompanyTime(e.target.value)}/>
                </Form.Group>

                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridFullTime">
                    <Form.Label>Full-Time</Form.Label>
                    <Form.Control as="select" value={fullTime} onChange={e => setFullTime(e.target.value)}>
                        <option value='...'>...</option>
                        <option value='Yes'>Yes</option>
                        <option value='No'>No</option>
                    </Form.Control>
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridOvertime">
                    <Form.Label>Overtime</Form.Label>
                    <Form.Control placeholder='In Hours' type="number" 
                    value={overTime} onInput={e => setOverTime(e.target.value)}/>
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridRecommendtion">
                    <Form.Label>Recommendation</Form.Label>
                    <Form.Control placeholder='Score' type="number"
                    value={recommendation} onInput={e => setRecommendation(e.target.value)}/>
                    </Form.Group>
                </Row>

            </Form>
        </Modal.Body>

        <Modal.Footer>
            <Button variant="primary" type="submit" onClick={handleSubmit}>Save</Button>
        </Modal.Footer>
    </Modal>
  )
}
