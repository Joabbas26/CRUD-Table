import React from 'react';
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

export default function MainModal ({rowNum, fName, lName, compTime, fullTime, overTime, recomm}) {

    // Use dispatch declaration and modal state from redux
    const isOpen = useSelector((state) => state.modal.value);
    const dispatch = useDispatch();

    // Used to toggle modal show and hide
    const modalHandler = () => {
        dispatch(toggle());
    }
    
    // Handles adding user data to table
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(toggle());
        // Dispatch not registering values from input
        dispatch(addRow({
            rowNum: rowNum,
            fName: fName, 
            lName: lName,
            compTime: compTime,
            fullTime: fullTime,
            overTime: overTime,
            recomm: recomm,
            })
        );  
        //alert(JSON.stringify(rowNum, null, 4));
    }

    return (
            <Modal className='modal' onHide={modalHandler} show={isOpen}>
                <Modal.Header>
                    <Modal.Title>Employee Evaluation</Modal.Title>
                    <CloseButton onClick={modalHandler}/>
                </Modal.Header>

                <Modal.Body>
                    <Form onSubmit={handleSubmit}>
                        <Row className="mb-3">
                            <Form.Group as={Col} controlId="formGridEmailFirstName">
                            <Form.Label>First Name</Form.Label>
                            <Form.Control type="text" placeholder="First Name" value={fName}/>
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridLastName">
                            <Form.Label>Last Name</Form.Label>
                            <Form.Control type="text" placeholder="Last Name" value={lName}/>
                            </Form.Group>
                        </Row>

                        <Form.Group className="mb-3" controlId="formGridYearsAtCompany">
                            <Form.Label>Time At Company</Form.Label>
                            <Form.Control placeholder="In Years" value={compTime}/>
                        </Form.Group>

                        <Row className="mb-3">
                            <Form.Group as={Col} controlId="formGridFullTime">
                            <Form.Label>Full-Time</Form.Label>
                            <Form.Select defaultValue="Choose..." value={fullTime}>
                                <option>Yes</option>
                                <option>No</option>
                            </Form.Select>
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridOvertime">
                            <Form.Label>Overtime</Form.Label>
                            <Form.Control placeholder='In Hours' value={overTime}/>
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridRecommendtion">
                            <Form.Label>Recommendation</Form.Label>
                            <Form.Control  placeholder='Score' value={recomm}/>
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

/*
    =========== Test to return isOpen as a string ==============
    const test = () => {alert(JSON.stringify(isOpen, null, 4));}

 */