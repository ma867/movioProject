// AuthPage.js

import SignUpForm from '../../components/SignUpForm/SignUpForm'
import LoginForm from '../../components/LoginForm/LoginForm'
import NavBar from '../../components/NavBar/NavBar'
import { useState } from 'react'

export default function AuthPage (props) {
  const [visible, setVisible] = useState('login')
  return (
    <>

      <NavBar />
      <div id='login-container'>
        {

          visible === 'login'
            ? (

              <LoginForm setUser={props.setUser} setVisible={setVisible} />
              )
            : (

              <SignUpForm setUser={props.setUser} setVisible={setVisible} />
              )
        }

      </div>

    </>

  )
}
