import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import avatar from '../assets/avatar.png'
import {Image} from 'cloudinary-react'

class ProfileTabs extends Component {
  render() {
    const {following, followers} = this.props
    return (
      <div>
        <div className='row'>
          <div className='col-md-4'>
            <h3 className='text-primary'>Followers</h3>
            <hr></hr>
            {followers.map((person, i) => (
              <div key={i}>
             
                  <div>
                    <Link to={`/ul/${person.username}`}>
                      {person.imgId ? <Image cloudName="favoursoar" publicId={person.imgId} style={{width: '40px', height: '40px', objectFit: 'cover', borderRadius: '50%'}}/> :
          <img src={avatar} className="card-img-top" alt='profile' style={{width: '40px', height: '40px', objectFit: 'cover', borderRadius: '50%'}}/>
          }
                      <div className='d-inline-block mx-2'>
                        <p className='lead'>{person.username}</p>
                      </div>
                    </Link>
          
                  </div>
              </div>)
            )}
          </div>

          <div className='col-md-4'>
            <h3 className='text-primary'>Following</h3>
            <hr></hr>
            {following.map((person, i) => (
              <div key={i}>
               
                  <div>
                    <Link to={`/ul/${person.username}`}>
                      {person.imgId ? <Image cloudName="favoursoar" publicId={person.imgId} style={{width: '40px', height: '40px', objectFit: 'cover', borderRadius: '50%'}}/> :
          <img src={avatar} className="card-img-top" alt='profile' style={{width: '40px', height: '40px', objectFit: 'cover', borderRadius: '50%'}}/>
          }
                      <div className='d-inline-block mx-2'>
                        <p className='lead'>{person.username}</p>
                      </div>
                    </Link>
                  
              
                </div>
              </div>)
            )}
          </div>

          <div className='col-md-4'>
            <h3 className='text-primary'>Posts</h3>
            <hr></hr>
          </div>
          
        </div>
      </div>
    )
  }
}

export default ProfileTabs