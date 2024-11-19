import { AppBarButton } from "../AppBarButton";
import { 
    ContactMeIconSVG, 
    EducationIconSVG, 
    ExperienceIconSVG, 
    HomeIconSVG, 
    ProjectIconSVG 
} from "./Svgs";

export function AppBar(){

    return(
        <div className="flex justify-between border border-gray-300">
            <div className="pl-8 pb-1">
                <button>
                    <div className="p-5 text-5xl font-bold">
                        Dhyey Kakadiya
                    </div>
                </button>
            </div>
            <div className="pr-8">
                <div className="flex justify-between">
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
                        <AppBarButton label={"Contact Me"} component={ContactMeIconSVG} />
                    </div>
                </div>
            </div>
        </div>
    )
}