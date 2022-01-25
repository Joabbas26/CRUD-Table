import React, { Fragment } from 'react'
import './App.css'
import { useDispatch, useSelector } from 'react-redux';
import hide from './reducers/ModalSlice';

export default function Input() {
    const isOpen = useSelector((state) => state.modal);
    const dispatch = useDispatch();
    const closeModalHandler = () => dispatch(hide());
    
    function handleSubmit() {
    }
    return (
        <Fragment>
        <div className={`${isOpen ? 'modal-hide' : 'modal-show'}`}>
            <div className="modal-container" tabIndex="-1" role="dialog">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Employee Evaluation</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={closeModalHandler}>
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <form onSubmit={handleSubmit}>
                            <div className="row">
                                <div className='col'>
                                    <label htmlFor="fname">First Name</label>
                                    <input type="text" placeholder="First Name" name="fname"/>
                                </div>
                                <div className='col'>
                                    <label htmlFor="lname">Last Name</label>
                                    <input type="text" placeholder="Last Name" name="lname"/>
                                </div>
                                <div className='col'>
                                    <label htmlFor="compTime">Time At Company</label>
                                    <input type="text" placeholder="In Years" name="compTime"/>
                                </div>
                            </div>
                            <div className="row">
                                <div className='col'> 
                                    <label htmlFor="ft">Full-Time</label>
                                    <select defaultValue="Choose.." name="ft">
                                        <option>Yes</option>
                                        <option>No</option>
                                    </select>
                                </div>
                                <div className='col'>
                                    <label htmlFor="ot">Overtime</label>
                                    <input type="text" placeholder="In Hours" name="ot"/>
                                </div>
                                <div className='col'>
                                    <label htmlFor='recom'>Recommendation</label>
                                    <input type="text" placeholder="Score" name='recom'/>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-primary" onClick={handleSubmit}>Save</button>
                    </div>
                    </div>
                </div>
            </div>
        </div>
        </Fragment>
    )
}