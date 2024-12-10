import { EduBulletPointIcon } from "./EduSVG";
export function EduCard(){

    return(
        <div className="flex justify-between">
            <div className="p-5">
                <img src="images/gtulogo.png" className="w-40" alt="" />
            </div>
            <div class="w-max-[1000px] w-[1000px] bg-white shadow-md rounded-lg overflow-hidden border border-gray-200">
                <div class="">
                    <div className="flex justify-between bg-slate-300">
                        <h2 class="text-lg font-semibold text-gray-800 p-5">Gujarat Technological University</h2>
                        <h2 class="text-sm font-semibold text-gray-800 p-5">Graduating in 2026</h2>
                    </div>
                    <h2 class="text-md font-semibold text-gray-800 bg-slate-300 px-5 pb-4">B.E in Computer Engineering</h2>
                    <div className="flex flex-col">
                        <div className="flex">
                            <div className="px-5 pt-3">
                                <EduBulletPointIcon/>
                            </div>
                            <p class="text-gray-600 text-md mt-2 pt-1">
                                I have studied basic software engineering subjects like  DBMS, OS, COA, web-development,etc.
                            </p>
                        </div>
                        <div className="flex">
                            <div className="px-5 py-3">
                                <EduBulletPointIcon/>
                            </div>
                            <p class="text-gray-600 text-md mt-2 py-1">
                                Apart from this, i have also done courses to learn django, MERN Stack and PERN Stack.
                            </p>
                        </div>
                        
                    </div>
                </div>
                <div className="justify-self-center">
                    <button className="py-2 px-8 bg-slate-800 text-white round rounded-lg mr-5 mb-3">
                        visit website
                    </button>
                </div>
                
            </div>
        </div>

    )
}