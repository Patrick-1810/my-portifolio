import Image from "next/image";
import "./header.scss";


export function Header() {
    return (
        < div className="header" >
            <div>
                <h1>Hi, i'm Patrick! 👋</h1>
                <h2>Front End Developer</h2>
            </div>
            <Image
                src="/imgProfile.jpg"
                alt="Vercel Logo"
                width={315}
                height={315}
                priority
            />
        </div >

    )

}