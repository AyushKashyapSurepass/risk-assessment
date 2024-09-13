import Sidebar from "@/components/Sidebar.jsx";
import Header from "@/Header.jsx";
import {Outlet} from "react-router-dom";
import {useSelector} from "react-redux";

export default function Layout() {
    const {isMinimized} = useSelector(state => state.DashBoardSlice);
    return (
        // <div className={'flex border border-red-600 gap-10'}>
        //     <Sidebar/>
        //     <main className={` border border-amber-500 ${!isMinimized ? 'ml-72 ' : 'ml-[80px]'} w-full h-screen`}>
        //         {/*<Header />*/}
        //         {/*<div className={''}>*/}
        //         {/*    <Outlet/>*/}
        //         {/*</div>*/}
        //     </main>
        // </div>
        <div className="flex h-full overflow-hidden">
            <Sidebar className={isMinimized ? 'w-20' : 'w-72'}/>
            <div className="flex flex-col flex-grow overflow-hidden">
                <Header/>
                <main className={`flex-grow h-full overflow-auto ${ isMinimized ? 'ml-20' : 'ml-72' } p-6`}>
                    <Outlet/>
                </main>
            </div>
        </div>
    )
}