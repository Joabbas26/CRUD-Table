import React from 'react';
import { Trash, PencilSquare, PlusSquare } from 'react-bootstrap-icons';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { toggle } from './reducers/ModalSlice';
//import MainModal from './MainModal';

export default function MainTable() {

    // Use dispatch declaration and modal, dark mode state from redux
    const isOpen = useSelector((state) => state.modal.value);
    const isDark = useSelector((state) => state.darkMode.isDark);
    const dispatch = useDispatch();

    // Handles opening modal
    const openModalHandler = () => {
        dispatch(toggle());
        console.log(isOpen);
    }

    // Handles deleting row
    const openDeleteHandler = () => {

    }
    // Handles edit of table row
    const openEditHandler = () => {

    }

    // Changes title color depending on background
    const fontColor = () => `${isDark ? 'white' : 'black'}`

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
                                    <th>Recommendtion</th>
                                    <th>Total</th>
                                    <th>Edit/Delete</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>1</td>
                                    <td>John</td>
                                    <td>Smith</td>
                                    <td>10</td>
                                    <td>Yes</td>
                                    <td>5</td>
                                    <td>100</td>
                                    <td>90</td>
                                    <td>
                                        <PencilSquare className='edit' id='icon' style={{height:30, width:50}} onClick={openEditHandler}/>
                                        <Trash className='delete' id='icon' style={{height:30, width:50}} onClick={openDeleteHandler}/>                 
                                    </td>
                                </tr>
                            </tbody>
                    </table>
                    <PlusSquare className='addRow' id='icon' onClick={openModalHandler} style={{height:30, width:30}}/>
                </div>
                
            </div>
    )
}

/*
    
    {NewRow.map((newRow, index) => (
        <tr key={newRow.id}>
            <td>{fName}</td>
            <td>{lName}</td>
            <td>{compTime}</td>
            <td>{fullTime}</td>
            <td>{recom}</td>
            <td>{total}</td>
            <td>{edit}</td>
        </tr>
    ))}

 */