import { FaLinkedin } from "react-icons/fa";
import { FaSquareGithub } from "react-icons/fa6";
import { IoMdMailOpen } from "react-icons/io";
const urlLinkedin = "https://www.linkedin.com/in/facundo-alminana-reinoso/"
const urlGitHub = "https://github.com/Facu0797"
const urlMail = "https://mail.google.com/mail/u/0/#inbox?compose=GTvVlcSDZqfnhlwzVPjkqkBdLJZVgVbrDshCPFBzwVjsXMKVzvxZFzsXSsqtHsNSPRlRmjmLZxwQb"

const Redes = () => {
    return ( 
        <div className="redes">
            <a target="_blank" href={urlLinkedin}>
                <FaLinkedin className="redes-icono"/>
            </a>
            <a target="_blank" href={urlGitHub}>
                <FaSquareGithub className="redes-icono"/>
            </a>
            <a target="_blank" href={urlMail}>
                <IoMdMailOpen className="redes-icono"/>
            </a>
        </div>    
    );
}
 
export default Redes;