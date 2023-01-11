import { Component } from 'react'
import { signUp } from '../../utilities/users-service'
import { Link } from 'react-router-dom'

export default class SignUpForm extends Component {
    state = {
        name: '',
        email: '',
        password: '',
        confirm: '',
        error: ''
    }

    handleSubmit = async (evt) => {
      evt.preventDefault()
      try {
        const formData = { ...this.state }
        delete formData.error
        delete formData.confirm
        const user = await signUp(formData)
        this.props.setUser(user)
      } catch (error) {
        this.setState({ error: 'Sign Up Failed' })
      }
    }

    handleChange = (evt) => {
        this.setState({
            [evt.target.name]: evt.target.value
        })
    }

    render() {
        const disable = this.state.password !== this.state.confirm;
        return (
<>
<div className="container-fluid ps-md-0">
          <div className="row g-0 align-items-center " >
            <div className="d-none d-md-flex col-md-4 col-lg-6 banner-image justify-content-center align-items-center" >
              <div className="container">
                <div className="row justify-content-center align-items-center">
                  <div className="col-md-9 col-lg-8 mx-auto " >
                    <div className="section-header text-center">
                      <h2 className="fw-bold display-3 text-white">All your favs in<span className="b-className-secondary"> ONE</span><br />place <span className="b-className-secondary">😊</span> <br /></h2><br />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-8 col-lg-6" style={{backgroundColor:"white"}}>
              <div className="login d-flex align-items-center py-5">
                <div className="container">
                  <div className="row">
                    <div className="col-md-9 col-lg-8 mx-auto">
                      <h3 className="login-heading mb-4">Sign Up</h3>
                      <form autoComplete="off" onSubmit={this.handleSubmit}>
                        <div className="form-floating mb-3">
                 
                Name:<input className="form-control line mb-3"  type="text" name="name" value={this.state.name} onChange={this.handleChange} required />
              Email: <input className="form-control line mb-3" type="email" name="email" value={this.state.email} onChange={this.handleChange} required />
               Password:
                <input className="form-control line mb-3" type="password" name="password" value={this.state.password} onChange={this.handleChange} required />
            Confirm:
                <input className="form-control line mb-3"  type="password" name="confirm" value={this.state.confirm} onChange={this.handleChange} required />
                <input className="btn btn-primary btn-block"  type="submit"  value="Submit" disabled={disable}/>
                          <div className="text-center">
                            <a className="small" href="/user/login">Have an account? Log In</a>
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
        );
      }
}