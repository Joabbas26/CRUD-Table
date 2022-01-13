import React from 'react';
import { connect } from 'react-redux'
import { Trash, PencilSquare, PlusSquare } from 'react-bootstrap-icons';
import './App.css'
import MainModal from './MainModal';

const MainTable = ({showModal}) => {

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
                    <PlusSquare className='addRow' id='icon' onClick={showModal} style={{height:30, width:80}}/>
                </div>
                <MainModal/>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => ({
    showModal: () => dispatch({ type: "showModal" })
  })
  
  export default connect(null, mapDispatchToProps)(MainTable);