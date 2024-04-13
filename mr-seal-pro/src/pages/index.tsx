import Image from 'next/image'
import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'


export default function Page() {
    return <div>
        <Disclosure as="nav" className="bg-gray-900">
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
                                        <a href="#" className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:text-white">Contact</a>
                                        <a href="#" className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:text-white">Products</a>
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
                                Contact
                            </Disclosure.Button>
                            <Disclosure.Button as="a" href="#" className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-100 hover:text-gray-900">
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
                            Driveways &#8226; Parking Lots &#8226; Hot Crack Sealing &#8226; Pot Holes Repaired &#8226; Line Striping
                        </p>
                    </div>
                    <img src="/pics/headerbg.jpg" alt="Paved driveway"
                        className="mt-10 aspect-[6/5] w-full max-w-lg rounded-2xl object-cover sm:mt-16 lg:mt-0 lg:max-w-none xl:row-span-2 xl:row-end-2 xl:mt-36"
                    />
                </div>
            </div>
            <div className="absolute inset-x-0 bottom-0 -z-10 h-24 bg-gradient-to-t from-white sm:h-32" />
        </div>

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h1 className="mt-24 text-4xl font-bold tracking-tight text-gray-900 sm:mt-10 sm:text-6xl text-center">
                Mr. Seal Pro uses SealMaster Products
            </h1>
            <p className="mt-6 text-lg leading-8 text-indigo-500 text-center font-semibold">
                We use SealMaster products to ensure your driveway is fully protected
            </p>
            <div className="mx-auto max-w-3xl">{/* Content goes here */}
                <div className={"grid md:grid-cols-2 lg:grid-cols-3 gap-10 justify-center p-5"}>
                    <div>
                        <img className={"h-auto mx-auto"} src={"/pics/sun.png"} />
                        <p className={"text-center"}>
                            <span className={"font-bold text-indigo-500 text-xl"}>Sun Block</span>
                            <br />
                            <br />
                            Sealcoating prevents asphalt surface oxidation by forming a tough protective outer skin
                        </p>
                    </div>

                    <div>
                        <img className={"h-auto mx-auto"} src={"/pics/raindrop.png"} />
                        <p className={"text-center"}>
                            <span className={"font-bold text-indigo-500 text-xl"}>Weather Proof</span>
                            <br />
                            <br />
                            Sealcoating seals the porous asphalt surface, preventing damaging water penetration
                        </p>
                    </div>

                    <div>
                        <img className={"h-auto mx-auto"} src={"/pics/beaker.png"} />
                        <p className={"text-center"}>
                            <span className={"font-bold text-indigo-500 text-xl"}>Resists Gas and Oil</span>
                            <br />
                            <br />
                            Sealers protect asphalt from the deteriorating effects of gasoline, oil, de-icers and other harsh chemicals
                        </p>
                    </div>

                    <div>
                        <img className={"h-auto mx-auto"} src={"/pics/flower.png"} />
                        <p className={"text-center"}>
                            <span className={"font-bold text-indigo-500 text-xl"}>Restores Appearance</span>
                            <br />
                            <br />
                            Sealers provide the jet black finish adn fresh, new appearance that improves the image of any home or business
                        </p>
                    </div>

                    <div>
                        <img className={"h-auto mx-auto"} src={"/pics/broom.png"} />
                        <p className={"text-center"}>
                            <span className={"font-bold text-indigo-500 text-xl"}>Low Maintenance</span>
                            <br />
                            <br />
                            Sealers provides a smooth, even surface that facilitates cleaning and maintenance
                        </p>
                    </div>

                    <div>
                        <img className={"h-auto mx-auto"} src={"/pics/dollarsign.png"} />
                        <p className={"text-center"}>
                            <span className={"font-bold text-indigo-500 text-xl"}>Saves Money</span>
                            <br />
                            <br />
                            Avoid expensive asphalt replacement by spending a few cents per square foot on professional driveway sealcoating my Mr. Seal Pro
                        </p>
                    </div>
                </div>
            </div>
        </div>

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