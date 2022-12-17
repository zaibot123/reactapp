import React from 'react';
import { MDBCol, MDBContainer, MDBRow, MDBCard, MDBCardText, MDBCardBody, MDBCardImage, MDBTypography, MDBIcon } from 'mdb-react-ui-kit';
import ListWithPosterFetch from './ListWithPosterFetch';
import useFetch from './useFetch';
import { useState, useEffect} from 'react';
import {useParams} from "react-router-dom";
import PosterCard from './PosterCard';
import PosterCardList from './PosterCardList';
import TitleList from './TitleList';
import MovieList from './MovieList';
import MovieBigPoster from './MovieBigPoster';
import Movie from './MovieWithRating';

//CHECK FOR BOOKMARKS OG RATING. Den kan ikke vise profil uden dem, nu.
export default function UserProfile() {

  let [username, setUsername]=useState(null)
  let [email, setEmail]=useState(null)
  let [photo, setPhoto]=useState(null)
  let [bio, setBio]=useState(null)
  let [poster, setPoster]=useState(null)
  let [movieTitle, setMovieTitle]=useState(null)
  let[listOfBookmarks, setListOfBookmarks]=useState("tom")
  let[listOfRatings, setListOfRatings]=useState("tom")
  const {userName} = useParams()
  const [data,setData]=useState(null) 
  const {result,loading,error} = useFetch("http://localhost:5001/api/user/bookmarks/"+userName);

  useEffect(() => {
    const fetchData = async () => { 

      const ratingResponse = await fetch("http://localhost:5001/api/user/"+userName);
      const ratingData = await ratingResponse.json();  
      setListOfRatings(ratingData['ratingList'])

   

      const bookmarkResponse = await fetch("http://localhost:5001/api/user/bookmarks/"+userName);
      const bookmarkData = await bookmarkResponse.json();
      setPoster(bookmarkData[0].poster)
      setMovieTitle(bookmarkData['titleName'])
      setListOfBookmarks(bookmarkData)


      const userResponse = await fetch("http://localhost:5001/api/user/"+userName);
      const userData = await userResponse.json();  
      setUsername(userData['userName'])
      setBio(userData['bio'])
      setEmail(userData['email'])
      setPhoto(userData['photo'])

    };
    
    fetchData();
    
  },[username]);


 //Lave flere if statements/returns hvor vi tjekker om bookmarks/ratings er tom, og returnere 
  
  return (
    
    <section className="vh-100" style={{ backgroundColor: '#f4f5f7' }}>
      <div className="list-title">
    <h1>{username}'s profile</h1>
</div>
      <MDBContainer className="py-5 h-100">
        <MDBRow className="justify-content-center align-items-center h-10" style={{position: 'absolute', left:'10%', top: '26%',}}>
          <MDBCol lg="6" className="mb-4 mb-lg-0">
            <MDBCard className="mb-3" style={{ borderRadius: '.5rem' }}>
              <MDBRow className="g-0">
                <MDBCol md="4" className="gradient-custom text-center text-white"
                  style={{ borderTopLeftRadius: '.5rem', borderBottomLeftRadius: '.5rem' }}>
                  <MDBCardImage src={photo}
                    alt="Avatar" className="my-5" style={{ width: '80px' }} fluid />
                  <MDBTypography tag="h5">{username}</MDBTypography>
                  <MDBCardText>Web Designer</MDBCardText>
                  <MDBIcon far icon="edit mb-5" />
                </MDBCol>
                <MDBCol md="8">
                  <MDBCardBody className="p-4">
                    <MDBTypography tag="h6">{username}</MDBTypography>
                    <hr className="mt-0 mb-4" />
                    <MDBRow className="pt-1">
                      <MDBCol size="6" className="mb-3">
                        <MDBTypography tag="h6">Email</MDBTypography>
                        <MDBCardText className="text-muted">{email}</MDBCardText>
                      </MDBCol>
                    
                    </MDBRow>
                  
                  
                    <MDBRow className="pt-1">
                      <MDBCol size="6" className="mb-3">
                        <MDBTypography tag="h6">Bio</MDBTypography>
                        <MDBCardText className="text-muted">{bio}</MDBCardText>
                      </MDBCol>
                    </MDBRow>
                  </MDBCardBody>
                </MDBCol>
              </MDBRow>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>


      <MDBContainer className="py-5 h-100">
        <MDBRow className="justify-content-right align-items-center h-10">
          <MDBCol lg="1" xl="7">

        <ListWithPosterFetch urlToFetch={"http://localhost:5001/api/user/bookmarks/"+userName} title={"Bookmarks for "+userName}
                                              width={395} heigth={420}></ListWithPosterFetch>

        <ListWithPosterFetch urlToFetch={"http://localhost:5001/api/user/"+userName+"/ratings"} title={"Ratings for "+userName}
                                              width={395} heigth={420}></ListWithPosterFetch>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </section>

  );
}