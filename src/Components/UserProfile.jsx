import React from 'react';
import { MDBCol, MDBContainer, MDBRow, MDBCard, MDBCardText, MDBCardBody, MDBCardImage, MDBTypography, MDBIcon } from 'mdb-react-ui-kit';
import ListWithPosterFetch from './ListWithPosterFetch';
import { useState, useEffect, useContext } from 'react';
import { useParams } from "react-router-dom";
import SearchHistory from './SearchHistory';
import Spinner from 'react-bootstrap/Spinner';
import UsernameContext from './UsernameContext';




//CHECK FOR BOOKMARKS OG RATING. Den kan ikke vise profil uden dem, nu. 
export default function UserProfile() {


  let {getUser} = useContext(UsernameContext);
  let [username, setUsername] = useState(null)
  let [email, setEmail] = useState(null)
  let [photo, setPhoto] = useState(null)
  let [bio, setBio] = useState(null)
  let [status, setStatus] = useState("loading")
  const { userName } = useParams()



  useEffect(() => {
    const fetchData = async () => {

      const userResponse = await fetch("http://cit.ruc.dk/cit03/api/user/" + userName);
      const userData = await userResponse.json();
      setUsername(userData['userName'])
      setBio(userData['bio'])
      setEmail(userData['email'])
      setPhoto(userData['photo'])
    };

    setStatus("loading");
    fetchData().then(setStatus("done"));


  }, [userName]);


  if (status === "done") {
    return (

      <MDBContainer className="justify-content-center align-items-center" fluid>
        <section className="vh-100" style={{ backgroundColor: '#f4f5f7' }}>
          <div className="list-title">
            <h1>{username}'s profile</h1>
          </div>


          <MDBRow className="justify-content-center align-items-center h-10" style={{ position: 'absolute', left: '25%', top: '26%', }} fluid>
            <MDBCol lg="6" className="mb-4 mb-lg-0">
              <MDBCard className="mb-3" style={{ borderRadius: '.5rem' }}>
                <MDBRow className="g-0">
                  <MDBCol md="4" className="gradient-custom text-center text-white"
                    style={{ borderTopLeftRadius: '.5rem', borderBottomLeftRadius: '.5rem' }}>
                    <MDBCardImage src={photo}
                      alt="Avatar" className="my-5" style={{ width: '80px' }} fluid />
                    <MDBTypography tag="h5">{username}</MDBTypography>

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


          <MDBRow className="justify-content-right align-items-center h-10">
            <>

              <MDBCol lg="1" xl="7">

                <ListWithPosterFetch urlToFetch={"http://cit.ruc.dk/cit03/api/user/bookmarks/" + userName} title={"Bookmarks for " + userName}
                  width={395} heigth={420}></ListWithPosterFetch>
              </MDBCol>


              <MDBCol lg="1" xl="7">
                <ListWithPosterFetch urlToFetch={"http://cit.ruc.dk/cit03/api/user/" + userName + "/ratings"} title={"Ratings for " + userName}
                  width={395} heigth={420}></ListWithPosterFetch>
              </MDBCol>
              <div style={{ position: 'absolute', left: '70%', top: '30%', }} >
                <SearchHistory name={getUser} />
              </div>

            </>
          </MDBRow>

        </section>
      </MDBContainer>

    );
  }
  else {
    return (
      <Spinner style={{ position: 'absolute', left: '50%', top: '50%', }}>
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    )
  }
} 
