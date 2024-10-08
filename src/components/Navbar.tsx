import Logo from "../assets/A (1).svg"
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";


const Navbar = () => {
    return (
        <nav className="mb-20 flex items-center justify-between py-6 min-[320px]:space-x-16">
            <div className="flex flex-shrink items-center">
                <img src={Logo} alt="Logo" className=" size-24" />
            </div>
            <div className="m-8 flex items-center justify-center gap-4 text-3xl text-zinc-50">
                <a target="_blank" href="https://www.linkedin.com/in/ahmed-gomaa-499b55254/"><FaLinkedin /></a>
                <a target="_blank" href="https://github.com/ahmed7757"><FaGithub /></a>
                <a target="_blank" href="https://x.com/Ag8496001Ahmed"><FaSquareXTwitter /></a>
                <a target="_blank" href="https://www.instagram.com/ahmedg7700/"><FaInstagram /></a>
            </div>
        </nav>
    )
}

export default Navbar
