import React from 'react';
import { Trash, PencilSquare, PlusSquare } from 'react-bootstrap-icons';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { toggle } from './reducers/ModalSlice';
import { deleteRow } from './reducers/NewRowSlice';

export default function MainTable({rowNum}) {

    // Use dispatch declaration and modal, dark mode state from redux
    const isDark = useSelector((state) => state.darkMode.isDark);
    const dispatch = useDispatch();

    const newRow = useSelector((state) => state.newRow);

    // Handles opening modal
    const openModalHandler = () => {
        dispatch(toggle());
    }

    // Handles deleting row
    const openDeleteHandler = (rowNum) => {
        dispatch(deleteRow({ rowNum:rowNum }));
        //dispatch(deleteRow.removeItem(rowNum));
    }

    // Handles edit of table row
    const openEditHandler = () => {
        dispatch(toggle({ rowNum:rowNum }));

    }

    // Changes title color depending on background
    const fontColor = () => `${isDark ? 'white' : 'black'}`;

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
                                    <th>Edit</th>
                                    <th>Delete</th>
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
                                    <td>{editIcon()}</td>
                                    <td>{deleteIcon()}</td>
                                </tr>
                            </tbody>
                    </table>
                    <PlusSquare className='addRow' id='icon' onClick={openModalHandler} style={{height:30, width:30}}/>
                </div>
                
            </div>
    )
}

/*



        <tbody>
          {newRow.map(row => (
            <tr key={row.rowNum}>
                <td>{row.rowNum}
                <td>{row.fName}</td>
                <td>{row.lName}</td>
                <td>{row.compTime}</td>
                <td>{row.fullTime}</td>
                <td>{row.recom}</td>
                <td>{total}</td>
                <td>{editIcon()}</td>
                <td>{deleteIcon()}</td>
            </tr>
          ))}
        </tbody>

 */