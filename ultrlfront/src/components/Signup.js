import React, { Component } from 'react'
import { signup } from '../auth'
import { Link } from 'react-router-dom'
// import image3 from '../assets/image 3.png'
// import logo from '../assets/newLogo.png'
 import '../assets/style.css'
import { Authsidebar } from './authsidebar'
import { Errormsg } from './errormsg'

class Signup extends Component {
  constructor() {
    super()
    this.state = {
      fullName: "",
      username: "",
      email: "",
      password: "",
      error: "",
      open: false,
      loading: false,
      toggler: "password",
      accept: false
    }
  }
  handleChange = name => event => {
    this.setState({ error: "" })
    this.setState({ open: false })
    this.setState({ [name]: event.target.value })
  }

  toggle = () => {
    if (this.state.toggler === "password") {
      this.setState({ toggler: "text" })
    } else {
      this.setState({ toggler: "password" })
    }
  }

  clickSubmit = event => {
    if (this.state.accept) {
      event.preventDefault()
      window.scrollTo(0, 0)
      this.setState({ loading: true })
      const { fullName, username, email, password } = this.state
      username.trim()
      const user = {
        fullName,
        username,
        email,
        password
      }
      //console.log(user)
      signup(user)
        .then(data => {
          if (data.error) this.setState({ error: data.error, loading: false })
          else this.setState({
            error: "",
            fullName: "",
            username: "",
            email: "",
            password: "",
            open: true,
            loading: false
          })
        })
    } else {
      event.preventDefault()
      window.scrollTo(0, 0)
      this.setState({ error: "Please accept our Terms and Conditions to Sign up" })
    }
  }




  render() {
    const { fullName, username, error, email, password, open, loading, toggler } = this.state
    return (
      <div className="h-full grid grid-cols-2">
          <Authsidebar />
          <div className='col-span-2 md:col-span-1 md:h-full flex flex-col' style={{ backgroundColor: "#f8f9fa" }}>
            <div className='my-auto p-6'>

            <h2 className='font-medium fw-bolder leading-tight text-4xl mt-0 mb-2'>Register</h2>
            <Errormsg error={error} style={{ display: error ? "" : "none" }} />
              
      

           {loading ?  <div class="flex items-center justify-center space-x-2 animate-bounce">
    <div class="w-8 h-8 bg-purple-300 rounded-full"></div>
    <div class="w-8 h-8 bg-purple-600 rounded-full"></div>
    <div class="w-8 h-8 bg-purple-900 rounded-full"></div>
</div> : ""}
              

              <div style={{ display: open ? "" : "none" }}>

              <div class="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative" role="alert">
                <span class="block sm:inline">New account successfully created. Please <Link style={{color: "blue"}} to='/signin'>Sign in</Link></span>
                <span class="absolute top-0 bottom-0 right-0 px-4 py-3">
                    <svg class="fill-current h-6 w-6 text-green-500" role="button" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><title>Close</title><path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z" /></svg>
                </span>
            </div>
 
                </div>
              <div className="p-5 mt-5">
              
                <form className="mt-7">

                <div className='grid grid-cols-2'>
                  <div className="my-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" for="username">
                      Full Name
                    </label>
                    <input className="shadow appearance-none border rounded w-half py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      onChange={this.handleChange("fullName")}
                      type="text" id="fullName" value={fullName} placeholder="Full Name" />
                  </div>


                  <div className="my-4 ">
                    <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
                      Username
                    </label>
                    <input className="shadow appearance-none border rounded w-half py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      onChange={this.handleChange("username")}
                      type="text" id="username" value={username} placeholder="Your username" />
                  </div>
                </div>

                  <div className="my-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" for="username">
                      Email
                    </label>
                    <input className="shadow appearance-none border rounded w-half py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      onChange={this.handleChange("email")}
                      type="email" id="username" value={email} placeholder="Email" />
                  </div>

                  <div className="my-6">
                    <label className="block text-gray-700 text-sm font-bold mb-2" for="password">
                      Password
                    </label>
                    <input
                      onChange={this.handleChange("password")}
                      type={toggler}
                      className="shadow appearance-none border rounded w-half py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password"
                      value={password}
                      placeholder="6+ characters & numbers"
                      />
                    <div className="mt-0 mb-5">
                      <button type="button" style={{ textDecoration: "none", color: "#888", fontSize: "12px" }} className="link_button" onClick={this.toggle}>
                        {toggler === "password" ? <span >Show</span> : <span>Hide</span>} Password.
                      </button>
                    
                    </div>

                  <div className="">
                       <input className="form-check-input mr-2" type="checkbox" value="" id="flexCheckChecked"></input>
                      <label className="form-check-label fonts15" for="flexCheckChecked" >
                        Remember me
                      </label>
                   </div>
                   <div className="form-group mb-2">
                <div className="">
                    <input onClick={() => {
                      if (this.state.accept === false) {
                        this.setState({ accept: true })
                      } else {
                        this.setState({ accept: false })
                      }
                    }} onChange={() => this.setState({ error: "" })} className="form-check-input mr-2" type="checkbox" value="" id="defaultCheck1" />
                    <label className='fonts15'>
                    Creating an account means you accept our <Link to='/terms' style={{ color: "#5F0F40" }} className="fw-bold">Terms and Conditions</Link>
                    </label>
                  
                </div>
                </div>
                  </div>


                  <div className="flex items-center mt-6 mb-3 justify-between">
                    <button  className="sgnbut text-white font-bold py-2 px-4 rounded  " onClick={this.clickSubmit} type="button">
                      Sign Up
                    </button> 
                  </div>

                  <div className="fonts15 mb-3">
                    Already have an account?&nbsp;&nbsp;
                    <Link to="/signin" style={{ color: "#5F0F40" }} className="fw-bold">Signin</Link>
                  </div>


 
                </form>

                 
               </div>



            </div>
          </div>
        </div>
    );
  }
}

export default Signup