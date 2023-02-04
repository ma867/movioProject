import { Component } from "react";
import { signUp } from "../../utilities/users-service";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Uploader } from "uploader"; 
import { UploadButton } from "react-uploader";

export default function SignUpForm({setUser, setVisible}) {
  const [image, setImage] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirm: "",
    description: "",
 
  });

  const [error, setError] = useState("");


  const navigate = useNavigate();

  const handleChange = (evt) => {
    setFormData({ ...formData, [evt.target.name]: evt.target.value });
    setError("");
  };

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
  

  const handleSubmit = async (evt) => {
    evt.preventDefault();
    try {
      const formDataCopy = { ...formData, image };
      delete formDataCopy.confirm;
      const user = await signUp(formDataCopy);
      setUser(user);
      navigate("/");
    } catch (error) {
      setError(
        "Sign up failed. Username and/or email address may already be in use."
      );
    }
  };

 
  const disable = formData.password !== formData.confirm;

return(
  <>


<div className="container-fluid ps-md-0">
          <div className="row g-0 align-items-center " >
            <div className="d-none d-md-flex col-md-4 col-lg-6 banner-image justify-content-center align-items-center" >
              <div className="container">
                <div className="row justify-content-center align-items-center">
                  <div className="col-md-9 col-lg-8 mx-auto " >
                    <div className="section-header text-center">
                      <h2 className="fw-bold display-3">All your favs in<span className="b-className-secondary"> one</span><br />place <span className="b-className-secondary">😊</span> <br /></h2><br />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-8 col-lg-6" >
              <div className="login d-flex align-items-center py-5">
                <div className="container">
                  <div className="row">
                    <div className="col-md-9 col-lg-8 mx-auto">
                      <h3 className="login-heading mb-4">Sign Up</h3>
                      <form autoComplete="off" onSubmit={handleSubmit}>
                        <div className="form-floating mb-3">
                 
                Name:<input className="form-control line mb-3"  type="text" name="name" value={formData.name} onChange={handleChange} required />
              Email: <input className="form-control line mb-3" type="email" name="email" value={formData.email} onChange={handleChange} required />
               Password:
                <input className="form-control line mb-3" type="password" name="password" value={formData.password} onChange={handleChange} required />
            Confirm:
                <input className="form-control line mb-3"  type="password" name="confirm" value={formData.confirm} onChange={handleChange} required />
                Tell Us About Yourself:<input className="form-control line mb-3"  type="text" name="description" value={formData.description} onChange={handleChange}/>

                {/* <button className="btn btn-primary btn-block" onClick={()=>{uploadFile()}}>Upload your file here..</button><br /><br /> */}


                <UploadButton uploader={uploader} options={options} onComplete={(files) => setImage(files.map((x) => x.fileUrl).join("\n"))} >
                  {({ onClick }) => ( <button className="btn btn-primary btn-block"  onClick={onClick}>Upload a Profile Photo</button> )}
               </UploadButton>
               <br />
               <br />
                <input className="btn btn-primary btn-block"  type="submit"  value="Submit" disabled={disable}/>
                          <div className="text-center">
                            <a  className="small" onClick={()=>{setVisible("login")}}>Have an account? Log In</a>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

  </>
)
}
