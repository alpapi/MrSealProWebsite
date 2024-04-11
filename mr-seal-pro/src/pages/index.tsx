import Image from 'next/image'
import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'


export default function Page() {
    return <div>
        <Disclosure as="nav" className="bg-[#e74c3c]">
            {({ open }) => (
                <>
                    <div className="max-w-7xl px-4 sm:px-6 lg:px-8">
                        <div className="flex h-16 items-center justify-between">
                            <div className="flex items-center">
                                <div className="flex-shrink-0">
                                    <a href={"#"}><img className="h-20 w-auto" src="/pics/logo.png" alt="MrSealPro Logo"/></a> {/* LOGO GOES HERE */}
                                </div>
                                <div className="hidden sm:ml-6 sm:block">
                                    <div className="flex space-x-4">
                                        <a href="#" className="rounded-md px-3 py-2 text-sm font-medium text-white">Home</a>
                                        <a href="#" className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:text-white">About</a>
                                        <a href="#" className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:text-white">Contact</a>
                                    </div>
                                </div>
                            </div>

                            <div className="-mr-2 flex sm:hidden">
                                {/* Mobile menu button */}
                                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-100 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                                    <span className="absolute -inset-0.5" />
                                    <span className="sr-only">Open main menu</span>
                                    {open ? (
                                        <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                                    ) : (
                                        <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                                    )}
                                </Disclosure.Button>
                            </div>
                        </div>
                    </div>

                    <Disclosure.Panel className="sm:hidden">
                        <div className="space-y-1 px-2 pb-3 pt-2">
                            {/* Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" */}
                            <Disclosure.Button as="a" href="#" className="block rounded-md bg-gray-100 px-3 py-2 text-base font-medium text-gray-900">
                                Home
                            </Disclosure.Button>
                            <Disclosure.Button as="a" href="#" className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-100 hover:text-gray-900">
                                About
                            </Disclosure.Button>
                            <Disclosure.Button as="a" href="#" className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-100 hover:text-gray-900">
                                Contact
                            </Disclosure.Button>
                        </div>
                    </Disclosure.Panel>
                </>
            )}
        </Disclosure>

        <div className={"grid md:grid-cols-2 lg:grid-cols-3 gap-4 justify-center p-5"}>
            <img className={"h-auto mx-auto"} src="/pics/driveway1.jpg" alt="Picture of paved driveway" />
            <img className={"h-auto mx-auto"} src="/pics/driveway2.png" alt="Picture of paved driveway" />
            <img className={"h-auto mx-auto"} src="/pics/driveway3.png" alt="Picture of paved driveway" />
            <img className={"h-auto mx-auto"} src="/pics/driveway4.png" alt="Picture of paved driveway" />
            <img className={"h-auto mx-auto"} src="/pics/driveway5.png" alt="Picture of paved driveway" />
            <img className={"h-auto mx-auto"} src="/pics/driveway6.png" alt="Picture of paved driveway" />
        </div>
    </div> // THIS IS WHERE ALL OF THE CONTENT FOR THE PAGE GOES (inside of the div starting at return)

}