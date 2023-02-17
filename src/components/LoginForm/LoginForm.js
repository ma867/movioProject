import { useState } from 'react'
import * as userService from '../../utilities/users-service'

export default function LoginForm({ setUser, setVisible }) {
  const [credentials, setCredentials] = useState({
    email: '',
    password: ''
  })
  const [error, setError] = useState('')

  const handleChange = (evt) => {
    setCredentials({ ...credentials, [evt.target.name]: evt.target.value })
    setError('')
  }

  const handleSubmit = async (evt) => {
    evt.preventDefault()
    try {
      const user = await userService.login(credentials)
      setUser(user)
    } catch (error) {
      setError(error.message)
    }
  }

  return (
    <>
      <div className='container-fluid ps-md-0'>
        <div className='row g-0'>
          <div className='d-none d-md-flex col-md-4 col-lg-6 banner-image justify-content-center align-items-center'>
            <div className='container'>
              <div className='row justify-content-center align-items-center'>
                <div className='col-md-9 col-lg-8 mx-auto '>
                  <div className='section-header text-center'>
                    <h2 className='fw-bold display-3'>Oh<span className='b-className-secondary'> hello! 👋 </span><br />We've missed you! </h2><br />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='col-md-8 col-lg-6'>
            <div className='login d-flex align-items-center py-5'>
              <div className='container'>
                <div className='row'>
                  <div className='col-md-9 col-lg-8 mx-auto'>
                    <h3 className='login-heading mb-4'>Login</h3>
                    <form autoComplete='off' onSubmit={handleSubmit}>
                      <div className='form-floating mb-3'>
                        Email:<input className=' form-control' type='email' name='email' value={credentials.email} onChange={handleChange} required />
                        Password: <input className=' form-control' type='password' name='password' value={credentials.password} onChange={handleChange} required />
                        <input className='btn btn-primary btn-block' type='submit' value='Login' />
                        <div className='text-center'>
                          <a onClick={() => { setVisible('signup') }} className='small'>Don't have an account? Sign up!</a>
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
