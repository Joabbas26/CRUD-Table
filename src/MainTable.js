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
        
    }

    const getRowTotal = () => {
        // If comp time more than 50 get 30 points 
        if (newRow.compTime <= 10) {
            newRow.total += 10;
        } else if (newRow.compTime > 10 && newRow.compTime < 50) {
            newRow.total += 20;
        }else if (newRow.compTime >= 50){
            newRow.total += 30;
        }

        // If full time get 20 points 
        if (newRow.fullTime === 'Yes') {
            newRow.total += 20;
        } else {
            newRow.total += 10;
        }

        // If over time more than 5 get 30 points 
        if (newRow.overTime < 5) {
            newRow.total += 10;
        } else {
            newRow.total += 20;
        }

        // Divide recommendation score by 10 and multiply  by 3 to get 30 points
        if (newRow.recomm <= 100) {
            newRow.total += Math.floor((newRow.recomm/10) * 3);
        } else {
            newRow.total += 0;
        }
        // Edit later
        return newRow.total;
    };

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
                                {newRow.map(row => (
                                    <tr key={uuidv4()}>
                                        <td>{row.rowNum}</td>
                                        <td>{row.fName}</td>
                                        <td>{row.lName}</td>
                                        <td>{row.compTime}</td>
                                        <td>{row.fullTime}</td>
                                        <td>{row.overTime}</td>
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



        <tbody>
          
        </tbody>

 */