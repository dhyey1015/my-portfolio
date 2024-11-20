    import { useState } from "react";
    import { AppBarButton } from "./AppBarButton";
    import { 
        ContactMeIconSVG, 
        EducationIconSVG, 
        ExperienceIconSVG, 
        HomeIconSVG, 
        ProjectIconSVG 
    } from "./Svgs";
import { ThreeLineButton } from "./ThreeLineButton";
import { SymboleSignature } from "./SymboleSignature";

    export function AppBar(){
        
        return(
            <div className="flex justify-between border border-gray-300">
                <div className="pl-8">
                    <SymboleSignature/>
                </div>
                <div className="xl:hidden p-5">
                    <ThreeLineButton/>
                </div>
                <div className="hidden xl:flex pr-8">
                    <div className="flex justify-between">
                        <div className="p-1">
                            <AppBarButton label={"Home"} component={HomeIconSVG}/>
                        </div >
                        <div className="p-1">
                            <AppBarButton label={"Education"}component={EducationIconSVG} />
                        </div>
                        <div className="p-1">
                            <AppBarButton label={"Experience"} component={ExperienceIconSVG} />
                        </div>
                        <div className="p-1">
                            <AppBarButton label={"Projects"} component={ProjectIconSVG} />
                        </div>
                        <div className="p-1">
                            <AppBarButton label={"Contact Me"} component={ContactMeIconSVG} />
                        </div>
                    </div>
                </div>
            </div>
        )
    }