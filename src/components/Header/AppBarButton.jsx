
export function AppBarButton({label, component: Component, onClick}){

    return(
        <button className="p-3 hover:bg-slate-100" onClick={onClick}>
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