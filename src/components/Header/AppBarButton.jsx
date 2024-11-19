
export function AppBarButton({label, component: Component}){

    return(
        <button className="p-5 hover:bg-slate-100">
            <div className="flex">
                <div className="pt-0.5">
                    {Component && <Component />}
                </div>
                <div className="text-2xl font-medium pl-3">
                    {label}
                </div>
            </div>
            
        </button>
    )
}