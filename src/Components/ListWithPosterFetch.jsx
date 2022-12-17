import useFetch from "./useFetch";
import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import ListSubheader from '@mui/material/ListSubheader';
import Spinner from 'react-bootstrap/Spinner';
import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';
import { Nav } from "react-bootstrap";
import { ListItemSecondaryAction } from "@mui/material";
import { MDBCol, MDBContainer, MDBRow, MDBCard, MDBCardText, MDBCardBody, MDBCardImage, MDBTypography, MDBIcon } from 'mdb-react-ui-kit';



export default function ListOfPostersFetch({urlToFetch, title, width, height}){

function handleClick(id){
}
const {result,loading,error} = useFetch(urlToFetch);
if (loading!=="false") {
  return(
   <Spinner style={{position: 'absolute', left:'50%', top: '50%',}}>
       <span className="visually-hidden">Loading...</span>
   </Spinner>
   )
  }
else{
return (
  <MDBCard className="mb-3" style={{ borderRadius: '.5rem' }}>
  <ImageList sx={{ width: width, height: height }}>
  <ImageListItem key="Subheader" cols={2}>
    <ListSubheader component="div">{title}</ListSubheader>
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
        subtitle={item.rating}
        actionIcon={

          <IconButton 
            sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
            aria-label={`info about ${item.title}`}
          >
            <InfoIcon />
          </IconButton>
        }
      />
    </ImageListItem>
  ))}
</ImageList>
</MDBCard>
);
}
}
