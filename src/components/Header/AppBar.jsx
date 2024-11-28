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
import { useLocation, useNavigate } from "react-router-dom";

    export function AppBar(){
        // const location = useLocation()
        const navigate = useNavigate()
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
                            <AppBarButton label={"Home"} component={HomeIconSVG} onClick={function() {navigate('/home')}}/>
                        </div >
                        <div className="p-1">
                            <AppBarButton label={"Education"} component={EducationIconSVG} onClick={function(){navigate('/education')}} />
                        </div>
                        <div className="p-1">
                            <AppBarButton label={"Experience"} component={ExperienceIconSVG} onClick={function(){navigate('/experience')}} />
                        </div>
                        <div className="p-1">
                            <AppBarButton label={"Projects"} component={ProjectIconSVG} onClick={function(){navigate('/projects')}}/>
                        </div>
                        <div className="p-1">
                            <AppBarButton label={"Contact Me"} component={ContactMeIconSVG} onClick={function(){navigate('/contactme')}}/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }