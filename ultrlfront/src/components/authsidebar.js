import React from 'react'
import { Logotext } from './logotext'
import signupimg from '../assets/signup.png'

export const Authsidebar = () => {
    return (
        <div className='md:flex md:flex-col col-span-2 md:col-span-1 h-fit md:h-full p-4'>

            <Logotext />
            <div className='my-auto'>
                <div className='hidden md:block'>
                    <img src={signupimg} className="mx-auto " alt="Student" />
                    <div style={{ color: "#5F0F40", margin: "1.5em", fontSize: "20px" }} className="text-center "> Exploring Growth Conversations</div>

                </div>
            </div>
        </div>)
}
