import {navItems} from './data';
import {useSidebar} from '@/hooks/use-sidebar';
import {cn} from '@/lib/utils';
import {ChevronsLeft} from 'lucide-react';
import {useState} from 'react';
import DashboardNav from "@/components/DashboardNav.jsx";
import {useDispatch, useSelector} from "react-redux";
import {setIsMinimized} from "@/Slices/DashBoardSlice.js";
import spIcon from "@/assets/logo.png"
export default function Sidebar() {
    // const [isMinimized, setIsMinimized] = useState(false);
    const [status, setStatus] = useState(false);
    const {isMinimized} = useSelector(state => state.DashBoardSlice);
    const dispatch = useDispatch();
    const handleToggle = () => {
        console.log('ayush')
        setStatus(true);
        dispatch(setIsMinimized(!isMinimized));
        setTimeout(() => setStatus(false), 500);
    };




    return (
        <nav
            className={cn(
                `relative z-50 hidden fixed bg-white border-r transition h-screen flex-none  px-3 md:block`,
                status && 'duration-1000',
                !isMinimized ? 'w-72 ' : 'w-[80px] delay-1000 transition',
            )}


        >
            <div
                className={cn(
                    'flex items-center px-0 py-5 justify-between md:px-2',
                    // isMinimized ? 'justify-center ' : 'justify-between'
                )}
            >
                {/*{!isMinimized && <h1 className="text-2xl font-bold">*/}
                {/*    <img src={spIcon} className={'size-8/12 '} alt={'spIcon'}/>*/}
                {/*</h1>}*/}
                <ChevronsLeft
                    className={cn(
                        'size-8 cursor-pointer rounded-full bg-background text-foreground',
                        isMinimized && 'rotate-180'
                    )}
                    onClick={handleToggle}
                />
            </div>
            <div className="space-y-4 py-4">
                <div className="px-2 py-2">
                    <div className="mt-3 space-y-1">
                        <DashboardNav items={navItems}/>
                    </div>
                </div>
            </div>
        </nav>
    );
}
