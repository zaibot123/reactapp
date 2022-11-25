import { useState,useEffect } from 'react';
import './App.css';
import TitleList from'./TitleList';
import 'bootstrap/dist/css/bootstrap.min.css';
import dataJson from './data.json'


function App() {

  let [titles,setTitleList] =useState(dataJson['items'].map(title=>title['titleName']));
  let data= dataJson['items']
  // useEffect(() => {
  //   const fetchData = async () => {
  //     const response = await fetch(`http://localhost:5001/api/movies?searchtype=simple&title=warrior`);
  //     const newData = await response.json();
  //     console.log(newData)
  //   };
  // fetchData();
  //});
  function handleDelete(titleInput){  
    console.log(titleInput)
    const titlesList= titles.filter(title=>title!==titleInput);
    setTitleList(titlesList);
  }

  return (
    <div className="root">
     <TitleList name={titles} handleClick={handleDelete} allinfo={data}/>
    </div>
  );
}

export default App;
