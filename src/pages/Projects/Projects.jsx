import { ProjCard } from "./components/ProjCard";


export function Projects(){

    return(
        <div>
            <div className="flex justify-center">
                <div className="flex justify-center items-center w-max-[600px] w-[600px] h-max-[600px] h-[600px]">
                    <img src="images/projectsphoto.png" className="w-max-[600px] w-[600px] h-max-[600px] h-[600px]" alt="" />
                </div>
                <div className="flex flex-col justify-center items-center w-max-[600px] w-[600px] h-max-[600px] h-[600px]">
                    <div className="text-center text-5xl font-extrabold p-6">
                        Projects
                    </div>
                    <div className="text-center text-xl p-6">
                        These projects showcase the tools and technologies I’ve learned throughout my journey, and I have successfully deployed them on cloud infrastructure.
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 items-center p-14">
                <ProjCard 
                    projectName={"Dkart"} 
                    projectDescription={"The code I wrote while attending a Udemy course."}
                    date={"Dec 12 2024"}
                    link={"https://github.com/dhyey1015/dkart"}
                />
                <ProjCard 
                    projectName={"Static-AI-using-python"} 
                    projectDescription={"working on building a static AI that can perform basic tasks on a computer."}
                    date={"Dec 12 2024"}
                    link={"https://github.com/dhyey1015/programmed-a-static-AI-using-python"}
                />
                <ProjCard 
                    projectName={"payment-app"} 
                    projectDescription={""}
                    date={"Dec 12 2024"}
                    link={"https://github.com/dhyey1015/payment-app"}
                />
                <ProjCard 
                    projectName={"Mom-Buddy"} 
                    projectDescription={"Its a chatbot that can give information about pregnancy related questions"}
                    date={"Dec 12 2024"}
                    link={"https://github.com/dhyey1015/sem5-de-project"}
                />
                <ProjCard 
                    projectName={"blog-website-fe"} 
                    projectDescription={"Made an blog website frontend for a client"}
                    date={"Dec 12 2024"}
                    link={"https://github.com/dhyey1015/blog-website-frontend"}
                />
            </div>
        </div>
        
    )
}