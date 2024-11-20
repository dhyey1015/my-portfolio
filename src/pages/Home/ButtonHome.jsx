

export function HomeButton({label, component: Component, onClick}){

    return(
        <button className="" onClick={onClick}>
            <div className="flex">
                <div className="">
                    {Component && <Component />}
                </div>
                <div className="text-lg font-medium pl-1">
                    {label}
                </div>
            </div>
        </button>
    )
}