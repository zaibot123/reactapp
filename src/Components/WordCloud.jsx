import React, { useState } from 'react';
import { useEffect } from 'react';
import ReactWordcloud from 'react-wordcloud';





//   const MyComponent = () =>
//     <div> 
//       ...
//       <ReactWordcloud words={words} />
//       ...
//    </div>;

//   export default MyComponent;
 
 
export default function Wordcloud({DataUrl}) {
    let[data, setData]= useState(null);
    const words = [
        { text: 'told',    value: 64, },
        { text: 'mistake', value: 11, },
        { text: 'thought', value: 16, },
        { text: 'bad',     value: 17, }
      ];
    


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