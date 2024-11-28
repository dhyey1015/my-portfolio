// import myProfile from "public/images/myprofile.png"

import { HomeButton } from "./ButtonHome";
import { Introduction } from "./Introduction";
import { BulletPointIcon, GithubIcon, LinkedInIcon } from "./SvgsHome";
import { WhatiDo } from "./WhatiDo";

export function Home(){
    return(
        <div>
            <Introduction/>
            <div className="flex justify-center">
                <div className="p-1">
                    <HomeButton component={GithubIcon} />
                </div>
                <div className="p-1">
                    <HomeButton component={LinkedInIcon}/>
                </div>
            </div>
            <br />
            <br />
            <div className="flex justify-center">
                <div className="font-bold text-4xl">
                    WHAT I DO?
                </div>
            </div>
            <WhatiDo/>
        </div> 
    )
}