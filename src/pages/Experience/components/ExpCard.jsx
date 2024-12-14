import { ExpBulletPointIcon } from "./ExpSVG";

export function ExpCard(){

    return(
        <div className="flex justify-center">
            <div class="w-max-[1000px] w-[1000px] bg-white shadow-md rounded-lg overflow-hidden border border-gray-200">
                <div class="">
                    <div className="flex justify-between items-center bg-slate-300">
                        <img src="jobimages/contactLogo.png" className="px-5"alt="" />
                        <h2 class="text-sm font-semibold text-gray-800 p-5">Currently Working</h2>
                    </div>
                    <div className="flex flex-col">
                        <div className="flex">
                            <div className="px-5 pt-3">
                            </div>
                            <p class="text-gray-600 text-md font-semibold mt-2 pt-1">
                                Role: 
                            </p>
                            <p className="text-gray-600 text-md mt-2 pt-1 pl-2">
                                Full Stack Developer
                            </p>
                        </div>
                        <div className="flex">
                            <div className="px-5 py-3">
                                <ExpBulletPointIcon/>
                            </div>
                            <p class="text-gray-600 text-md mt-2 py-1">
                            I am contributing to building an interactive and robust full-stack website for the company, developing various frontend and backend features.
                            </p>
                        </div>
                        
                    </div>
                </div>
                <div className="justify-self-center">
                    <a href="https://www.caffae.in/">
                        <button className="py-2 px-8 bg-slate-800 text-white round rounded-lg mr-5 mb-3">
                                visit website
                        </button>
                    </a>
                </div>
            </div>
        </div>

    )
}