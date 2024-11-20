import { useState } from "react";
import { MenuIconSVG } from "./Svgs";
import { AppBarButton } from "./AppBarButton";
import { 
    ContactMeIconSVG, 
    EducationIconSVG, 
    ExperienceIconSVG, 
    HomeIconSVG, 
    ProjectIconSVG 
} from "./Svgs";


export function ThreeLineButton(){

    const [menuVisible, setMenuVisible] = useState(false)
    function toggleMenu(){
        setMenuVisible(!menuVisible)
    }

    return(

        <div className="relative inline-block">
            
            <button className="p-3 focus:outline-none" onClick={toggleMenu}>
                <MenuIconSVG />
            </button>

                {menuVisible && (
                    <div className="absolute top-12 right-0 bg-slate-100 rounded-xl">
                        <div className="p-">
                            <div className="p-2">
                                <AppBarButton label={"Home"} component={HomeIconSVG}/>
                            </div >
                            <div className="p-2">
                                <AppBarButton label={"Education"}component={EducationIconSVG} />
                            </div>
                            <div className="p-2">
                                <AppBarButton label={"Experience"} component={ExperienceIconSVG} />
                            </div>
                            <div className="p-2">
                                <AppBarButton label={"Projects"} component={ProjectIconSVG} />
                            </div>
                            <div className="p-2">
                                <AppBarButton label={"Contact"} component={ContactMeIconSVG} />
                            </div>
                        </div>
                    </div>
                )} 
        </div>
    )
}