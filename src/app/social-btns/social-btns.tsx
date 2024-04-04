import { GitHubIcon } from "../icons/github-icon";
import { InstaIcon } from "../icons/insta-icon";
import { LinkedinIcon } from "../icons/linkedin";

import "./social-btns.scss"

export function SocialBtns() {
    return (
        <div className="social">
            <a href="https://www.instagram.com/patrick_aprestes/"> <InstaIcon /></a>
            <a href="https://www.linkedin.com/in/patrick-azambuja-prestes-839287279/"> <LinkedinIcon /></a>
            <a href="https://github.com/Patrick-1810s"> <GitHubIcon /></a>
        </div >




    )
}