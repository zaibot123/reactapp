// import React from 'react';
// import { MDBCol, MDBContainer, MDBRow, MDBCard, MDBCardText, MDBCardBody, MDBCardImage, MDBTypography, MDBIcon } from 'mdb-react-ui-kit';


// import { useState, useEffect} from 'react';
// import {useParams} from "react-router-dom";
// import PosterCard from './PosterCard';
// import PosterCardList from './PosterCardList';
// import TitleList from './TitleList';
// import MovieList from './MovieList';
// import MovieBigPoster from './MovieBigPoster';
// import Movie from './MovieWithRating';


// export default function UserProfile() {

//   let [username, setUsername]=useState(null)
//   let [email, setEmail]=useState(null)
//   let [photo, setPhoto]=useState(null)
//   let [bio, setBio]=useState(null)
//   let [poster, setPoster]=useState(null)
//   let [movieTitle, setMovieTitle]=useState(null)
//   let[listOfBookmarks, setListOfBookmarks]=useState("tom")
//   let[listOfRatings, setListOfRatings]=useState("tom")
//   const {userName} = useParams()

//   useEffect(() => {
//     const fetchData = async () => { 

//       const ratingResponse = await fetch("http://localhost:5001/api/user/"+userName);
//       const ratingData = await ratingResponse.json();  
//       setListOfRatings(ratingData['ratingList'])

   

//       const bookmarkResponse = await fetch("http://localhost:5001/api/user/bookmarks/"+userName);
//       const bookmarkData = await bookmarkResponse.json();
//       setPoster(bookmarkData[0].poster)
//       setMovieTitle(bookmarkData['titleName'])
//       setListOfBookmarks(bookmarkData)


//       const userResponse = await fetch("http://localhost:5001/api/user/"+userName);
//       const userData = await userResponse.json();  
//       setUsername(userData['userName'])
//       setBio(userData['bio'])
//       setEmail(userData['email'])
//       setPhoto(userData['photo'])


    

//     };




//     fetchData();
    
//   },[username]);


 
  
//   return (
//     <section className="vh-100" style={{ backgroundColor: '#f4f5f7' }}>
//       <MDBContainer className="py-5 h-100">
//         <MDBRow className="justify-content-center align-items-center h-10">
//           <MDBCol lg="6" className="mb-4 mb-lg-0">
//             <MDBCard className="mb-3" style={{ borderRadius: '.5rem' }}>
//               <MDBRow className="g-0">
//                 <MDBCol md="4" className="gradient-custom text-center text-white"
//                   style={{ borderTopLeftRadius: '.5rem', borderBottomLeftRadius: '.5rem' }}>
//                   <MDBCardImage src={photo}
//                     alt="Avatar" className="my-5" style={{ width: '80px' }} fluid />
//                   <MDBTypography tag="h5">Marie Horwitz</MDBTypography>
//                   <MDBCardText>Web Designer</MDBCardText>
//                   <MDBIcon far icon="edit mb-5" />
//                 </MDBCol>
//                 <MDBCol md="8">
//                   <MDBCardBody className="p-4">
//                     <MDBTypography tag="h6">Information</MDBTypography>
//                     <hr className="mt-0 mb-4" />
//                     <MDBRow className="pt-1">
//                       <MDBCol size="6" className="mb-3">
//                         <MDBTypography tag="h6">Email</MDBTypography>
//                         <MDBCardText className="text-muted">info@example.com</MDBCardText>
//                       </MDBCol>
//                       <MDBCol size="6" className="mb-3">
//                         <MDBTypography tag="h6">Phone</MDBTypography>
//                         <MDBCardText className="text-muted">123 456 789</MDBCardText>
//                       </MDBCol>
//                     </MDBRow>

//                     <MDBTypography tag="h6">Information</MDBTypography>
//                     <hr className="mt-0 mb-4" />
//                     <MDBRow className="pt-1">
//                       <MDBCol size="6" className="mb-3">
//                         <MDBTypography tag="h6">Email</MDBTypography>
//                         <MDBCardText className="text-muted">info@example.com</MDBCardText>
//                       </MDBCol>
//                       <MDBCol size="6" className="mb-3">
//                         <MDBTypography tag="h6">Phone</MDBTypography>
//                         <MDBCardText className="text-muted">123 456 789</MDBCardText>
//                       </MDBCol>
//                     </MDBRow>

//                     <div className="d-flex justify-content-start">
//                       <a href="#!"><MDBIcon fab icon="facebook me-3" size="lg" /></a>
//                       <a href="#!"><MDBIcon fab icon="twitter me-3" size="lg" /></a>
//                       <a href="#!"><MDBIcon fab icon="instagram me-3" size="lg" /></a>
//                     </div>
//                   </MDBCardBody>
//                 </MDBCol>
//               </MDBRow>
//             </MDBCard>
//           </MDBCol>
//         </MDBRow>
//       </MDBContainer>
//     </section>

//   );
// }









import ListWithPoster from './ListWithPosterFetch';
import React from 'react';
import { MDBCol, MDBContainer, MDBRow, MDBCard, MDBCardText, MDBCardBody, MDBCardImage, MDBBtn, MDBTypography } from 'mdb-react-ui-kit';
import { useState, useEffect} from 'react';
import {useParams} from "react-router-dom";
import PosterCard from './PosterCard';
import PosterCardList from './PosterCardList';
import TitleList from './TitleList';
import ListWithPosterFetch from './ListWithPosterFetch';
import useFetch from './useFetch';


export default function UserProfile() {
  const [data,setData]=useState(null)
  const {userName} = useParams()

    const {result,loading,error} = useFetch("http://localhost:5001/api/user/bookmarks/"+userName);

   console.log(result)

    // {poster: result.map(x=>x.poster),
    //  lastName:"Doe"};

    //  console.log(person)


  
  return (
      <MDBContainer className="py-5 h-100">
        <MDBRow className="justify-content-left align-items-center h-100">
          <MDBCol lg="1" xl="7">
            <MDBCard>
        <ListWithPosterFetch urlToFetch={"http://localhost:5001/api/user/bookmarks/"+userName} title={"Bookmarks for "+userName}
                                              width={300} heigth={400}></ListWithPosterFetch>
            </MDBCard>
            <MDBCard>
        <ListWithPosterFetch urlToFetch={"http://localhost:5001/api/user/"+userName+"/ratings"} title={"Ratings for "+userName}
                                              width={300} heigth={400}></ListWithPosterFetch>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
  );
}