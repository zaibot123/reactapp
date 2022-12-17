import React from "react";
import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav';
import Route, { Navigate } from 'react-router-dom';
import { useNavigate, useParams } from "react-router-dom";
import Actor from "./Actor";
import { useState } from "react";
import { useEffect } from "react";


const ActorSingleView = ({actor}) =>{
    const { titleId } = useParams()

    useEffect(() => {
        const url="http://localhost:5001/api/actor/"+titleId;
    
        const fetchData = async () => {
          const response = await fetch(url);
          const Data = await response.json();
          console.log(Data)
          setTitle(Data[0]['titleName'])
          setPoster(Data[0]['poster'])
          setPlot(Data[0]['titlePlot'])

        };
        fetchData();
      },[]);




return (
      
<Actor all={actor}></Actor>

    )
}
export default ActorSingleView;