import React, {useSelector} from 'react';
import { Trash, PencilSquare, PlusSquare } from 'react-bootstrap-icons';
import './App.css'
import MainModal from './MainModal';
import { useDispatch } from 'react-redux'
import { show } from './ModalSlice'

export default function MainTable() {

    const dispatch = useDispatch();
    const {isOpen} = useSelector((state) => state.modal.isOpen)//Not regestiring state.modal

    return (
        <div>
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
                                        <PencilSquare className='edit' id='icon' style={{height:30, width:50}}/>
                                        <Trash className='delete' id='icon' style={{height:30, width:50}}/>                 
                                    </td>
                                </tr>
                            </tbody>
                    </table>
                    <PlusSquare className='addRow' id='icon' onClick={()=> dispatch(show())} style={{height:30, width:30}}/>
                </div>
                <MainModal className={`${isOpen ? 'modal-show' : 'modal-hide'}`}/>
        </div>
    )
}