import { useEffect } from "react"
import { useState } from "react"
import { Uploader } from "uploader"; 
import { UploadButton } from "react-uploader";
import UserReviews from "../../components/HomePageComponents/UserReviews"
import NavBar from '../../components/NavBar/NavBar'
import Banner from '../../components/HomePageComponents/Banner'
import EditorsPicks from "../../components/HomePageComponents/EditorsPicks"
export default function ProfilePage({user, setUser, getUser}){

    const [userReviews, setUserReviews] = useState([])
    const [allUserReviews, setAllUserReviews] = useState([])
    const [edit, setEdit]= useState(false)
    const [image, setImage] = useState("");
    const [updatedData, setUpdatedData] = useState({
      name: "",
      description: "",
    });

    const getUserReviews = async() =>{
        try{
            const response = await fetch(`/api/reviews/user/${user._id}`,{
                method:"GET",
                headers:{
                    "Content-Type": "application/json"
                }
            })
            const data = await response.json()
            setUserReviews(data)
        }
        catch(error){
            console.error(error)

        }
    }
    const getAllUserReviews = async() =>{
        try{
            const response = await fetch(`/api/reviews/user/unlimited/${user._id}`,{
                method:"GET",
                headers:{
                    "Content-Type": "application/json"
                }
            })
            const data = await response.json()
            setAllUserReviews(data)
        }
        catch(error){
            console.error(error)

        }
    }


    const updateUser = async (updatedData) => {
        try {
          const response = await fetch(`/api/users/${user._id}`, {
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({ ...updatedData })
          })
          const data = await response.json()
          setUser(data)
    
        }
        catch (error) {
          console.error(error)
    
        }
    
      }
     useEffect(()=>{
        getUserReviews()
        getAllUserReviews()
   
     }, [])

     useEffect(()=>{
        getUser()
     },[user])

   
     const uploader = Uploader({
       apiKey: "free" // Get production API keys from Upload.io
     });
   
     const options = { 
       multi: false, 
       maxFileCount: 1,   
       editor: {
       images: {
         crop: true,
         cropShape: "circ", // "rect" also supported.
         cropRatio: 1 / 1   // "1" is enforced for "circ".
       }
     } }
   
     const uploadFile = () => {
       uploader.open(options)
       .then((file) =>{ 
        file?  
         setImage(file[0].fileUrl)
         :
         setImage("")
       }
       );  
     }
     const handleChange = (evt) => {
        setUpdatedData({ ...updatedData, [evt.target.name]: evt.target.value });
      };
   
    
      const handleSubmit = async (evt) => {
        evt.preventDefault();
        try {
          const updatedDataCopy = { ...updatedData, image };
           updateUser(updatedDataCopy) 

        } catch (error) {
          console.error(error)
        }
      }




  
    return(
    <>
    <NavBar  />

<Banner title="Profile" description=""/>
<div className='body-container full-width'>
    
    <div id="outside-container-movie">  
    <div id="general-container" >
           
     


                  <div id="general-profile-image" style={{ backgroundImage: `url('${user.image}')` }}></div>
                  <div id="general-movie-info">



                 {user?<>   <div id="general-movie-title">
                      <h1>{user.name}</h1>
                      <h1>{userReviews.length}<span className='ten-rating'>/∞</span></h1>
                    </div>
                    <div id="general-movie-stats">
                      <h2>Joined {user.createdAt.slice(0,4)} </h2>
                    </div>
                    <br />
                    <h2>About Me</h2>

                    lorem ipsum
                    <br />
                    {/* <button onClick={()=>{setEdit(true)}}>Edit Profile</button> */}
                    </>
                    
                    :"nope"}
{/* 
                    {
                    edit?
                    (
                        <div id="review-form">
                        <form onSubmit={handleSubmit} >
                          <input className=" form-control line mb-3" type="text" name="name" onChange={handleChange} defaultValue={updatedData.title} />
                          <input className="form-control line mb-3" type="text" name="description" onChange={handleChange} defaultValue={updatedData.description} />
                          <UploadButton uploader={uploader} options={options} onComplete={(files) => setImage(files.map((x) => x.fileUrl).join("\n"))} >
                  {({ onClick }) => ( <button className="btn btn-primary btn-block"  onClick={onClick}>Upload a Profile Photo</button> )}
               </UploadButton>
                          <input className="btn btn-primary btn-block" type="submit" value="Update" />

                        </form>
                      </div>


                    ):
                    ""

                    } */}

                  </div>


          </div>
          <br /><br />
          <UserReviews userReviews={userReviews} page="profile" />
   <div id="reviews-container" >
            <h2>All Reviews</h2>
            {
    allUserReviews && allUserReviews.length?
            userReviews.map((userReview)=>{
                return(
                    <>
                    <br />
                    <div key={userReview._id} className="review">
  
                      <div id="left-side">
                        <h1>🔥 {userReview.rating}<span className='ten-rating'>/10</span></h1>
  
                      </div>
                      <div id="right-side">
                        <h5>{userReview.movieTitle}</h5>
                        <h6>"{userReview.title}"</h6>
                        <p>{userReview.description}</p>
  
                    
                      </div>
  
                    </div>
                     </>
                )
            })
    :
    <>
  <p>"You have yet to leave a Review. Checkout our editor's picks and get started!"</p>
  <EditorsPicks  page="profile" />
  </>
   }

    </div>
    <br /><br />
  
    </div>
    </div>


       

  
 
    
    
    </>
    
    )
}