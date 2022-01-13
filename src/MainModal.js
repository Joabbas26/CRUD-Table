import React from 'react'
import './App.css'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Modal from 'react-bootstrap/Modal'
import {connect} from 'react-redux';

const MainModal = ({closeModal, showModal}) => {
    return (
        <div> 
            <Modal.Dialog isOpen={showModal}>
                <Modal.Header>
                    <Modal.Title>Input Data</Modal.Title>
                    <button onClick={closeModal}>&#215;</button>
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
                            <Form.Label>Time At Company</Form.Label>
                            <Form.Control placeholder="In Years" />
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
                            <Form.Control placeholder='In Hours'/>
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridRecommendtion">
                            <Form.Label>Recommendtion</Form.Label>
                            <Form.Control  placeholder='Score'/>
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

const mapStateToProps = (state) => {
    return{
      showModal: state.ModalReducer.showModal  
    }
  }
  
  const mapDispatchToProps = (dispatch) => ({
    closeModal: () => dispatch({ type: "hideModal" }),
    showModal: () => dispatch({ type: "showModal" })
  });
  
export default connect(mapStateToProps, mapDispatchToProps)(MainModal);
