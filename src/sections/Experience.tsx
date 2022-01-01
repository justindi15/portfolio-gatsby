import React, { useState } from 'react'

type Job = {
    company: string;
    title: string;
    date: string;
    description: string;
}

export default function Experience(){

    const EXPERIENCES: Job[]  = [
        {
            company: 'Invoice Simple',
            title: 'Mobile Engineer',
            date: 'DEC 2020 - PRESENT',
            description: "Develop and maintain codebases and CI/CD pipelines for our React Native Application.\n\nImproved Mobile E2E test suites success rate from 30% to 80% and reduced test duration by 50% on CircleCI by converting our test framework to Detox and Jest.\n\nMaintained a weekly cadence of mobile app releases on Google Play Store and Apple App store and a 99.5% crash-free rate on Firebase Crashlytics.\n\nDoubled conversions on our web app by implementing NextJS server-side rendering.\n\nBuilt data analytics dashboards on Periscope to monitor and optimize new features and promotions."
        },
        {
            company: 'Luniu Mall',
            title: 'Frontend Developer',
            date: 'JUL 2020 - DEC 2020',
            description: 'Used React Native and Expo to build and launch a cross-platform app on the iOS App store, Google Play store, and web.\n\nIntegrated Native WeChat/ AliPay Sign-in and Payment and two-factor authentication.\n\nEnsured optimal user experience by following leading design trends such as skeleton loading and optimized FlatLists with rendering properties and lazy loading.\n\nBuilt CI/CD pipelines for E2E and Unit tests using Detox and Jest.'
        },
        {
            company: 'VSW',
            title: 'Web Developer',
            date: 'NOV 2018 - PRESENT',
            description: "Resolved issues, updated promotional content, fulfilled UI/UX requests, and implemented new features for our static GatsbyJS Website.\n\nCreated content templates hooked up using Contentful for our marketing team to easily publish and edit information on the website.\n\nManually tested sites in various browsers and mobile devices to ensure cross-browser compatibility and responsiveness."
        },
        {
            company: 'Storagehotel',
            title: 'Fullstack Software Developer',
            date: 'NOV 2019 - MAY 2020',
            description: "Designed, built, deployed and managed the company’s Information System.\n\nIntegrated Stripe subscription payments, checkout with behaviour tracking, and an  online customer item manager.\n\nImplemented using MongoDB, Express, Angular, and NodeJS"
        }
    ]

    const mobileExperiences = (
        <div className="flex flex-col space-y-28 sm:hidden">
            {EXPERIENCES.map((experience)=>
                    <div className="flex-shrink">
                        <h2 className="text-gray-400 text-sm">{experience.company}</h2>
                        <h1 className="text-white text-2xl mb-1">{experience.title}</h1>
                        <h2 className="text-gray-400 text-sm mb-5">{experience.date}</h2>
                        <p className="text-gray-600 whitespace-pre-wrap">{experience.description}</p>
                    </div>
            )}
        </div>
    )

    const [currentExperience, setExperience] = useState(0)

    const desktopExperiences = (
        <div className="hidden sm:flex sm:flex-row sm:space-x-20">
        <div className="flex flex-col space-y-4 w-50">
            {EXPERIENCES.map((experience, index)=>(
                <div onClick={()=>setExperience(index)} className="cursor-pointer">
                <h2 className={`text-white ${index === currentExperience ? 'border-l-4' : 'border-l-2'} border-white px-4 py-3 whitespace-nowrap`}>{experience.company}</h2>
                </div>
            ))}                     
        </div>
        <div className="flex flex-col flex-shrink">
            <h1 className="text-white text-2xl mb-1">{EXPERIENCES[currentExperience].title}</h1>
            <h2 className="text-gray-400 text-sm mb-5">{EXPERIENCES[currentExperience].date}</h2>
            <p className="text-gray-600 whitespace-pre-wrap">{EXPERIENCES[currentExperience].description}</p>
        </div>
        </div>
    )

    return(
        <div id="experience" className="bg-black">
            <section className="max-w-4xl px-4 mx-auto flex flex-col py-64">
                <div>
                    <h1 className="text-gray-600 text-lg my-5">EXPERIENCE</h1>
                </div>
                {mobileExperiences}
                {desktopExperiences}
            </section>
        </div>
    )
}