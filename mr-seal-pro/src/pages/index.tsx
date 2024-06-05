import Image from 'next/image';
import React, { Fragment } from 'react';
import { Disclosure, Menu, Transition } from '@headlessui/react';
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline';
import {BuildingOffice2Icon, EnvelopeIcon, PhoneIcon} from "@heroicons/react/16/solid";
import { useState } from 'react';

const picArray = ['/pics/timmydw1.jpg', '/pics/timmydw2.jpg', '/pics/driveway3.PNG', '/pics/driveway4.PNG', '/pics/driveway5.PNG', '/pics/driveway6.PNG'];

export default function Page() {

    const [srcImg, setSrcImg] = useState(picArray[0]);

    function changePic(src: string){
        setSrcImg(src);
    }

    let imgElements = picArray.map(function(image){
        return <img src={image} alt={"Paved driveway picture"} className={"h-auto mx-auto"} onClick={() => changePic(image)} key={image}/>;
    });

    return <div> {/* Everything has to go in this div to display on the website */}


        <span id={"top"}></span>
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
                                        <a href="#productsJump" className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:text-white">Products</a>
                                        <a href="#contactJump" className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:text-white">Contact</a>
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
                            <Disclosure.Button as="a" href="#productsJump" className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-100 hover:text-gray-900">
                                Products
                            </Disclosure.Button>
                            <Disclosure.Button as="a" href="#contactJump" className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-100 hover:text-gray-900">
                                Contact
                            </Disclosure.Button>
                        </div>
                    </Disclosure.Panel>
                </>
            )}
        </Disclosure>


        <div className="relative isolate overflow-hidden bg-gradient-to-b from-indigo-800/20 pt-14">
            <div className="absolute inset-y-0 right-1/2 -z-10 -mr-96 w-[200%] origin-top-right skew-x-[-30deg] bg-white shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 sm:-mr-80 lg:-mr-96" aria-hidden="true"/>
            <div className="mx-auto max-w-7xl px-6 sm:py-20 lg:px-8">
                <div className="mx-auto max-w-2xl lg:mx-0 lg:grid lg:max-w-none lg:grid-cols-2 lg:gap-x-16 lg:gap-y-6 xl:grid-cols-1 xl:grid-rows-1 xl:gap-x-8">
                    <h1 className="max-w-2xl text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl lg:col-span-2 xl:col-auto text-center">
                        <span className={"text-red-500"}>Mr. Seal Pro</span><br /> The Driveway Sealcoating Professional
                    </h1>
                    <div className="mt-6 max-w-xl lg:mt-0 xl:col-end-1 xl:row-start-1">
                        {/*<p className={"text-lg text-center font-bold leading-8 text-gray-900 font-semibold sm:ml-16"}>Est. 1999</p>*/}
                        <p className="text-lg text-center leading-8 text-gray-600 font-semibold sm:ml-16">
                            Commercial &#8226; Residential &#8226; Driveways &#8226; Parking Lots &#8226; Hot Crack Sealing &#8226; Pot Holes Repaired &#8226; Line Striping
                        </p>
                    </div>
                    <img src={srcImg} alt="Paved driveway"
                        className="mt-10 aspect-[6/5] w-full max-w-lg rounded-2xl object-cover sm:mt-16 lg:mt-0 lg:max-w-none xl:row-span-2 xl:row-end-2 xl:mt-36 sm:m-auto"
                    />
                </div>
            </div>

            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"> {/* Gallery Section */}
                <div className="mx-auto max-w-10xl">
                    <div className={"grid grid-cols-6 gap-4 justify-center p-5"}>
                        {
                            picArray.map(function(image){
                                return <img src={image} alt={"Paved driveway picture"} className={"h-auto mx-auto"} onClick={() => changePic(image)} key={image}/>;
                            })
                        } {/* The JavaScript here is to make it so that you don't have to assign it to a variable */}
                    </div>
                </div>
            </div> {/* Gallery Section */}

            <div className="absolute inset-x-0 bottom-0 -z-10 h-24 bg-gradient-to-t from-white sm:h-32" />
        </div> {/* Main header section */}

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
                            <span className={"font-bold text-yellow-300 text-xl"}>Save Money</span>
                            <br />
                            <br />
                            <span className={"text-slate-200"}>Avoid expensive asphalt replacement by spending a few cents per square foot on professional driveway sealcoating by Mr. Seal Pro</span>
                        </p>
                    </div>
                </div>
            </div>

            <div className={"flex justify-center p-10"}>
                <a href={"https://sealmaster.net/products/"}>
                    <button
                    type="button"
                    className=" rounded-md bg-yellow-300 px-5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm ring-inset ring-gray-300 hover:bg-gray-50">
                    Learn More 	&rarr;
                </button></a>
            </div>
        </div> {/* Seal Master Products Section*/}

        <span id={"contactJump"}></span>

        <div className="bg-gray-100 py-24 sm:py-32 grid grid-cols-1 lg:grid-cols-6 mx-auto">
            <div></div>
            <div className="mx-auto max-w-7xl px-6 lg:px-8 mb-20 lg:mb-0 text-center lg:text-start col-span-2">
                <div className="mx-auto max-w-2xl lg:mx-0">
                    <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">Operated since 1999</h2>
                    <p className="mt-6 text-lg leading-8 text-gray-600">
                        Servicing clients in the Upper Bucks County area. Operating as a fully licensed and insured sealcoating company in Pennsylvania.
                    </p>
                </div>
            </div>
            <div className="mx-auto max-w-xl lg:mx-0 lg:max-w-lg text-center col-span-2">

                <h2 className="text-3xl font-bold tracking-tight text-gray-900">Get in Touch - Contact Us</h2>
                <dl className="mt-10 space-y-4 text-base leading-7 text-gray-600">
                    <div className="flex gap-x-4 justify-center">
                        <dt className="flex-none">
                            <span className="sr-only">Telephone</span>
                            <PhoneIcon className="h-7 w-6 text-gray-400" aria-hidden="true" />
                        </dt>
                        <dd>
                            <a className="hover:text-gray-900 font-semibold" href="tel:610-982-5840">
                                Upper Black Eddy: <br /> 610-982-5840
                            </a>
                        </dd>
                        <dd>
                            <a className="hover:text-gray-900 font-semibold" href="tel:215-345-4955">
                                Doylestown: <br /> 215-345-4955
                            </a>
                        </dd>
                    </div>
                    <div className="flex gap-x-4 justify-center">
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
                <p className="mt-6 text-lg leading-8 text-gray-600">
                    Email or Call for a free estimate
                </p>
            </div>
        </div> {/* Contact Section */}

        <footer className="bg-zinc-800">
            <div className="mx-auto max-w-7xl overflow-hidden px-6 py-20 sm:py-24 lg:px-8">
                <nav className="mb-6 sm:flex sm:justify-center sm:space-x-12 text-gray-300" aria-label="Footer">

                    <div className={"font-semibold"}>
                        <a href={"#top"}><span className={"sm:mr-6"}>Home</span></a> &#8226;
                        <a href={"#productsJump"}><span className={"sm:ml-6 sm:mr-6"}> Products</span></a> &#8226;
                        <a href={"#contactJump"}><span className={"sm:ml-6 sm:mr-6"}> Contact</span></a> &#8226;
                        <a href={"https://sealmaster.net/products/"}><span className={"sm:ml-6"}> SealMaster Products</span></a> {/* SealMaster link causes hydration errors. Remove link to fix, but doesn't seem like a problem*/}
                    </div>
                </nav>
                <img src={"pics/logoUpdated.png"} className={"h-20 w-auto m-auto mt-10"}/>

                <p className="mt-10 text-center text-xs leading-5 text-gray-500">
                    &copy; 2024 Mr. Seal Pro - All rights reserved.
                </p>
            </div>
        </footer> {/* Footer Section */}

    </div>
}