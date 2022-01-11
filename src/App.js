import React, {useState} from 'react';
import './App.css';
import MainModal from './MainModal';
import MainTable from './MainTable';

function App() {
   const [open, setOpen] = useState(false);
   const [modalSyle, setModalStyle] = useState({});

   const showModal = () => {
    if(open === true) {
      setModalStyle({display: "none"});
    }
    else {
      setModalStyle({display: "block"});
    }
    setOpen(!open);
   }

  return (
    <div className="App">
      <MainTable/>
      <MainModal/>
    </div>
  );
}

export default App;
