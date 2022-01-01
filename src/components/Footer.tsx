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
                            <a href="#experience" className="text-white text-2xl hover:text-gray-500">{'Experience'}</a>
                            <a href="#work" className="hover:text-gray-500 text-white text-2xl">{'Work'}</a>
                        </div>

                        <div className="my-20 md:my-40">
                            <h1 className="text-white text-2xl">{'Vancouver based developer creating aesthetic digital experiences'}</h1>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 mt-20 md:mt-0 md:grid-cols-2">
                    <div className="flex text-gray-700 text-sm font-bold mt-3 flex-wrap">
                                <a className="hover:text-gray-500 mr-10" target="_blank" href="https://github.com/justindi15">{'GITHUB'}</a>
                                <a className="hover:text-gray-500 mr-10" target="_blank" href="https://www.linkedin.com/in/justindi/">{'LINKEDIN'}</a>
                                <a className="hover:text-gray-500 mr-10" target="_blank" href="https://www.instagram.com/jjustindi/">{'INSTAGRAM'}</a>
                                <a className="hover:text-gray-500 mr-10" target="_blank" href="https://open.spotify.com/user/12159194926?si=UqsEo_0HSF62Vo06YUxslA">{'SPOTIFY'}</a>
                    </div>
                    <div className="grid grid-cols-2">
                        <h1 className="text-white flex items-end mt-20 md:mt-0 md:order-1">© 2021</h1>
                        <h1 className="text-white flex items-end mt-20 md:mt-0 md:order-2">Built by Justin Di</h1>
                    </div>
                </div>

            </div>
        </div>
    )
}