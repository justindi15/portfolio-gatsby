import React from 'react'
import { Disclosure } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'
import logo from '../images/logo.svg'


export default function Nav() {
  return (
    <Disclosure as="nav" className="bg-white mt-10">
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16">
                <div className="flex-shrink-0 flex items-center">
                    <img
                    className="block w-auto"
                    src={logo}
                    alt="logo"
                    />
                </div>
                <div className="hidden sm:ml-6 sm:flex sm:space-x-20">
                    <a
                    href="#"
                    className="border-transparent hover:border-gray-300 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
                    >
                    ABOUT
                    </a>
                    <a
                    href="#"
                    className="border-transparent hover:border-gray-300 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
                    >
                    WORK
                    </a>
                    <a
                    href="#"
                    className="border-transparent hover:border-gray-300 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
                    >
                    EXPERIENCE
                    </a>
                    <a
                    href="#"
                    className="border-transparent hover:border-gray-300 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
                    >
                    CONTACT
                    </a>
                </div>
                <div className="-mr-2 flex items-center sm:hidden">
                    {/* Mobile menu button */}
                    <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100">
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                        <XIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                        <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                    )}
                    </Disclosure.Button>
                </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="pt-20 pb-3 space-y-8">
              <Disclosure.Button
                as="a"
                href="#"
                className="block pl-3 pr-4 py-2 border-l-4 text-3xl"
              >
                About
              </Disclosure.Button>
              <Disclosure.Button
                as="a"
                href="#"
                className="block pl-3 pr-4 py-2 border-l-4 text-3xl"
              >
                Work
              </Disclosure.Button>
              <Disclosure.Button
                as="a"
                href="#"
                className="block pl-3 pr-4 py-2 border-l-4 text-3xl"
              >
                Experience
              </Disclosure.Button>
              <Disclosure.Button
                as="a"
                href="#"
                className="block pl-3 pr-4 py-2 border-l-4 text-3xl"
              >
                Contact
              </Disclosure.Button>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}