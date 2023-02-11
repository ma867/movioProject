import { useEffect } from "react"
import { useState } from "react"
import { Uploader } from "uploader"; 
import { UploadButton } from "react-uploader";
import UserReviews from "../../components/HomePageComponents/UserReviews"
import NavBar from '../../components/NavBar/NavBar'
import Banner from '../../components/HomePageComponents/Banner'
import ProfileBanner from '../../components/ProfilePageComponents/Banner';
import ReviewComments from "../../components/ProfilePageComponents/ReviewComments";
import EditorsPicks from "../../components/HomePageComponents/EditorsPicks"
export default function ProfilePage({userId, originalUser}){

    const [userReviews, setUserReviews] = useState([])
    const [allUserReviews, setAllUserReviews] = useState([])
    const [edit, setEdit]= useState(false)
    const [image, setImage] = useState(originalUser.image);
    const [updatedData, setUpdatedData] = useState({
      name: originalUser.name,
      description: originalUser.description,
    });
    const [user, setUser] = useState([])

    const getUser = async() =>{
      try{
          const response = await fetch(`/api/users/${userId}`,{
              method:"GET",
              headers:{
                  "Content-Type": "application/json"
              }
          })
          const data = await response.json()
          setUser(data)
      }
      catch(error){
          console.error(error)

      }
  }
    const getUserReviews = async() =>{
        try{
            const response = await fetch(`/api/reviews/user/${userId}`,{
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
            const response = await fetch(`/api/reviews/user/unlimited/${userId}`,{
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
          const response = await fetch(`/api/users/${userId}`, {
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
      getUser()
        getUserReviews()
        getAllUserReviews()
   
     }, [])

  

   
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
         cropRatio: 1 / 1   
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
           setEdit(false)

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



                {
                 user && !edit ?
                 <ProfileBanner user={user} userReviews={userReviews} setEdit={setEdit}/>

                    :""} 

                    {
                    edit?
                    (
                        <div id="review-form">
                        <form onSubmit={handleSubmit} >
                          Profile Name: <input className=" form-control line mb-3" type="text" name="name" onChange={handleChange} defaultValue={updatedData.title} />
                          Description: <input className="form-control line mb-3" type="text" name="description" onChange={handleChange} defaultValue={updatedData.description} />
                          <br />
                          <UploadButton uploader={uploader} options={options} onComplete={(files) => setImage(files.map((x) => x.fileUrl).join("\n"))} >
                  {({ onClick }) => ( <button className="btn btn-primary btn-block"  onClick={onClick}>Upload a Profile Photo</button> )}
               </UploadButton><br /><br /> 
                          <input className="btn btn-primary btn-block" type="submit" value="Update" />
                          <button className="btn btn-danger btn-block"  onClick={()=>{setEdit(false)}}>Cancel</button>

                        </form>
                      </div>


                    ):
                    <>
                    <button className="btn btn-primary btn-block"  onClick={()=>{setEdit(true)}}>Edit Profile</button>
                    </>

                    }

                  </div>


          </div>
          <br /><br />
          <UserReviews userReviews={userReviews} page="profile" />
   <div id="reviews-container" >
            <h2>All Reviews</h2>
            {
    allUserReviews && allUserReviews.length?
    <ReviewComments userReviews={userReviews} allUserReviews={allUserReviews}/>
  

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