import Sidebar from "@/components/Sidebar.jsx";
import Header from "@/Header.jsx";
import {Outlet} from "react-router-dom";
import {useSelector} from "react-redux";

export default function Layout() {
    const {isMinimized} = useSelector(state => state.DashBoardSlice);
    return (
        <>
            <Sidebar/>
            <main className={` ${!isMinimized ? 'ml-72 ' : 'ml-[80px]'} h-screen`}>
                <Header />
                <div className={''}>
                    <Outlet/>
                </div>
            </main>
        </>
    )
}