// import { Icons } from '@/components/ui/icons';
import { cn } from '@/lib/utils';
import { useSidebar } from '@/hooks/use-sidebar';
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger
} from '@/components/ui/tooltip';
// import { usePathname } from '@/routes/hooks';
import { Link } from 'react-router-dom';
import {usePathname} from "@/hooks/use-pathname.jsx";
import {useSelector} from "react-redux";

export default function DashboardNav({ items, setOpen, isMobileNav = false }) {
    const path = usePathname();
    const {isMinimized} = useSelector(state => state.DashBoardSlice);

    if (!items?.length) {
        return null;
    }

    // console.log('isActive', isMobileNav, isMinimized);
    // console.log(items, setOpen, isMobileNav, "hello")
    console.log(path)
    return (
        <nav className="grid items-start gap-2">
            <TooltipProvider>
                {items.map((item, index) => {
                    // const Icon = Icons[item.icon || 'arrowRight'];
                    return (
                        item.href && (
                            <Tooltip key={index}>
                                <TooltipTrigger asChild>
                                    <Link
                                        to={item.disabled ? '/' : item.href}
                                        className={cn(
                                            'flex items-center gap-2 gap-4 overflow-hidden rounded-md py-2 text-sm font-medium',
                                            path === item.href
                                                ? 'bg-blue-700 shadow-md text-white hover:text-white hover:bg-blue-600'
                                                : 'text-text_lite',
                                            item.disabled && 'cursor-not-allowed opacity-80'
                                        )}
                                        onClick={() => {
                                            if (setOpen) setOpen(false);
                                        }}
                                    >
                                        <item.icon className={`ml-2.5 size-5`} />

                                        {isMobileNav || (!isMinimized && !isMobileNav) ? (
                                            <span className="mr-2 text-sm truncate">{item.title}</span>
                                        ) : (
                                            ''
                                        )}
                                    </Link>
                                </TooltipTrigger>
                                <TooltipContent
                                    align="center"
                                    side="right"
                                    sideOffset={8}
                                    className={!isMinimized ? 'hidden' : 'inline-block bg-blue-700 text-sm text-white'}
                                >
                                    {item.title}
                                </TooltipContent>
                            </Tooltip>
                        )
                    );
                })}
            </TooltipProvider>
        </nav>
    );
}
