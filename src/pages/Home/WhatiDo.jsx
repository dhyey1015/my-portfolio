import { BulletPointIcon } from "./SvgsHome";


export function WhatiDo(){

    return(
       <>
        <div className="flex justify-center">
                <div className="flex max-w-[1200px] w-[1200px] h-max[1000px] h-[500px]">
                    <div className="max-w[600] w-[600px]">
                    <div className="text-left py-20 px-16">
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
                    <div className="pt-12">
                        <div class="h-[400px] min-h-[1em] w-[3px] self-stretch bg-gradient-to-tr from-transparent bg-slate-300 to-transparent opacity-25 dark:bg-slate-800"></div>
                    </div>
                    <div className="max-w[600] w-[600px]">
                        <img className="py-20" src="images/fullsatcksideimage4.png" alt="" />
                    </div>
                </div>
            </div>
            <div className="flex justify-center p-10">
                {/*start profile and introduction */}
                <div className="flex max-w-[1200px] w-[1200px] h-max[1000px] h-[500px]">
                    <div className="flex justify-center max-w-[600px] w-[600px] h-max[400px] h-[400x] pt-[50px]">
                        <img className="h-[400px] w-[400px]" src="images/cloudinfraimage1.png" alt="" />
                    </div>
                    <div className="pt-12">
                        <div class="h-[400px] min-h-[1em] w-[3px] self-stretch bg-gradient-to-tr from-transparent bg-slate-300 to-transparent opacity-25 dark:bg-slate-800"></div>
                    </div>
                    <div className="flex items-center w-[550px] pl-24">
                        <div className="text-left">
                            <span className="font-bold text-4xl">
                                Cloud Infra-Architecture
                            </span>
                            <br />
                            <br />
                            <span className="flex justify-start">
                                <div className="pi-3 pr-4">
                                    <BulletPointIcon/> 
                                </div>
                                <div className="text-xl">
                                    I have experience working with cloud platforms such as Cloudflare Workers and AWS
                                </div>
                            </span>
                            <br />
                            <span className="flex justify-start">
                                <div className="pi-3 pr-4">
                                    <BulletPointIcon/> 
                                </div>
                                <div className="text-xl">
                                    I am skilled in database management with MongoDB and PostgreSQL.
                                </div>
                            </span>
                        </div> 
                    </div>
                </div>
                {/*end profile and introduction */}
            </div>

            <div className="flex justify-center">
                <div className="flex max-w-[1200px] w-[1200px] h-max[1000px] h-[500px]">
                    <div className="max-w[600] w-[600px]">
                    <div className="text-left py-20 px-16">
                            <span className="font-bold text-4xl">
                                UI Design
                            </span>
                            <br />
                            <br />
                            <span className="flex justify-start">
                                <div className="pi-3 pr-4">
                                    <BulletPointIcon/> 
                                </div>
                                <div className="text-xl">
                                    I am skilled in Tailwind CSS and standard CSS
                                </div>
                            </span>
                            <br />
                            <span className="flex justify-start">
                                <div className="pi-3 pr-4">
                                    <BulletPointIcon/> 
                                </div>
                                <div className="text-xl">
                                    I excel at creating visually appealing and user-friendly UI designs.
                                </div>
                            </span>
                        </div> 
                    </div>
                    <div className="pt-12">
                        <div class="h-[400px] min-h-[1em] w-[3px] self-stretch bg-gradient-to-tr from-transparent bg-slate-300 to-transparent opacity-25 dark:bg-slate-800"></div>
                    </div>
                    <div className="max-w[600] w-[600px]">
                        <img className="py-20" src="images/fullsatcksideimage4.png" alt="" />
                    </div>
                </div>
            </div>
            
       </>
    )
}