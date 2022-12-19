import React from 'react';
import useFetch from './useFetch';
import Nav from 'react-bootstrap/Nav';
import { useNavigate } from "react-router-dom";


export default function SearchHistory({ name }) {
    const navigate = useNavigate();
    const {result} = useFetch("http://localhost:5001/api/user/history/" + name);
    console.log(result)
    if (result) {

        return (
            <ul>
                <h1>Recent searches</h1>

                {result.map(x => <Nav.Link onClick={() => navigate("/movies/search/" + x.search)} ><li>{x['search']}</li> </Nav.Link>)}

            </ul>
        )
    }
}


