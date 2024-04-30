import React, { useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggle } from '../reducers/ModalSlice';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan, faPenToSquare, faPlusSquare } from '@fortawesome/free-solid-svg-icons';import { toggleEdit } from '../reducers/EditModalSlice';
import { addRow, deleteRow, saveRow } from '../reducers/NewRowSlice';
import { v4 as uuidv4 } from 'uuid';

export default function CRUDApp() {
    const newRow = useSelector((state) => state.newRow);
    const isOpen = useSelector((state) => state.modal.value);
    const editIsOpen = useSelector((state) => state.editModal.value);
    const dispatch = useDispatch();

    // Hooks for all row values
    const [rowNumber, setRowNumber] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [age, setage] = useState('');
    const [overTime, setOverTime] = useState('');
    const [fullTime, setFullTime] = useState('');
    const [recommendation, setRecommendation] = useState('');
    const [error, setError] = useState("");

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

   const getRowTotal = () => {
    let calcTotal = 0;

    // Age points calculation
    if (age <= 18) {
        calcTotal += 10;
    } else if (age < 30) {
        calcTotal += 20;
    } else if (age <= 60) {
        calcTotal += 30;
    }

    // Full time points calculation
    calcTotal += fullTime === 'Yes' ? 20 : 10;

    // Overtime points calculation
    calcTotal += overTime < 5 ? 10 : 20;

    // Recommendation points calculation
    if (recommendation <= 100) {
        calcTotal += Math.floor((recommendation / 10) * 3);
    }

    // Sets ref to calculated total score
    totalRef.current = calcTotal;
};

  const handleChange = (e) => {
    setFirstName(e.target.value);
    setError('');
  }


  const handleEditSubmit = () => {
    if(firstName === ''){
      setError('Cannot be blank')
    }
    else{
    dispatch(toggleEdit());
     // Adds input data to row
    dispatch(saveRow({
        rowNum: rowNumber,
        fName : firstName,
        lName : lastName, 
        age : age, 
        fTime : fullTime,
        oTime : overTime,
        recomm: recommendation,
        total : totalRef.current,
    }));  
    getRowTotal();
    }
}

   // Handles adding user data to table
   const handleSubmit = () => {
       if(firstName === ''){
        setError('Cannot be blank')
       }
       else{
        dispatch(toggle());
        getRowTotal();

        dispatch(addRow({
           fName : firstName,
           lName : lastName, 
           age : age, 
           fTime : fullTime,
           oTime : overTime,
           recomm: recommendation,
           total : totalRef.current,
       }));  
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
                setage(value.age);
                setFullTime(value.fTime);
                setOverTime(value.oTime);
                setRecommendation(value.recomm);
            }
            rowCounter += 1;
        }
    }

    // Delete button in row
    const deleteIcon = () => {return (<FontAwesomeIcon icon={faTrashCan} style={{color: "red"}} onClick={openDeleteHandler} className="cursor-pointer"/>)};

    // Edit button in row
    const editIcon = () => {return(<FontAwesomeIcon icon={faPenToSquare} style={{color: "gray"}} onClick={openEditHandler} className="cursor-pointer"/>)}

    return (
  <div className={`bg-gray-800 ${isOpen || editIsOpen ? 'min-h-screen' : 'h-screen'} md:flex md:justify-center`}>
    {/* Edit modal */}
    <div className={`z-60 inset-0 overflow-y-auto ${editIsOpen ? 'block' : 'hidden'}`}>
      <div className="fixed inset-0 bg-gray-500 opacity-75"></div>
        <div className="bg-white rounded-lg p-5 w-80 z-60 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 transform-all">
            <p className="text-xl justify-center text-gray-700 my-1 lg:text-2xl">Employee Evaluation</p>
            <form onSubmit={handleEditSubmit}>
              <div className="mb-4">
                <label htmlFor="firstName" className="block text-gray-700 text-sm font-bold mb-2">First Name*</label>
                <input id="firstName" type="text" placeholder="First Name" 
                className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 bg-white leading-tight focus:outline-none focus:shadow-outline ${error ? 'border-red-700' : 'border-none'}`}  
                value={firstName} onChange={handleChange} />
                <p className="text-red-500 text-xs italic">{error}</p>
              </div>
              <div className="mb-4">
                <label htmlFor="lastName" className="block text-gray-700 text-sm font-bold mb-2">Last Name</label>
                <input id="lastName" type="text" placeholder="Last Name" 
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 bg-white leading-tight focus:outline-none focus:shadow-outline" value={lastName} onChange={(e) => setLastName(e.target.value)} />
              </div>
              <div className="mb-4">
                <label htmlFor="age" className="block text-gray-700 text-sm font-bold mb-2">Age</label>
                <input id="age" type="number" placeholder="In Years" 
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 bg-white leading-tight focus:outline-none focus:shadow-outline" 
                value={age} onChange={(e) => {
                  // Ensure the entered value does not exceed 90
                  const newValue = Math.min(parseInt(e.target.value), 90);
                  setage(newValue);
                }}  />
              </div>
              <div className="mb-4">
                <label htmlFor="fullTime" className="block text-gray-700 text-sm font-bold mb-2">Full-Time</label>
                <select id="fullTime" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 bg-white leading-tight focus:outline-none focus:shadow-outline" value={fullTime} onChange={(e) => setFullTime(e.target.value)}>
                  <option value='...'>...</option>
                  <option value='Yes'>Yes</option>
                  <option value='No'>No</option>
                </select>
              </div>
              <div className="mb-4">
                <label htmlFor="overTime" className="block text-gray-700 text-sm font-bold mb-2">Overtime</label>
                <input id="overTime" type="number" placeholder="In Hours" 
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 bg-white leading-tight focus:outline-none focus:shadow-outline" 
                value={overTime} onChange={(e) => {
                  // Ensure the entered value does not exceed 40
                  const newValue = Math.min(parseInt(e.target.value), 40);
                  setOverTime(newValue);
                }}  />
              </div>
              <div className="mb-4">
                <label htmlFor="recommendation" className="block text-gray-700 text-sm font-bold mb-2">Recommendation</label>
                <input id="recommendation" type="number" placeholder="Score" 
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 bg-white leading-tight focus:outline-none focus:shadow-outline" 
                value={recommendation} onChange={(e) => {
                  // Ensure the entered value does not exceed 100
                  const newValue = Math.min(parseInt(e.target.value), 100);
                  setRecommendation(newValue);
                }} />
              </div>
            </form>
          <div className="px-6 flex flex-row-reverse">
            <button type="button" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-2" onClick={handleEditSubmit}>Save</button>
            <button type="button" className="bg-gray-200 text-gray-700 font-bold py-2 px-4 rounded" onClick={editModalHandler}>Cancel</button>
          </div>
        </div>
      </div>

      {/* Modal for submission */}
      <div className={`z-60 inset-0 overflow-y-auto ${isOpen ? 'block' : 'hidden'}`}>
        <div className="fixed inset-0 bg-gray-500 opacity-75"></div>
        <div className="bg-white rounded-lg p-5 w-80 z-60 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 transform-all">
            <p className="text-xl justify-center text-gray-700 my-1 lg:text-2xl">Employee Evaluation</p>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="firstName" className="block text-gray-700 text-sm font-bold mb-2">First Name*</label>
                <input id="firstName" type="text" placeholder="First Name" 
                className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 bg-white leading-tight focus:outline-none focus:shadow-outline ${error ? 'border-red-700' : 'border-none'}`} 
                value={firstName} onChange={handleChange} />
                <p className="text-red-500 text-xs italic">{error}</p>
              </div>
              <div className="mb-4">
                <label htmlFor="lastName" className="block text-gray-700 text-sm font-bold mb-2">Last Name</label>
                <input id="lastName" type="text" placeholder="Last Name" 
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 bg-white leading-tight focus:outline-none focus:shadow-outline" value={lastName} onChange={(e) => setLastName(e.target.value)} />
              </div>
              <div className="mb-4">
                <label htmlFor="age" className="block text-gray-700 text-sm font-bold mb-2">Age</label>
                <input id="age" type="number" placeholder="In Years" 
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 bg-white leading-tight focus:outline-none focus:shadow-outline" 
                value={age} onChange={(e) => {
                // Ensure the entered value does not exceed 150
                const newValue = Math.min(parseInt(e.target.value), 150);
                setage(newValue) 
                }} />
              </div>
              <div className="mb-4">
                <label htmlFor="fullTime" className="block text-gray-700 text-sm font-bold mb-2">Full-Time</label>
                <select id="fullTime" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 bg-white leading-tight focus:outline-none focus:shadow-outline" value={fullTime} onChange={(e) => setFullTime(e.target.value)}>
                  <option value='...'>...</option>
                  <option value='Yes'>Yes</option>
                  <option value='No'>No</option>
                </select>
              </div>
              <div className="mb-4">
                <label htmlFor="overTime" className="block text-gray-700 text-sm font-bold mb-2">Overtime</label>
                <input id="overTime" type="number" placeholder="In Hours" 
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 bg-white leading-tight focus:outline-none focus:shadow-outline" 
                value={overTime} onChange={(e) => {
                  // Ensure the entered value does not exceed 40
                  const newValue = Math.min(parseInt(e.target.value), 40);
                  setOverTime(newValue);
                }}  />
              </div>
              <div className="mb-4">
                <label htmlFor="recommendation" className="block text-gray-700 text-sm font-bold mb-2">Recommendation</label>
                <input id="recommendation" type="number" placeholder="Score" 
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 bg-white leading-tight focus:outline-none focus:shadow-outline" 
                value={recommendation} onChange={(e) => {
                  // Ensure the entered value does not exceed 100
                  const newValue = Math.min(parseInt(e.target.value), 100);
                  setRecommendation(newValue);
                }} />
              </div>
            </form>
          <div className="px-6 flex flex-row-reverse">
            <button type="button" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-2" onClick={handleSubmit}>Save</button>
            <button type="button" className="bg-gray-200 text-gray-700 font-bold py-2 px-4 rounded" onClick={modalHandler}>Cancel</button>
          </div>
        </div>
    </div>
    
    {/* Table with data */}
    <div className="justify-center items-center py-20 bg-gray-800">
      <div className="justify-center container mx-auto px-4">
          <h1 className="text-3xl mb-6 font-bold text-center text-white">Employee Evaluation</h1>
          <div className="overflow-x-auto">
              <table className="table-auto border">
                  <thead>
                      <tr>
                          <th className="border px-4 text-white">#</th>
                          <th className="border px-4 text-white">First Name</th>
                          <th className="border px-4 text-white">Last Name</th>
                          <th className="border px-4 text-white">Age</th>
                          <th className="border px-4 text-white">Full-Time</th>
                          <th className="border px-4 text-white">Overtime</th>
                          <th className="border px-4 text-white">Recommendation</th>
                          <th className="border px-4 text-white">Total</th>
                          <th className="border px-4 text-white">Edit</th>
                          <th className="border px-4 text-white">Delete</th>
                      </tr>
                  </thead>
                  <tbody>
                      {newRow.map((row, index) => (
                          <tr key={uuidv4()}>
                              <td className="border px-4 text-white">{index + 1}</td>
                              <td className="border px-4 text-white">{row.fName}</td>
                              <td className="border px-4 text-white">{row.lName}</td>
                              <td className="border px-4 text-white">{row.age}</td>
                              <td className="border px-4 text-white">{row.fTime}</td>
                              <td className="border px-4 text-white">{row.oTime}</td>
                              <td className="border px-4 text-white">{row.recomm}</td>
                              <td className="border px-4 text-white">{row.total}</td>
                              <td className="border px-4 text-white">{editIcon()}</td>
                              <td className="border px-4 text-white">{deleteIcon()}</td>
                          </tr>
                      ))}
                  </tbody>
              </table>
          </div>
          <FontAwesomeIcon icon={faPlusSquare} style={{color: "green"}} className="w-8 h-8 rounded-lg my-1 cursor-pointer" onClick={modalHandler}/>
      </div>
    </div>
  </div>
  )
}