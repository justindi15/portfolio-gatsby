import React from 'react'

import about from '../images/about.jpeg'

export default function About(){
    return(
        <div className="max-w-7xl mx-auto px-4 py-36 grid grid-cols-1 lg:grid-cols-3">
            <div className="lg:col-span-2">
                <img 
                    src={about}
                    alt="about"
                    width="100%"
                />
            </div>
            <div className="pl-0 pt-10 lg:pt-0 lg:pl-10 text-left">
                <h1 className="text-2xl text-gray-900">People of Studio Lenzig:{'\n'}Leander</h1>
                <p className="text-gray-400 mt-4 text-sm">
                    {'At Studio Lenzing we’re all about people. This is why we want you to get to know us better. Today, we’d love for you to meet Leander.'}
                </p>
            </div>
        </div>
    )
}