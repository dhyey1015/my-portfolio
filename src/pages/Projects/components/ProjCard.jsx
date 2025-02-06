import { ProjSymboleSVG } from "./ProjSVG";


export function ProjCard({projectName, projectDescription, date, link}){

    return(
        <div className="flex flex-col justify-center bg-slate-300 w-full h-full rounded-lg p-5">
            <div className="flex ">
                <div className="pt-1">
                   <ProjSymboleSVG/>
                </div>
                <div className="text-2xl font-bold pl-2 pb-1">
                    {projectName}
                </div>
            </div>
            <div className="pt-1 truncate overflow-hidden whitespace-nowrap">
                {projectDescription}
            </div>
            <div className="flex pt-5">
                <div className="font-semibold">
                    Created on :
                </div>
                <div className="pl-2">
                    {date}
                </div>
            </div>
            <div className="flex justify-center text-center  w-24 text-white m-4 mx-[150px]">
                <a href={link}>
                    <button className="bg-slate-900 px-20 py-1 rounded-lg">
                        visit
                    </button>
                </a>
                
            </div>
            
        </div>
    )
}