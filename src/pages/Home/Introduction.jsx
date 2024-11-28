
export function Introduction(){

    return(
        <div className="flex justify-center p-10">
                {/*start profile and introduction */}
            <div className="flex max-w-[1200px] w-[1200px] h-max[1000px] h-[500px]">
                <div className="flex justify-center max-w-[600px] w-[600px] h-max[400px] h-[400x] pt-[50px]">
                    <img className="rounded-full h-[400px] w-[400px]" src="images/myprofile.png" alt="" />
                </div>
                <div className="pt-12">
                    <div class="h-[400px] min-h-[1em] w-[3px] self-stretch bg-gradient-to-tr from-transparent bg-slate-300 to-transparent opacity-25 dark:bg-slate-800"></div>
                </div>
                <div className="flex items-center w-[500px] pl-24">
                    <div className="text-left">
                        <span className="text-2xl">
                            Hi, there
                        </span>
                        <br />
                        <br />
                        <span className="text-2xl">
                            I am
                        </span>
                        <br />
                        <span className="font-bold text-4xl">
                            Dhyey Kakadiya,
                        </span>
                        <br />
                        <br />
                        <span className="text-xl">
                            I'm a B.E. Computer Engineering student at Gujarat Technological University, training to be a Full Stack Developer. With skills in Django, JavaScript, HTML, and CSS, I build full-stack applications. I excel in problem-solving, teamwork, and communication, and enjoy programming and competitive coding.
                        </span>
                    </div> 
                </div>
            </div>
                {/*end profile and introduction */}
        </div>
    )
}