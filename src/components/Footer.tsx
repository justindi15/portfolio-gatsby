import React from 'react'
import logo from '../images/logo-white.svg'

export default function Footer(){
    return(
        <div className="bg-black">
            <div className="max-w-7xl mx-auto px-4 pt-20 pb-10">
                <div className="grid grid-cols-1 md:grid-cols-2">
                    <img
                        className="block w-auto"
                        src={logo}
                        alt="logo"
                    />
                    <div className="mt-10 md:mt-0">
                        <div className="grid grid-cols-2">
                            <h1 className="text-white text-2xl">{'Experience'}</h1>
                            <h1 className="text-white text-2xl">{'Work'}</h1>
                        </div>

                        <div className="my-20 md:my-40">
                            <h1 className="text-white text-2xl">{'Vancouver based developer creating aesthetic digital experiences'}</h1>
                            <div className="text-gray-700 text-sm font-bold space-x-10 mt-3">
                                <a>{'LINKEDIN'}</a>
                                <a>{'INSTAGRAM'}</a>
                                <a>{'SPOTIFY'}</a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-2 mt-20 md:mt-0 md:grid-cols-4">
                    <div className="text-white flex items-end md:order-3">
                                <div>
                                    <p className="text-white">{'Home Office'}</p>
                                    <p className="text-gray-600">{'6071 Dunmsuir Cres.'}</p>
                                    <p className="text-gray-600">{'Richmond, B.C'}</p>
                                    <p className="text-gray-600">{'Canada'}</p>
                                </div>
                            </div>
                    <div className="text-white flex items-end md:order-4">
                                <div>
                                    <p className="text-gray-600">(778)-898-5477</p>
                                    <p className="text-white mt-1">{'hello@justindi.dev'}</p>
                                    <p className="text-white mt-5">{'05:23:05 local time'}</p>
                                </div>
                    </div>
                    <h1 className="text-white flex items-end mt-20 md:mt-0 md:order-1">© 2021</h1>
                    <h1 className="text-white flex items-end mt-20 md:mt-0 md:order-2">Built by Justin Di</h1>
                </div>

            </div>
        </div>
    )
}