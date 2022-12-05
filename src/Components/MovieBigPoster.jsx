import React from "react";
import { useState } from "react";
import { useEffect } from "react";



function MovieBigPoster({MovieID}){
    let [Title,setTitle] =useState(null)
    let [Status,setStatus]=useState("loading")
    let [Poster,setPoster]=useState(null)
    let [Plot,setPlot]=useState(null)
  
    useEffect(() => {
        const url="http://localhost:5001/api/movies/"+MovieID;
        console.log(url)
        const fetchData = async () => {
          const response = await fetch(url);
          const newData = await response.json();
          console.log(newData)
          setTitle(newData[0]['titleName'])
          setPoster(newData[0]['poster'])
          setPlot(newData[0]['titlePlot'])
        };
        fetchData();
      },[]);

return( 
<div>
<div className="list-title">
    <h1>{Title}</h1>
</div>
<img src={Poster} alt="alternatetext"/>
<p>{Plot}</p>
</div>
)
}
export default MovieBigPoster;