import Image from 'next/image'

export default function Page() {
    return <div>
        <nav className={"bg-gray-400"}>
            <ul className={"flex justify-center"}>
                <li className={"col-span-2"}></li>
                <a href={"#"}><li className={"p-5 hover:bg-emerald-500"}>Home</li></a>
                <a href={"#"}><li className={"p-5 hover:bg-emerald-500"}>About</li></a>
                <a href={"#"}><li className={"p-5 hover:bg-emerald-500"}>Contact</li></a>
            </ul>
        </nav>

        <div className={"grid grid-cols-4 gap-4 justify-center"}>
            <img className={""} src="/pics/driveway1.jpg" alt="Picture of paved driveway" />
            <img className={""} src="/pics/driveway2.jpg" alt="Picture of paved driveway" />
            <img className={""} src="/pics/driveway3.jpg" alt="Picture of paved driveway" />
            <img className={""} src="/pics/driveway4.jpg" alt="Picture of paved driveway" />
        </div>
    </div> // THIS IS WHERE ALL OF THE CONTENT FOR THE PAGE GOES (inside of the div starting at return)

}