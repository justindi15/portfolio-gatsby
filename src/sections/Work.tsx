import Project from '@/components/Project'
import { ProjectType } from '@/types'
import React from 'react'

import project1 from '../images/project1.png'
import project2 from '../images/project2.png'
import project3 from '../images/project3.png'

export default function Work(){

    const odyssee: ProjectType = {
        title: 'Odyssee',
        image: project1,
        description: 'A digital mural of data visualizations about people’s emotions and routines based on the recorded experiences of individuals around the world during the pandemic.',
        tags: ['HTML', 'CSS', 'JavaScript', 'D3.js'],
        gotoLink: 'http://odyssee.community/gallery.html',
        githubLink: 'https://github.com/piabocanegra/odyssee'
    }

    const storagehotel: ProjectType = {
        title: 'Storagehotel',
        image: project2,
        description: 'A web application with a checkout flow for booking temporary storage for students and a dashboard to digitally manage the items being stored.',
        tags: ['Angular', 'ExpressJS', 'MongoDB', 'Stripe API', 'Google Maps API'],
        gotoLink: 'https://app.storagehotel.ca/checkout',
        githubLink: 'https://github.com/justindi15/storagehotel'
    }

    const lulurestocks: ProjectType = {
        title: 'Lulurestocks',
        image: project3,
        description: 'A web application that allows users to receive Email/SMS notifications when their favorite Lululemon items are back in stock. It involves a scheduled CRON job that periodically checks if an item is back in stock.',
        tags: ['NextJS', 'TailwindCSS', 'Firebase', 'SendGrid', 'Twilio'],
        gotoLink: 'https://www.lulurestocks.com',
        githubLink: 'https://github.com/justindi15/lulu-restocks'
    }

    const projects: ProjectType[] = [odyssee, storagehotel, lulurestocks]

    return(
        <section id="work" className="max-w-7xl mt-36 mx-auto flex flex-col">
            <div className="px-4">
                <h1 className="text-gray-400">EXPLORE MY PROJECTS</h1>
            </div>
            <div className="grid grid-cols-1 xl:grid-cols-2 xl:gap-x-40">
                {
                    projects.map((project, index)=> {
                        const position = index + 1
                        const isLast = position === projects.length
                        const isOdd = (position % 2) === 1

                        if(isLast && isOdd){
                            return (
                                <div className="col-span-1 xl:col-span-2">
                                    <Project project={project} isLast={true}/>
                                </div>
                            )
                        }else{
                            return (
                                <Project project={project} isLast={false}/>
                            )
                        }
                    })
                }
            </div>
        </section>
    )
}