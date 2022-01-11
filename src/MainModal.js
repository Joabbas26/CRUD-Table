import React from 'react'
import './App.css'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Modal from 'react-bootstrap/Modal'

export default function MainModal(modalSyle, showModal) {
    return (
        <div>
            <Modal.Dialog>
                <Modal.Header closeButton>
                    <Modal.Title>Input Data</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <Form>
                        <Row className="mb-3">
                            <Form.Group as={Col} controlId="formGridEmailFirstName">
                            <Form.Label>First Name</Form.Label>
                            <Form.Control type="text" placeholder="First Name" />
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridLastName">
                            <Form.Label>Last Name</Form.Label>
                            <Form.Control type="text" placeholder="Last Name" />
                            </Form.Group>
                        </Row>

                        <Form.Group className="mb-3" controlId="formGridYearsAtCompany">
                            <Form.Label>Years At Company</Form.Label>
                            <Form.Control placeholder="Years At Company" />
                        </Form.Group>

                        <Row className="mb-3">

                            <Form.Group as={Col} controlId="formGridFullTime">
                            <Form.Label>Full-Time</Form.Label>
                            <Form.Select defaultValue="Choose...">
                                <option>Yes</option>
                                <option>No</option>
                            </Form.Select>
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridOvertime">
                            <Form.Label>Overtime</Form.Label>
                            <Form.Control />
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridRecommendtion">
                            <Form.Label>Recommendtion</Form.Label>
                            <Form.Control />
                            </Form.Group>
                        </Row>

                    </Form>
                </Modal.Body>

                <Modal.Footer>
                    <Button variant="primary" type="submit">Save changes</Button>
                </Modal.Footer>
            </Modal.Dialog>
        </div>
    )
}
