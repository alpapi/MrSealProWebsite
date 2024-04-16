import Image from 'next/image'
import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import {BuildingOffice2Icon, EnvelopeIcon, PhoneIcon} from "@heroicons/react/16/solid";


export default function Page() {
    return <div>
        <Disclosure as="nav" className="bg-gray-700">
            {({ open }) => (
                <>
                    <div className="max-w-7xl px-4 sm:px-6 lg:px-8">
                        <div className="flex h-16 items-center justify-between">
                            <div className="flex items-center">
                                <div className="flex-shrink-0">
                                    <a href={"#"}><img className="h-20 w-auto" src="/pics/logoUpdated.png" alt="MrSealPro Logo"/></a> {/* LOGO GOES HERE */}
                                </div>
                                <div className="hidden sm:ml-6 sm:block">
                                    <div className="flex space-x-4">
                                        <a href="#" className="rounded-md px-3 py-2 text-sm font-medium text-white">Home</a>
                                        <a href="#contactJump" className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:text-white">Contact</a>
                                        <a href="#productsJump" className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:text-white">Products</a>
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
                            <Disclosure.Button as="a" href="#contactJump" className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-100 hover:text-gray-900">
                                Contact
                            </Disclosure.Button>
                            <Disclosure.Button as="a" href="#productsJump" className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-100 hover:text-gray-900">
                                Products
                            </Disclosure.Button>
                        </div>
                    </Disclosure.Panel>
                </>
            )}
        </Disclosure>

        <div className="relative isolate -z-10 overflow-hidden bg-gradient-to-b from-indigo-100/20 pt-14">
            <div className="absolute inset-y-0 right-1/2 -z-10 -mr-96 w-[200%] origin-top-right skew-x-[-30deg] bg-white shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 sm:-mr-80 lg:-mr-96" aria-hidden="true"/>
            <div className="mx-auto max-w-7xl px-6 sm:py-20 lg:px-8">
                <div className="mx-auto max-w-2xl lg:mx-0 lg:grid lg:max-w-none lg:grid-cols-2 lg:gap-x-16 lg:gap-y-6 xl:grid-cols-1 xl:grid-rows-1 xl:gap-x-8">
                    <h1 className="max-w-2xl text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl lg:col-span-2 xl:col-auto">
                        Mr. Seal Pro - The Driveway Sealcoating Professional
                    </h1>
                    <div className="mt-6 max-w-xl lg:mt-0 xl:col-end-1 xl:row-start-1">
                        <p className="text-lg leading-8 text-gray-500 font-semibold">
                            Commercial &#8226; Residential &#8226; Driveways &#8226; Parking Lots &#8226; Hot Crack Sealing &#8226; Pot Holes Repaired &#8226; Line Striping
                        </p>
                    </div>
                    <img src="/pics/headerbg.jpg" alt="Paved driveway"
                        className="mt-10 aspect-[6/5] w-full max-w-lg rounded-2xl object-cover sm:mt-16 lg:mt-0 lg:max-w-none xl:row-span-2 xl:row-end-2 xl:mt-36"
                    />
                </div>
            </div>
            <div className="absolute inset-x-0 bottom-0 -z-10 h-24 bg-gradient-to-t from-white sm:h-32" />
        </div>

        <span id={"productsJump"}></span>
        <div className="mx-auto px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-zinc-800 via-zinc-600 to-zinc-800">
            <h1 className="mt-24 text-4xl font-bold tracking-tight text-slate-50 sm:mt-10 sm:text-6xl text-center p-10">
                SealMaster Products
            </h1>
            <p className="mb-5 text-lg leading-8 text-gray-300 text-center font-semibold">
                We use SealMaster products to ensure your driveway is fully protected
            </p>
            <div className="mx-auto max-w-3xl p-2">{/* Content goes here */}
                <div className={"grid md:grid-cols-2 lg:grid-cols-3 gap-10 justify-center p-5"}>
                    <div>
                        <img className={"h-auto mx-auto"} src={"/pics/sun.png"} />
                        <p className={"text-center"}>
                            <span className={"font-bold text-yellow-300 text-xl"}>Sun Block</span>
                            <br />
                            <br />
                            <span className={"text-slate-200"}>Sealcoating prevents asphalt surface oxidation by forming a tough protective outer skin</span>
                        </p>
                    </div>

                    <div>
                        <img className={"h-auto mx-auto"} src={"/pics/raindrop.png"} />
                        <p className={"text-center"}>
                            <span className={"font-bold text-yellow-300 text-xl"}>Weather Proof</span>
                            <br />
                            <br />
                            <span className={"text-slate-200"}>Sealcoating seals the porous asphalt surface, preventing damaging water penetration</span>
                        </p>
                    </div>

                    <div>
                        <img className={"h-auto mx-auto"} src={"/pics/beaker.png"} />
                        <p className={"text-center"}>
                            <span className={"font-bold text-yellow-300 text-xl"}>Resists Gas and Oil</span>
                            <br />
                            <br />
                            <span className={"text-slate-200"}>Sealers protect asphalt from the deteriorating effects of gasoline, oil, de-icers and other harsh chemicals</span>
                        </p>
                    </div>

                    <div>
                        <img className={"h-auto mx-auto"} src={"/pics/flower.png"} />
                        <p className={"text-center"}>
                            <span className={"font-bold text-yellow-300 text-xl"}>Restores Appearance</span>
                            <br />
                            <br />
                            <span className={"text-slate-200"}>Sealers provide the jet black finish and fresh, new appearance that improves the image of any home or business</span>
                        </p>
                    </div>

                    <div>
                        <img className={"h-auto mx-auto"} src={"/pics/broom.png"} />
                        <p className={"text-center"}>
                            <span className={"font-bold text-yellow-300 text-xl"}>Low Maintenance</span>
                            <br />
                            <br />
                            <span className={"text-slate-200"}>Sealers provides a smooth, even surface that facilitates cleaning and maintenance</span>
                        </p>
                    </div>

                    <div>
                        <img className={"h-auto mx-auto"} src={"/pics/dollarsign.png"} />
                        <p className={"text-center"}>
                            <span className={"font-bold text-yellow-300 text-xl"}>Saves Money</span>
                            <br />
                            <br />
                            <span className={"text-slate-200"}>Avoid expensive asphalt replacement by spending a few cents per square foot on professional driveway sealcoating my Mr. Seal Pro</span>
                        </p>
                    </div>
                </div>
            </div>
        </div> {/* Seal Master Products Section*/}

        <span id={"contactJump"}></span>
        <div className="relative isolate bg-white">
            <div className="mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-2">
                <div className="relative px-6 pb-20 pt-24 sm:pt-32 lg:static lg:px-8 lg:py-48">
                    <div className="mx-auto max-w-xl lg:mx-0 lg:max-w-lg">
                        <div className="absolute inset-y-0 left-0 -z-10 w-full overflow-hidden bg-gray-100 ring-1 ring-gray-900/10 lg:w-1/2">
                            <svg className="absolute inset-0 h-full w-full stroke-gray-200 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]" aria-hidden="true">
                                <defs>
                                    <pattern id="83fd4e5a-9d52-42fc-97b6-718e5d7ee527" width={200} height={200} x="100%" y={-1} patternUnits="userSpaceOnUse">
                                        <path d="M130 200V.5M.5 .5H200" fill="none" />
                                    </pattern>
                                </defs>
                                <rect width="100%" height="100%" strokeWidth={0} fill="white" />
                                <svg x="100%" y={-1} className="overflow-visible fill-gray-50">
                                    <path d="M-470.5 0h201v201h-201Z" strokeWidth={0} />
                                </svg>
                                <rect width="100%" height="100%" strokeWidth={0} fill="url(#83fd4e5a-9d52-42fc-97b6-718e5d7ee527)" />
                            </svg>
                        </div>
                        <h2 className="text-3xl font-bold tracking-tight text-gray-900">Get in Touch - Contact Us</h2>
                        <p className="mt-6 text-lg leading-8 text-gray-600">
                            Available in the Upper Bucks County Area
                        </p>
                        <dl className="mt-10 space-y-4 text-base leading-7 text-gray-600">
                            <div className="flex gap-x-4">
                                <dt className="flex-none">
                                    <span className="sr-only">Telephone</span>
                                    <PhoneIcon className="h-7 w-6 text-gray-400" aria-hidden="true" />
                                </dt>
                                <dd>
                                    <a className="hover:text-gray-900 font-semibold" href="tel:610-982-5840">
                                        Upper Black Eddy: 610-982-5840
                                    </a>
                                </dd>
                                <dd>
                                    <a className="hover:text-gray-900 font-semibold" href="tel:215-345-4955">
                                        Doylestown: 215-345-4955
                                    </a>
                                </dd>
                            </div>
                            <div className="flex gap-x-4">
                                <dt className="flex-none">
                                    <span className="sr-only">Email</span>
                                    <EnvelopeIcon className="h-7 w-6 text-gray-400" aria-hidden="true" />
                                </dt>
                                <dd>
                                    <a className="hover:text-gray-900 font-semibold" href="mailto:mrsealpro@yahoo.com">
                                        mrsealpro@yahoo.com
                                    </a>
                                </dd>
                            </div>
                        </dl>
                    </div>
                </div>
                <form action="#" method="POST" className="px-6 pb-24 pt-20 sm:pb-32 lg:px-8 lg:py-48">
                    <div className="mx-auto max-w-xl lg:mr-0 lg:max-w-lg">
                        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                            <div>
                                <label htmlFor="first-name" className="block text-sm font-semibold leading-6 text-gray-900">
                                    First name
                                </label>
                                <div className="mt-2.5">
                                    <input
                                        type="text"
                                        name="first-name"
                                        id="first-name"
                                        autoComplete="given-name"
                                        className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-indigo-600 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>
                            <div>
                                <label htmlFor="last-name" className="block text-sm font-semibold leading-6 text-gray-900">
                                    Last name
                                </label>
                                <div className="mt-2.5">
                                    <input
                                        type="text"
                                        name="last-name"
                                        id="last-name"
                                        autoComplete="family-name"
                                        className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-indigo-600 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>
                            <div className="sm:col-span-2">
                                <label htmlFor="email" className="block text-sm font-semibold leading-6 text-gray-900">
                                    Email
                                </label>
                                <div className="mt-2.5">
                                    <input
                                        type="email"
                                        name="email"
                                        id="email"
                                        autoComplete="email"
                                        className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-indigo-600 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>

                            <div className="sm:col-span-2">
                                <label htmlFor="phone-number" className="block text-sm font-semibold leading-6 text-gray-900">
                                    Address
                                </label>
                                <div className="mt-2.5">
                                    <input
                                        type="address"
                                        name="address"
                                        id="address"
                                        autoComplete="address"
                                        className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-indigo-600 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>

                            <div className="sm:col-span-2">
                                <label htmlFor="phone-number" className="block text-sm font-semibold leading-6 text-gray-900">
                                    Phone number
                                </label>
                                <div className="mt-2.5">
                                    <input
                                        type="tel"
                                        name="phone-number"
                                        id="phone-number"
                                        autoComplete="tel"
                                        className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-indigo-600 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>

                            <div className="sm:col-span-2">
                                <label htmlFor="message" className="block text-sm font-semibold leading-6 text-gray-900">
                                    Message
                                </label>
                                <div className="mt-2.5">
                                    <textarea name="message" id="message" rows={4} className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-indigo-600 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" defaultValue={''}/>
                                </div>
                            </div>
                        </div>
                        <div className="mt-8 flex justify-end">
                            <button
                                type="submit"
                                className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            >
                                Send message
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div> {/* Contact Section */}

        {/*<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-10xl">
                <div className={"grid md:grid-cols-2 lg:grid-cols-3 gap-4 justify-center p-5"}>
                    <img className={"h-auto mx-auto"} src="/pics/driveway1.jpg" alt="Picture of paved driveway" />
                    <img className={"h-auto mx-auto"} src="/pics/driveway2.png" alt="Picture of paved driveway" />
                    <img className={"h-auto mx-auto"} src="/pics/driveway3.png" alt="Picture of paved driveway" />
                    <img className={"h-auto mx-auto"} src="/pics/driveway4.png" alt="Picture of paved driveway" />
                    <img className={"h-auto mx-auto"} src="/pics/driveway5.png" alt="Picture of paved driveway" />
                    <img className={"h-auto mx-auto"} src="/pics/driveway6.png" alt="Picture of paved driveway" />
                </div>
            </div>
        </div>*/}
    </div> // THIS IS WHERE ALL OF THE CONTENT FOR THE PAGE GOES (inside of the div starting at return)

}