import { NavLink } from "react-router";
export function SideBar() {
    return (
        <>
            <div className="flex h-screen  overflow-hidden ">
                <aside className="h-full w-60 bg-black text-white">
                    <div className="flex items-center justify-left m-5">
                        <p className="font-bold text-3xl">BookVault</p>
                    </div>
                    <hr />
                    <div className="flex flex-col items-right gap-3 m-5">
                        <NavLink to='/' className="cursor-pointer text-sm font-medium
                             transition-all duration-200
                             hover:bg-white/10 hover:text-white hover:pl-2
                             px-3 py-2 rounded-lg block">
                            Dashboard
                        </NavLink>                            
                        <NavLink to='/books' className="cursor-pointer px-3 text-sm font-medium
                         transition-all duration-200 hover:bg-white/10 hover:pl-2 py-2 rounded-lg block">Books</NavLink>
                        
                        <NavLink to='/authors' className="cursor-pointer px-3 py-2 font-medium text-sm 
                        transition-all duration-200 hover:bg-white/10 hover:pl-2 rounded-lg block">Author</NavLink>

                    </div>
                </aside>
            </div>
        </>
    )

}