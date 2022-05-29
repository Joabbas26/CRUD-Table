import React, { useState, useRef } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Modal from 'react-bootstrap/Modal';
import { useDispatch, useSelector } from 'react-redux';
import { toggle } from './reducers/ModalSlice';
import { CloseButton } from 'react-bootstrap';
import { Trash, PencilSquare, PlusSquare } from 'react-bootstrap-icons';
import './App.css';
import { toggleEdit } from './reducers/EditModalSlice';
import { addRow, deleteRow, saveRow } from './reducers/NewRowSlice';
import { v4 as uuidv4 } from 'uuid';


export default function TableCombined() {
    // Use dispatch declaration and modal state from redux
    const newRow = useSelector((state) => state.newRow);
    const isOpen = useSelector((state) => state.modal.value);
    const editIsOpen = useSelector((state) => state.editModal.value);
    const dispatch = useDispatch();

    // Hooks for all row values
    const [rowNumber, setRowNumber] = useState(0);
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [Looks, setLooks] = useState('');
    const [English, setEnglish] = useState('');
    const [makeup, setmakeup] = useState('');
    const [recommendation, setRecommendation] = useState('');
    const [inputStyle, setInputStyle] = useState({});
    const [textValidationStyle, setTexValidationStyle] = useState({ display: 'none'});

    // Hooks for search
    const [query, setQuery] = useState("");
    const keys = ["firstName", "lastName", "Looks", "makeup", "English"];

    // Search to filter by terms
    const searchHandler = (data) => {
        return data.filter((item) =>
          keys.some((key) => item[key].toLowerCase().includes(query))
        );
    };

     // Used to toggle modal show and hide
     const editModalHandler = () => {
        dispatch(toggleEdit());
    }

    // Used to toggle modal show and hide
    const modalHandler = () => {
        dispatch(toggle());
    }

    // Handles deleting row
    function openDeleteHandler (e) {
      e.preventDefault();
        // Get index from tr id
        const rowIndex = parseInt(e.target.parentNode.parentNode.id);
        dispatch(deleteRow( {rowNum: rowIndex} ));  
    }

   // Ref for calculating total
   const totalRef = useRef(0);

   const getRowTotal = () =>{
       var calcTotal = 0;
            // If looks more than 8 get 30 points 
            if (Looks <= 3) {
                calcTotal += 0;
            } else if (Looks >= 4 && Looks <= 6) {
                calcTotal += 10;
            }else if (Looks >= 7 && Looks <= 8){
                calcTotal += 20;
            }
            else {
                calcTotal += 30;
            }
    
            // If no makeup get 20 points 
            if (makeup === 'No') {
                calcTotal += 20;
            } else {
                calcTotal += 10;
            }
    
            // If english more than 5 get 30 points 
            if (English < 5) {
                calcTotal += 0;
            } else if (English <= 6 && English >= 7){
                calcTotal += 10;
            }
            else{
                calcTotal += 20;
            }
    
            // Divide recommendation score by 10 and multiply  by 3 to get 30 points
            if (recommendation <= 100) {
                calcTotal += Math.floor((recommendation / 10) * 3);
            } else {
                calcTotal += 0;
            }
           // Sets ref to calculated total score
           totalRef.current = calcTotal;
  }

  const handleEditSubmit = () => {
    if(firstName === ''){
     // Add text description
     setInputStyle({border: 'solid red 1px'});
     setTexValidationStyle({fontSize:'.4rem', color: 'red', display: 'block'})
    }
    else{
    dispatch(toggleEdit());
    // alert(rowNumber);
     // Adds input data to row
    dispatch(saveRow({
        rowNum: rowNumber,
        fName : firstName,
        lName : lastName, 
        looks : Looks, 
        make : makeup,
        eng : English,
        recomm: recommendation,
        total : totalRef.current,
    }));  
    getRowTotal();
    setInputStyle({border: 'solid #ced4da 1px'});
    setTexValidationStyle({display: 'none'});
    }
}

   // Handles adding user data to table
   const handleSubmit = () => {
       if(firstName === ''){
        // Add text description
        setInputStyle({border: 'solid red 1px'});
        setTexValidationStyle({fontSize:'.4rem', color: 'red', display: 'block'})
       }
       else{
        dispatch(toggle());
        getRowTotal();
        // Adds input data to row
        dispatch(addRow({
        //    rowNum: rowNumber,
           fName : firstName,
           lName : lastName, 
           looks : Looks, 
           make : makeup,
           eng : English,
           recomm: recommendation,
           total : totalRef.current,
       }));  
       setInputStyle({border: 'solid #ced4da 1px'});
       setTexValidationStyle({display: 'none'});
       }
   }

    // Handles edit of table row
    const openEditHandler = (e) => {
        editModalHandler();
        const rowIndex = parseInt(e.target.parentNode.parentNode.id);
        setRowNumber(rowIndex);
        let rowCounter = 1;
        // loop over values
        for (let value of Object.values(newRow)) {
            if (rowCounter === rowIndex) {
                setFirstName(value.fName);
                setLastName(value.lName);
                setLooks(value.looks);
                setmakeup(value.make);
                setEnglish(value.eng);
                setRecommendation(value.recomm);
            }
            rowCounter += 1;
        }
    }

    // Delete button in row
    const deleteIcon = () => {
        return (
          <Trash className='delete' id='icon' style={{height:30, width:50}} onClick={openDeleteHandler}/>
    )};

    // Edit button in row
    const editIcon = () => {
        return(
          <PencilSquare className='edit' id='icon' style={{height:30, width:50}} onClick={openEditHandler}/>
        )
    }

    return (
        <div className='mainTable'>
            <Modal className='editModal' onHide={editModalHandler} show={editIsOpen}>
        <Modal.Header>
            <Modal.Title>Girls Evaluation</Modal.Title>
            <CloseButton onClick={editModalHandler}/>
        </Modal.Header>

        <Modal.Body>
        <Form onSubmit={handleEditSubmit}>
                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridFirstName">
                    <Form.Label>First Name*</Form.Label>
                    <Form.Control type="text" placeholder="First Name" 
                    value={firstName} onInput={e => setFirstName(e.target.value)} style={inputStyle}/>
                    <p style={textValidationStyle}>Cannot be left blank</p>
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridLastName">
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control type="text" placeholder="Last Name" 
                    value={lastName} onInput={e => setLastName(e.target.value)}/>
                    </Form.Group>
                </Row>

                <Form.Group className="mb-3" controlId="formGridLooks">
                    <Form.Label>Looks</Form.Label>
                    <Form.Control placeholder="Out of 10" type="number" 
                    value={Looks} onInput={e => setLooks(e.target.value)}/>
                </Form.Group>

                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridmakeup">
                    <Form.Label>Makeup</Form.Label>
                    <Form.Control as="select" value={makeup} onChange={e => setmakeup(e.target.value)}>
                        <option value='...'>...</option>
                        <option value='Yes'>Yes</option>
                        <option value='No'>No</option>
                    </Form.Control>
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridEnglish">
                    <Form.Label>English</Form.Label>
                    <Form.Control placeholder='Out of 10' type="number" 
                    value={English} onInput={e => setEnglish(e.target.value)}/>
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridRecommendtion">
                    <Form.Label>Recommendation</Form.Label>
                    <Form.Control placeholder='Out of 100' type="number"
                    value={recommendation} onInput={e => setRecommendation(e.target.value)}/>
                    </Form.Group>
                </Row>

            </Form>
        </Modal.Body>

        <Modal.Footer>
            <Button variant="primary" type="submit" onClick={handleEditSubmit}>Save</Button>
        </Modal.Footer>
    </Modal>


            <Modal className='modal' onHide={modalHandler} show={isOpen}>
                <Modal.Header>
                    <Modal.Title>Employee Evaluation</Modal.Title>
                    <CloseButton onClick={modalHandler}/>
                </Modal.Header>

                <Modal.Body>
                    <Form onSubmit={handleSubmit}>
                        <Row className="mb-3">
                            <Form.Group as={Col} controlId="formGridFirstName">
                            <Form.Label>First Name*</Form.Label>
                            <Form.Control type="text" placeholder="First Name"
                            value={firstName} onInput={e => setFirstName(e.target.value)}  style={inputStyle}/>
                            <p style={textValidationStyle}>Cannot be left blank</p>
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridLastName">
                            <Form.Label>Last Name</Form.Label>
                            <Form.Control type="text" placeholder="Last Name" 
                            value={lastName} onInput={e => setLastName(e.target.value)}/>
                            </Form.Group>
                        </Row>

                        <Form.Group className="mb-3" controlId="formGridLooks">
                            <Form.Label>Looks</Form.Label>
                            <Form.Control placeholder="Out of 10" type="number" 
                            value={Looks} onInput={e => setLooks(e.target.value)}/>
                        </Form.Group>

                        <Row className="mb-3">
                            <Form.Group as={Col} controlId="formGridmakeup">
                            <Form.Label>Makeup</Form.Label>
                            <Form.Control as="select" value={makeup} onChange={e => setmakeup(e.target.value)}>
                                <option value='...'>...</option>
                                <option value='Yes'>Yes</option>
                                <option value='No'>No</option>
                            </Form.Control>
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridEnglish">
                            <Form.Label>English</Form.Label>
                            <Form.Control placeholder='Out of 10' type="number" 
                            value={English} onInput={e => setEnglish(e.target.value)}/>
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridRecommendtion">
                            <Form.Label>Recommendation</Form.Label>
                            <Form.Control placeholder='Out of 100' type="number"
                            value={recommendation} onInput={e => setRecommendation(e.target.value)}/>
                            </Form.Group>
                        </Row>

                    </Form>
                </Modal.Body>

                <Modal.Footer>
                    <Button variant="primary" type="submit" onClick={handleSubmit}>Save</Button>
                </Modal.Footer>
            </Modal>

            <h1 className='tableTitle'>Female Ranking</h1>
            <div className='row'>
                <div className='col-md-3'>
                    <input
                        className="searchHandler"
                        placeholder="Search..."
                        onChange={(e) => setQuery(e.target.value.toLowerCase())}
                    />
                </div>
            </div>
            
            
            <div className="table-responsive">
                    <table className="table table-bordered">
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>First Name</th>
                                    <th>Last Name</th>
                                    <th>Looks</th>
                                    <th>Makeup</th>
                                    <th>English</th>
                                    <th>Personal Score</th>
                                    <th>Compatibilty Score</th>
                                    <th>Edit</th>
                                    <th>Delete</th>
                                </tr>
                            </thead>
                            <tbody>
                                {newRow.map((row, index) => (
                                    <tr key={uuidv4()} id={index+1}>
                                        <td>{index+1}</td>
                                        <td>{row.fName}</td>
                                        <td>{row.lName}</td>
                                        <td>{row.looks}</td>
                                        <td>{row.make}</td>
                                        <td>{row.eng}</td>
                                        <td>{row.recomm}</td>
                                        <td>{row.total}</td>
                                        <td>{editIcon()}</td>
                                        <td>{deleteIcon()}</td>
                                    </tr>
                                ))}
                            </tbody>
                    </table>
                    <PlusSquare className='addRow' id='icon' onClick={modalHandler} style={{height:30, width:30}}/>
                </div>
            </div>
    )
}

/*


 */