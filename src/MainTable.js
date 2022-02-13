import React from 'react';
import { Trash, PencilSquare, PlusSquare } from 'react-bootstrap-icons';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { toggle } from './reducers/ModalSlice';
import { deleteRow } from './reducers/NewRowSlice';
import { v4 as uuidv4 } from 'uuid';

export default function MainTable() {

    // Use dispatch declaration and modal, dark mode state from redux
    const isDark = useSelector((state) => state.darkMode.isDark);
    const newRow = useSelector((state) => state.newRow);
    const dispatch = useDispatch();

    // Handles opening modal
    const openModalHandler = () => {
        dispatch(toggle());
    }

    // Handles deleting row
    const openDeleteHandler = (e) => {
        // Save index
        const rowKey = parseInt(e.target.parentNode.parentNode.id);
        dispatch(deleteRow( {rowNum: rowKey} ));  
        // newRow.filter((Row, index) => {
        //     // alert(JSON.stringify(Row));
        //     return (index+1) !== rowKey;
        // });  
    }

    // Handles edit of table row
    const openEditHandler = (e) => {
        const rowKey = parseInt(e.target.parentNode.parentNode.id);
        // loop over values
        for (let value of Object.values(newRow)) {
            alert(JSON.stringify(value)); // John, then 30
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