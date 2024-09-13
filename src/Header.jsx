import {Link} from "react-router-dom";
import {Input} from "@/components/ui/input.jsx";
import {
    DropdownMenu,
    DropdownMenuContent, DropdownMenuItem,
    DropdownMenuLabel, DropdownMenuSeparator,
    DropdownMenuTrigger
} from "@/components/ui/dropdown-menu.jsx";
import {Button} from "@/components/ui/button.jsx";
import {Package2Icon} from "lucide-react";
import  userImage from "@/assets/user.png"
export default function Header(){
    return (
        <header className="flex items-center h-16 px-4 border-b shrink-0 md:px-6">
            {/*<Link href="#" className="flex items-center gap-2 text-lg font-semibold md:text-base"*/}
            {/*      prefetch={false}>*/}
            {/*    <Package2Icon className="w-6 h-6"/>*/}
            {/*    <span className="sr-only">Acme Inc</span>*/}
            {/*</Link>*/}
            {/*<div className="relative flex-1 ml-4 md:ml-6">*/}
            {/*    <div className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground"/>*/}
            {/*    <Input*/}
            {/*        type="search"*/}
            {/*        placeholder="Search..."*/}
            {/*        className="w-full rounded-lg bg-background pl-8 md:w-[200px] lg:w-[336px]"*/}
            {/*    />*/}
            {/*</div>*/}
            <div className="flex items-center gap-2 ml-auto">
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="outline" size="icon" className="overflow-hidden rounded-full">
                            <img
                                src={userImage}
                                width="32"
                                height="32"
                                className="rounded-full"
                                alt="Avatar"
                                style={{aspectRatio: "32/32", objectFit: "cover"}}
                            />
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                        <DropdownMenuLabel>My Account</DropdownMenuLabel>
                        <DropdownMenuSeparator/>
                        <DropdownMenuItem>Settings</DropdownMenuItem>
                        <DropdownMenuItem>Support</DropdownMenuItem>
                        <DropdownMenuSeparator/>
                        <DropdownMenuItem>Logout</DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
        </header>
    )
}