
import Movie from "./Movie.jsx";
import { useState, useEffect} from 'react';
import {useParams}  from "react-router-dom";
import PosterCard from './PosterCard';

const PosterCardList =  () =>{

    const {userName} = useParams()
    let [poster, setPoster]=useState(null)

    useEffect(() => {

        
        const fetchData = async () => { 
          const response1 = await fetch("http://localhost:5001/api/user/bookmarks/"+userName);
          const newData1 = await response1.json();

            newData1.forEach(element => {
            setPoster(element['poster'])  
          });
        
        };

        fetchData();
     
      },[userName]);


    return (
     <>

        {poster}
    </>
    )
    }
    export default PosterCardList;