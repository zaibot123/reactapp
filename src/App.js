import { useState,useEffect } from 'react';
import './App.css';
import TitleList from'./TitleList';
import 'bootstrap/dist/css/bootstrap.min.css';
import dataJson from './data.json'


function App() {
  let [items,setTitleList] =useState(dataJson['items']);

  useEffect(() => {
    fetch('http://localhost:5001/api/movies/tt3913192/similar')
    .then(response => response.json())
    .then(json => console.log(json))
    }, []);

  function handleDelete(titleInput){  
    const titlesList= items.filter(title=>title.titleName!==titleInput);
    setTitleList(titlesList);
  }

  
 
  return (
   
    <div className="root">
     <TitleList handleClick={handleDelete} all={items}/>
    </div>
  );
}

export default App;
