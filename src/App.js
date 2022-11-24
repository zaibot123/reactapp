import { useState } from 'react';
import './App.css';
import TitleList from'./TitleList';


function App() {
  
  let [name,setName] =useState(['rumst', 'jeppe', 'jgom','blom']);

  function handleDelete(nameInput){
    const newNames= name.filter(name=>name!==nameInput);
    setName(newNames);
  }

  return (
    <div className="root">
     <TitleList name={name} handleClick={handleDelete}/>
    </div>
  );
}

export default App;
