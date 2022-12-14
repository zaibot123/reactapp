import {useEffect,useState} from "react";

export default function useFetch(url){
const [error,setError]=useState(null);
const [result,setResult]=useState(null);
const [loading,setLoading]=useState(null);

useEffect(() => {
    console.log(url)
    const fetchData = async () => {
    setLoading("true")
    fetch(url)
        .then((response) => response.json())
        .then((result) => {
          setResult(result)
        })
        .catch(error=>{
            setError(error);
        })
        .finally(() => {
            setLoading("false")
        } )  }
      fetchData()
    }, [])
return { result,loading,error }
}




    
