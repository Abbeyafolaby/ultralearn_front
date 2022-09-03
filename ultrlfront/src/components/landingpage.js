import Nav from "./Nav3"
import React, { Component } from 'react'
import { isAuthenticated } from '../auth'
import { Link } from 'react-router-dom'
import {Redirect} from 'react-router-dom'
import bgimage from "../assets/social-media-ads-27 2.png"




class Landingpage extends Component {
  constructor() {
    super()
    this.state = {
      email: ""
    }
  }
  styles = {
    div: {
        backgroundImage: `url(${bgimage})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        width: '100%',
        height: '100%'
    }
}



  
  
  render() {
    const { redirectToProfile} = this.state

    if (redirectToProfile) {
      return <Redirect to={`/users/${isAuthenticated().user.username}`}></Redirect>
    }
    return (
      <div>
        <Nav/>
        <div className="grid grid-cols-2">
            <div className="col-span-2 md:col-span-1">
            <div className="  bg-contain"style={{ backgroundImage:`url(${bgimage})` }}></div>

            </div>
            <div className="">


            </div>

        </div>
      </div>
    );
  }
}

export default Landingpage