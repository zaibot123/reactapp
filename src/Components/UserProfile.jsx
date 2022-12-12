import React from 'react';
import { MDBCol, MDBContainer, MDBRow, MDBCard, MDBCardText, MDBCardBody, MDBCardImage, MDBTypography, MDBIcon } from 'mdb-react-ui-kit';


import { useState, useEffect} from 'react';
import {useParams} from "react-router-dom";
import PosterCard from './PosterCard';
import PosterCardList from './PosterCardList';
import TitleList from './TitleList';
import MovieList from './MovieList';
import MovieBigPoster from './MovieBigPoster';
import Movie from './Movie';


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


 
  
  return (
    <section className="vh-100" style={{ backgroundColor: '#f4f5f7' }}>
      <MDBContainer className="py-5 h-100">
        <MDBRow className="justify-content-center align-items-center h-10">
          <MDBCol lg="6" className="mb-4 mb-lg-0">
            <MDBCard className="mb-3" style={{ borderRadius: '.5rem' }}>
              <MDBRow className="g-0">
                <MDBCol md="4" className="gradient-custom text-center text-white"
                  style={{ borderTopLeftRadius: '.5rem', borderBottomLeftRadius: '.5rem' }}>
                  <MDBCardImage src={photo}
                    alt="Avatar" className="my-5" style={{ width: '80px' }} fluid />
                  <MDBTypography tag="h5">Marie Horwitz</MDBTypography>
                  <MDBCardText>Web Designer</MDBCardText>
                  <MDBIcon far icon="edit mb-5" />
                </MDBCol>
                <MDBCol md="8">
                  <MDBCardBody className="p-4">
                    <MDBTypography tag="h6">Information</MDBTypography>
                    <hr className="mt-0 mb-4" />
                    <MDBRow className="pt-1">
                      <MDBCol size="6" className="mb-3">
                        <MDBTypography tag="h6">Email</MDBTypography>
                        <MDBCardText className="text-muted">info@example.com</MDBCardText>
                      </MDBCol>
                      <MDBCol size="6" className="mb-3">
                        <MDBTypography tag="h6">Phone</MDBTypography>
                        <MDBCardText className="text-muted">123 456 789</MDBCardText>
                      </MDBCol>
                    </MDBRow>

                    <MDBTypography tag="h6">Information</MDBTypography>
                    <hr className="mt-0 mb-4" />
                    <MDBRow className="pt-1">
                      <MDBCol size="6" className="mb-3">
                        <MDBTypography tag="h6">Email</MDBTypography>
                        <MDBCardText className="text-muted">info@example.com</MDBCardText>
                      </MDBCol>
                      <MDBCol size="6" className="mb-3">
                        <MDBTypography tag="h6">Phone</MDBTypography>
                        <MDBCardText className="text-muted">123 456 789</MDBCardText>
                      </MDBCol>
                    </MDBRow>

                    <div className="d-flex justify-content-start">
                      <a href="#!"><MDBIcon fab icon="facebook me-3" size="lg" /></a>
                      <a href="#!"><MDBIcon fab icon="twitter me-3" size="lg" /></a>
                      <a href="#!"><MDBIcon fab icon="instagram me-3" size="lg" /></a>
                    </div>
                  </MDBCardBody>
                </MDBCol>
              </MDBRow>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </section>

  );
}










// import React from 'react';
// import { MDBCol, MDBContainer, MDBRow, MDBCard, MDBCardText, MDBCardBody, MDBCardImage, MDBBtn, MDBTypography } from 'mdb-react-ui-kit';
// import { useState, useEffect} from 'react';
// import {useParams} from "react-router-dom";
// import PosterCard from './PosterCard';
// import PosterCardList from './PosterCardList';
// import TitleList from './TitleList';


// export default function UserProfile() {


//   let [username, setUsername]=useState(null)
//   let [email, setEmail]=useState(null)
//   let [photo, setPhoto]=useState(null)
//   let [bio, setBio]=useState(null)
//   let [poster, setPoster]=useState(null)
//   let [movieTitle, setMovieTitle]=useState(null)
//   const {userName} = useParams()

//   useEffect(() => {
//     const fetchData = async () => { 

//       const response1 = await fetch("http://localhost:5001/api/user/bookmarks/"+userName);
//       const newData1 = await response1.json();
//       setPoster(newData1[0].poster)
//       console.log(newData1[0].poster)
//       setMovieTitle(newData1['titleName'])

