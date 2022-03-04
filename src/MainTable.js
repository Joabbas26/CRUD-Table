import React, { useState, useRef } from 'react';
import { Trash, PencilSquare, PlusSquare } from 'react-bootstrap-icons';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { toggle } from './reducers/ModalSlice';
import { deleteRow, saveRow } from './reducers/NewRowSlice';
import { v4 as uuidv4 } from 'uuid';

export default function MainTable() {

    // Use dispatch declaration and modal, dark mode state from redux
    const isDark = useSelector((state) => state.darkMode.isDark);
    const newRow = useSelector((state) => state.newRow);
    const dispatch = useDispatch();

    // Hooks for all row values
    //const [rowNumber, setRowNumber] = useState(1);
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [companyTime, setCompanyTime] = useState('');
    const [overTime, setOverTime] = useState('');
    const [fullTime, setFullTime] = useState('');
    const [recommendation, setRecommendation] = useState('');

    // Handles opening modal
    const openModalHandler = () => {
        dispatch(toggle());
    }

    // Handles deleting row
    const openDeleteHandler = (e) => {
        // Get index from tr id
        const rowIndex = Number(e.target.parentNode.parentNode.id);
        dispatch(deleteRow( {rowNum: rowIndex} ));  
    }

    const totalRef = useRef(0);

    const getRowTotal = () =>{
        var calcTotal = 0;
             // If comp time more than 50 get 30 points 
             if (companyTime <= 10) {
                 calcTotal += 10;
             } else if (companyTime > 10 && companyTime < 50) {
                 calcTotal += 20;
             }else if (companyTime >= 50){
                 calcTotal += 30;
                 
             }
     
             // If full time get 20 points 
             if (fullTime === 'Yes') {
                 calcTotal += 20;
             } else {
                 calcTotal += 10;
             }
     
             // If over time more than 5 get 30 points 
             if (overTime < 5) {
                 calcTotal += 10;
             } else {
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

    // Handles edit of table row
    const openEditHandler = (e) => {
        const rowIndex = parseInt(e.target.parentNode.parentNode.id);
        let rowCounter = 1;
        // loop over values
        for (let value of Object.values(newRow)) {
            if (rowCounter === rowIndex) {
                alert(JSON.stringify(value.fName)); 
                setFirstName(value.fName);
                setLastName(value.lastName);
                setCompanyTime(value.companyTime);
                setOverTime(value.overTime);
                setFullTime(value.fullTime);
                setRecommendation(value.recommendation);
            }
            // wont work on row delete 
            rowCounter += 1;
        }
    }

    // Changes title color depending on background
    const fontColor = () => `${isDark ? 'white' : 'black'}`;

    // Delete button in row
    const deleteIcon = () => {
        return (
            <Trash className='delete' id='icon' style={{height:30, width:50}} onClick={e => openDeleteHandler(e)}/>
    )};

    // Edit button in row
    const editIcon = () => {
        return(
            <PencilSquare className='edit' id='icon' style={{height:30, width:50}} onClick={e => openEditHandler(e)}/>
        )
    }

    return (
        <div className={`${isDark ? 'darkTheme' : 'lightTheme'}`}>
            <h1 style={{textAlign: 'center' , color: fontColor }}>Employee Ranking</h1>
            <div className="table-responsive">
                    <table className="table table-bordered">
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>First Name</th>
                                    <th>Last Name</th>
                                    <th>Years At Company</th>
                                    <th>Full-Time</th>
                                    <th>Overtime</th>
                                    <th>Recommendation</th>
                                    <th>Total</th>
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
                                        <td>{row.compTime}</td>
                                        <td>{row.fTime}</td>
                                        <td>{row.oTime}</td>
                                        <td>{row.recomm}</td>
                                        <td>{row.total}</td>
                                        <td>{editIcon()}</td>
                                        <td>{deleteIcon()}</td>
                                    </tr>
                                ))}
                            </tbody>
                    </table>
                    <PlusSquare className='addRow' id='icon' onClick={openModalHandler} style={{height:30, width:30}}/>
                </div>
            </div>
    )
}

/*


 */