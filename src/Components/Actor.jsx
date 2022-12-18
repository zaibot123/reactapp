import React from "react";
import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav';
import Route, { Navigate } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import Wordcloud from "./WordCloud";
import useFetch from "./useFetch";
import { useState,useEffect, setStatus } from "react";



const Actor = ({all}) =>{
  console.log(all)
  let actorURL = "/actor/"+all.id
  const navigate = useNavigate();
  let[status, setStatus]=useState("Loading");
  let[characters, setCharacters]=useState(null);
  let[knownfor, setKnownfor]=useState(null);
  let[professions, setProfessions]=useState(null);
  
  const age =  () =>{
    if (all.birthYear!=="    " && all.deathYear!=="    ")
    {
    return "died in year" + all.deathYear + "at age "+ all.deathYear-all.birthYear;
    }
    else if(all.birthYear!=="    " && all.deathYear==="    ")
    {
    return 2022-all.birthYear
    }
    else return "unknown";      
  }

  const fetchCharacters = async () => {
    
    const response = await fetch("http://localhost:5001/api/actors/characters/"+all.id)
    const charactersData = await response.json();
   
    setCharacters(charactersData);
  }

  const fetchKnownFor = async () => {
   
    const response = await fetch("http://localhost:5001/api/actors/knownfor/"+all.id)
    const knownforData = await response.json();
    
    setKnownfor(knownforData);
  }

  const fetchProfessions = async () => {
   
    const response = await fetch("http://localhost:5001/api/actors/profession/"+all.id)
    const professionsData = await response.json();
    
    setProfessions(professionsData);
  }

  useEffect(() => {
    setStatus("Loading");
    fetchCharacters();
    fetchKnownFor();
    fetchProfessions();
    setStatus("Done");
    
  }, []);

return (
      
<div className="card">
<Nav.Link  onClick={()=>navigate(actorURL)}>
    <div className="title">
    {all.name} 
    </div>
  <div className="card-body">
  <img className="card-img-top" src={"https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"}/>
    <p className="card-text"> {"Age: "+age(all)}</p>
    <p className="card-text"> {"Rating: "+all.profRating}</p>
    <p className="card-text"> {"Characters: "+characters}</p>
    <p className="card-text"> {"Best known for: "+knownfor}</p>
    <p className="card-text"> {"Professions: "+professions}</p>
  
    

  </div>


  </Nav.Link>
</div>

    )
}
export default Actor;