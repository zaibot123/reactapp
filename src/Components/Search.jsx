import React, {useEffect, useState, useContext} from "react";
import TitleList from "./TitleList";
import UsernameContext from "./UsernameContext";
import {useParams} from 'react-router-dom';


function Search () {
    let [result,setResult]=useState(null)
    let [status, setStatus]=useState('Loading')
    const {search} = useParams()
    const username = useContext(UsernameContext);


    useEffect(() => {
     const fetchData = async () => { 
     const response = await fetch("http://localhost:5001/api/movies?searchtype=simple&username=Troels&title="+search+"&page=1&pageSize=10");
     const newData = await response.json();  
     setResult(newData['items'])
     setStatus('Done')
     
   };
   fetchData();
 },[result, username]);

 if (status==="Done") {
   return<TitleList listOfResults={result}/>
 } else {
   return <h1>Loading</h1>;
 }
}
export default Search;