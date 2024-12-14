import { ExpCard } from './components/ExpCard'

export function Experience(){

    return(
        <div>
            <div className="flex justify-center">
                <div className="flex justify-center items-center w-max-[600px] w-[600px] h-max-[600px] h-[600px]">
                    <div className="flex flex-col justify-center items-center w-max-[500px] w-[500px] h-max-[500px] h-[500px] ">
                        <div className="justify-self-center text-5xl font-extrabold p-3">
                            Experience

                        </div>
                        <div className="justify-self-center text-3xl font-bold p-2">
                            Work and Internship
                        </div>
                        <div className="text-center text-xl ">
                            I have worked as a developer and designer in a dynamic startup environment. I also enjoy contributing to open-source projects for various companies.
                        </div>
                    </div>
                </div>
                <img src="images/exp-photo1.png" className="w-max-[600px] w-[600px] h-max-[600px] h-[600px]" alt="" />
            </div>
            <div className="flex justify-center text-4xl p-12 font-extrabold">
                Internship 
            </div>
            <div>
                <ExpCard/>
            </div>
            <div className="flex justify-center text-4xl p-12 font-extrabold">
                Open Source 
            </div>
        </div>

    )
}