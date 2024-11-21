// import myProfile from "public/images/myprofile.png"

import { HomeButton } from "./ButtonHome";
import { BulletPointIcon, GithubIcon, LinkedInIcon } from "./SvgsHome";

export function Home(){
    return(
        <div>
            <div className="flex justify-center">
                {/*start profile and introduction */}
                <div className="flex justify-between p-10">
                    <div className="pr-16">
                        <img className="rounded-full h-[350px] w-[350px]" src="images/myprofile.png" alt="" />
                    </div>
                    <div className="pt-10 ">
                        <div class="h-[400px] min-h-[1em] w-[2px] self-stretch bg-gradient-to-tr from-transparent bg-slate-300 to-transparent opacity-25 dark:bg-slate-800"></div>
                    </div>
                    <div className="flex items-center pl-16 w-[350px]">
                        <div className="text-left">
                            <span className="text-xl">
                                Hi, there
                            </span>
                            <br />
                            <br />
                            <span className="text-xl">
                                I am
                            </span>
                            <br />
                            <span className="font-bold text-4xl">
                                Dhyey Kakadiya,
                            </span>
                            <br />
                            <br />
                            <span>
                                I'm a B.E. Computer Engineering student at Gujarat Technological University, training to be a Full Stack Developer. With skills in Django, JavaScript, HTML, and CSS, I build full-stack applications. I excel in problem-solving, teamwork, and communication, and enjoy programming and competitive coding.
                            </span>
                        </div> 
                    </div>
                </div>
                {/*end profile and introduction */}
            </div>
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
            <br />
            <div className="flex justify-center">
                <div className="font-bold text-4xl">
                    WHAT I DO?
                </div>
            </div>
            <div className="flex justify-center">
                {/*start profile and introduction */}
                <div className="flex justify-between p-10">
                <div className="flex items-center pl-16 w-[500px]">
                        <div className="text-left">
                            <span className="font-bold text-4xl">
                                Full Stack Development
                            </span>
                            <br />
                            <br />
                            <span className="flex justify-start">
                                <div className="pi-3 pr-4">
                                    <BulletPointIcon/> 
                                </div>
                                <div className="text-xl">
                                    Good in creating beautiful and responsive UI's using React.js and Tailwind CSS
                                </div>
                            </span>
                            <br />
                            <span className="flex justify-start">
                                <div className="pi-3 pr-4">
                                    <BulletPointIcon/> 
                                </div>
                                <div className="text-xl">
                                    Skilled in building server-side applications with Express.js and Node.js
                                </div>
                            </span>
                            <br />
                            <span className="flex justify-start">
                                <div className="pi-3 pr-4">
                                    <BulletPointIcon/> 
                                </div>
                                <div className="text-xl">
                                    Good at integragting front-end and back-end for fully functional website
                                </div>
                            </span>
                            <br />
                            <span className="flex justify-start">
                                <div className="pi-3 pr-4">
                                    <BulletPointIcon/> 
                                </div>
                                <div className="text-xl">
                                    Skilled in using Django for rapid bakend development and managing Databases
                                </div>
                            </span>
                        </div> 
                    </div>
                    <div className="pt-10 ">
                        <div class="h-[400px] min-h-[1em] w-[2px] self-stretch bg-gradient-to-tr from-transparent bg-slate-300 to-transparent opacity-25 dark:bg-slate-800"></div>
                    </div>
                    <div className="">
                        <img className="h-[400px] w-[500px] pt-20" src="images/fullsatcksideimage4.png" alt="" />
                    </div>
                </div>
                {/*end profile and introduction */}
            </div>
        </div> 
    )
}