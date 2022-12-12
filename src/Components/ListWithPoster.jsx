import useFetch from "./useFetch";
import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import ListSubheader from '@mui/material/ListSubheader';
import Spinner from 'react-bootstrap/Spinner';



export default function ListOfPosters({listOfURL}){
const {result,loading,error} = useFetch("http://localhost:5001/api/movies/tt5040224/similar");
if (loading!=="false") {
  return(
   <Spinner style={{position: 'absolute', left:'50%', top: '50%',}}>
       <span className="visually-hidden">Loading...</span>
   </Spinner>
   )
  }
else{
return (
  <ImageList sx={{ width: 500, height: 450 }}>
  <ImageListItem key="Subheader" cols={2}>
    <ListSubheader component="div">December</ListSubheader>
  </ImageListItem>
  {result.map((item) => (
    <ImageListItem key={item.poster}>
      <img
        src={`${item.poster}?w=248&fit=crop&auto=format`}
        srcSet={`${item.poster}?w=248&fit=crop&auto=format&dpr=2 2x`}
        alt={item.titleName}
        loading="lazy"
      />
      <ImageListItemBar
        title={item.titleName}
        subtitle={item.plot}
      />
    </ImageListItem>
  ))}
</ImageList>
);
}
}
