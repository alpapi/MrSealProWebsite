import Image from 'next/image'

export default function Page() {
    return <div>
        <nav className={"bg-gray-400"}>
            <ul className={"flex justify-center"}>
                <li className={"col-span-5"}></li>

                <a href={"#"}><li className={"p-5 hover:bg-emerald-500 align-center"}>Home</li></a>
                <a href={"#"}><li className={"p-5 hover:bg-emerald-500"}>About</li></a>
                <a href={"#"}><li className={"p-5 hover:bg-emerald-500"}>Contact</li></a>
            </ul>
        </nav>

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