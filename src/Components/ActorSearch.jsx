import React, { useState,useEffect } from "react";
import { useParams } from "react-router-dom";
import TitleList from "./TitleList";
import Spinner from 'react-bootstrap/Spinner';
import ActorList from "./ActorList";
import { useNavigate } from "react-router-dom";

export default function ActorSearch(){

    const { search } = useParams()
    const [status,setStatus]=useState("Loading")
    const [result,setResult]=useState(null)
    

    const fetchPage = async () => {
        setStatus("Loading");
        const response = await fetch("http://localhost:5001/api/actors/search/"+search)
        const newData = await response.json();
        setStatus("Done");
        setResult(newData);
      }
    
      useEffect(() => {
        fetchPage();
        
      }, []);

      
  if (status === "Done") {

    return (
      <>
        <ActorList  listOfResults={result} />
        </>
)
}
  else {

    return (
        <Spinner style={{ position: 'absolute', left: '50%', top: '50%', }}>
          <span className="visually-hidden">Loading...</span>
        </Spinner>
    )
  }
}

