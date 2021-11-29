import Project from '@/components/Project'
import { ProjectType } from '@/types'
import React from 'react'

import project1 from '../images/project1.jpeg'
import project2 from '../images/project2.jpeg'
import project3 from '../images/project3.jpeg'

export default function Work(){

    const sample: ProjectType = {
        title: 'Odyssee',
        image: project1,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque nunc sed non accumsan amet egestas non vitae. Risus, lacus tincidunt.',
        tags: ['React', 'Node.js', 'Stripe API', 'Google Maps'],
        gotoLink: 'https://www.google.com',
        githubLink: 'https://github.com/justindi15'
    }

    const sample2: ProjectType = {
        title: 'Storagehotel',
        image: project2,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque nunc sed non accumsan amet egestas non vitae. Risus, lacus tincidunt.',
        tags: ['React', 'Node.js', 'Stripe API', 'Google Maps'],
        gotoLink: 'https://www.google.com',
        githubLink: 'https://github.com/justindi15'
    }

    const sample3: ProjectType = {
        title: 'Vancouver Startup Week',
        image: project3,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque nunc sed non accumsan amet egestas non vitae. Risus, lacus tincidunt.',
        tags: ['React', 'Node.js', 'Stripe API', 'Google Maps'],
        gotoLink: 'https://www.google.com',
        githubLink: 'https://github.com/justindi15'
    }

    const projects: ProjectType[] = [sample, sample2, sample3]

    return(
        <section className="max-w-7xl mx-auto flex flex-col">
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