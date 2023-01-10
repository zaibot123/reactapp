import React, { useEffect, useState, useContext } from "react";
import TitleList from "./TitleList";
import UsernameContext from "./UsernameContext";
import { useParams } from 'react-router-dom';
import Spinner from 'react-bootstrap/Spinner';





function BestSearch() {
  let { getUser, setAUser } = useContext(UsernameContext);
  let [status, setStatus] = useState('Loading')
  const { search } = useParams()
  let [alt, setAlt] = useState(null);
  


  const fetchPage = async () => {
    let url = "http://localhost:5001/api/movies?searchtype=best&username=" + getUser + "&title=" + search;
    setStatus("Loading");
    console.log(url);
    const response = await fetch(url)

    const Data = await response.json();
    setStatus("Done");
    setAlt(Data);
  }

  useEffect(() => {
    fetchPage();
  }, []);

  if (status === "Done") {

   

    return (
      <>
        <TitleList listOfResults={alt} />

      </>

    )

  } else {
    return (
      <Spinner style={{ position: 'absolute', left: '50%', top: '50%', }}>
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    )
  }
}
export default BestSearch;