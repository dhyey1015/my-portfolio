import { EduCard } from "./components/EduCard";

export function Education(){

    return(
        <div>
            <div className="flex justify-center h-max-[350px] h-[350px] ">
                <div className="">
                    <img src="images/edulogo.png" className="px-40" alt="" />
                </div>
                <div className="pr-40 w-max-[750px] w-[750px]">
                    <div className="flex flex-col pt-16">
                        <div className="text-center text-5xl font-bold p-8">
                            Education    
                        </div>
                        <p className="text-center text-2xl font-bold">
                            The beautiful thing about learning is that 
                            no one can take it away from you.    
                        </p>
                    </div>
                </div>
            </div>
            <div className="flex flex-col">
                <div className="text-center text-3xl p-10">
                    Degrees Received
                </div>
                <div className="flex justify-center">
                    <EduCard/>
                </div>
            </div>
        </div>
    )
}