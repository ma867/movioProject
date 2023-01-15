// AuthPage.js

import SignUpForm from "../../components/SignUpForm/SignUpForm"
import LoginForm from "../../components/LoginForm/LoginForm"
import NavBar from "../../components/NavBar/NavBar"
import Footer from "../../components/Footer/Footer"
import { useState } from "react"

export default function AuthPage(props){

    const [visible, setVisible] = useState("login")
    return(
        <main>


            {

                visible==="login"?
                (<>
                <NavBar/>
                <LoginForm setUser={props.setUser} />
                <p onClick={()=>{setVisible("signup")}}>Sign up?</p>

                
                </>):
                (<>
                 <NavBar/>
                <SignUpForm setUser={props.setUser} />
                <p onClick={()=>{setVisible("login")}}>Login?</p>

                </>)
            }
            

        </main>
    )
}