import { SideBar } from "./Sidebar.jsx";
import { Outlet } from "react-router";


export function Layout(){
    return(
        <div className="flex h-screen overflow-hidden">
                            <SideBar/>
            <main className=" flex-1 overflow-y-auto m-5 p-5">
                    <Outlet></Outlet>
            </main>
        </div>
    )
}