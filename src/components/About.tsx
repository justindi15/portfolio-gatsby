import React from 'react'

import about from '../images/about.jpeg'

export default function About(){
    return(
        <div id="about" className="max-w-7xl mx-auto px-4 py-36 grid grid-cols-1 lg:grid-cols-3">
            <div className="lg:col-span-2">
                <img 
                    src={about}
                    alt="about"
                    width="100%"
                />
            </div>
            <div className="pl-0 pt-10 lg:pt-0 lg:pl-10 text-left">
                <h1 className="text-2xl text-gray-900">A Brief Introduction</h1>
                <p className="text-gray-400 mt-4 text-sm whitespace-pre-wrap">
                    {'I am a results-oriented professional with experience in team and customer-focused environments. I have interests in Software Development, Entrepreneurship, Business Analysis, Branding, and Design.\n\nI currently work at Invoice Simple as a Mobile Engineer where I develop and maintain an app that serves over 2 million users worldwide.'}
                </p>
            </div>
        </div>
    )
}