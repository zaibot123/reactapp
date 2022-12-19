import React, { useState } from 'react';
import { useEffect } from 'react';
import ReactWordcloud from 'react-wordcloud';
 
export default function Wordcloud({DataUrl}) {
    let[data, setData]= useState(null);

    useEffect(() => {
          
          const fetchData = async () => 
          {
          const response = await fetch(DataUrl);
          const Data = await response.json();
          setData(Data)
          };

          fetchData();
      },[]);

  return <ReactWordcloud words={data} size={[400,490]}/>
}