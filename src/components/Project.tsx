import React from 'react'

import githubIcon from '../images/github-icon.svg'
import gotoIcon from '../images/goto-icon.svg'
import { ProjectType } from '@/types'

type ProjectParams = {
    project: ProjectType,
    isLast?: boolean
}

export default function Project({ project, isLast }: ProjectParams){

    return(
        <div className="flex my-10 flex-wrap">
            <div className="max-w-xl m-4 flex">
                <img src={project.image}/>
            </div>
            <div className={`flex flex-col flex-1 m-4 justify-end ${!isLast && 'xl:justify-start'}`}>
                <h1 className="text-2xl my-5">{project.title}</h1>
                <p className="text-gray-400 font-light text-xl">{project.description}</p>
                <div className="flex mt-3 text-sm flex-wrap">
                    {project.tags.map((tag)=>(
                        <span className="mr-10">{tag}</span>
                    ))}
                </div>
                <div className="flex space-x-8 mt-10">
                        <a target="_blank" href={project.gotoLink}><img src={gotoIcon}/></a>
                        <a target="_blank" href={project.githubLink}><img src={githubIcon}/></a>
                </div>
            </div>
        </div>
    )
}