//       const response = await fetch("http://localhost:5001/api/user/"+userName);
//       const newData = await response.json();  
//       setUsername(newData['userName'])
//       setBio(newData['bio'])
//       setEmail(newData['email'])
//       setPhoto(newData['photo'])

//     };

//     fetchData();
 
//   },[username]);

//   console.log(poster+"Dette er title")
  
//   return (
    
//     <div className="gradient-custom-2" style={{ backgroundColor: '#9de2ff' }}>
     
//       <MDBContainer className="py-5 h-100">
//         <MDBRow className="justify-content-center align-items-center h-100">
//           <MDBCol lg="9" xl="7">
//             <MDBCard>
//               <div className="rounded-top text-white d-flex flex-row" style={{ backgroundColor: '#000', height: '200px' }}>
//                 <div className="ms-4 mt-5 d-flex flex-column" style={{ width: '150px' }}>
//                   <MDBCardImage src={photo}
//                     alt="Generic placeholder image" className="mt-4 mb-2 img-thumbnail" fluid style={{ width: '150px', zIndex: '1' }} />
//                   <MDBBtn outline color="light" style={{height: '36px', overflow: 'visible'}}>
//                     Edit profile
//                   </MDBBtn>
//                 </div>
//                 <div className="ms-3" style={{ marginTop: '130px' }}>
//                   <MDBTypography tag="h5">{username}</MDBTypography>
//                   <MDBCardText>New York</MDBCardText>
//                 </div>

//               </div>
           
//               <div className="p-4 text-black" style={{ backgroundColor: '#f8f9fa' }}>
//                 <div className="d-flex justify-content-end text-center py-1">
//                   <div>
//                     <MDBCardText className="mb-1 h5">1234</MDBCardText>
//                     <MDBCardText className="small text-muted mb-0">Numner of bookmarks</MDBCardText>
//                   </div>
//                   <div className="px-3">
//                     <MDBCardText className="mb-1 h5">1026</MDBCardText>
//                     <MDBCardText className="small text-muted mb-0">Followers</MDBCardText>
//                   </div>
//                   <div>
//                     <MDBCardText className="mb-1 h5">478</MDBCardText>
//                     <MDBCardText className="small text-muted mb-0">Following</MDBCardText>
//                   </div>
//                 </div>
//               </div>
//               <MDBCardBody className="text-black p-4">
//                 <div className="mb-5">
//                   <p className="lead fw-normal mb-1">About</p>
//                   <div className="p-4" style={{ backgroundColor: '#f8f9fa' }}>
//                     <MDBCardText className="font-italic mb-1">{bio}</MDBCardText>
//                   </div>
//                 </div>
//                 <div className="d-flex justify-content-between align-items-center mb-4">
//                   <MDBCardText className="lead fw-normal mb-0">Recent photos</MDBCardText>
//                   <MDBCardText className="mb-0"><a href={`/bookmarks/${username}`} className="text-muted">Show all</a></MDBCardText>
//                 </div>
//                 <MDBRow>
//                   <MDBCol className="mb-2">
//                     <MDBCardImage src={poster}
//                       alt="image 1" className="w-100 rounded-3" />
//                   </MDBCol>
//                   <MDBCol className="mb-2">
//                     <MDBCardImage src="https://mdbcdn.b-cdn.net/img/Photos/Lightbox/Original/img%20(107).webp"
//                       alt="image 1" className="w-100 rounded-3" />
//                   </MDBCol>
//                 </MDBRow>
//                 <MDBRow className="g-2">
//                   <MDBCol className="mb-2">
//                     <MDBCardImage src="https://mdbcdn.b-cdn.net/img/Photos/Lightbox/Original/img%20(108).webp"
//                       alt="image 1" className="w-100 rounded-3" />
//                   </MDBCol>
//                   <MDBCol className="mb-2">
//                     <MDBCardImage src="https://mdbcdn.b-cdn.net/img/Photos/Lightbox/Original/img%20(114).webp"
//                       alt="image 1" className="w-100 rounded-3" />
//                   </MDBCol>
                
//                 </MDBRow>
              
//               </MDBCardBody>
//             </MDBCard>
//           </MDBCol>
//         </MDBRow>
//       </MDBContainer>
//     </div>
//   );
// }