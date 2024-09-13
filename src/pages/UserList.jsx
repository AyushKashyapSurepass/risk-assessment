import React, { useEffect, useState } from 'react';
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from '../components/ui/table';
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from '../components/ui/select';
import { Badge } from '../components/ui/badge';
import {
    flexRender,
    getCoreRowModel,
    getFilteredRowModel,
    getPaginationRowModel,
    getSortedRowModel,
    useReactTable,
} from '@tanstack/react-table';
import { Button } from '../components/ui/button';
import { ArrowUpDown } from 'lucide-react';
import { Checkbox } from '../components/ui/checkbox';
import {
    Dialog, DialogContent,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
    DialogOverlay,
    DialogDescription
} from '../components/ui/dialog'
import { Label } from "@/components/ui/label"
import { DropdownMenuCheckboxItem } from '../components/ui/dropdown-menu';
import {

    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from '../components/ui/dropdown-menu';

import { Input } from '../components/ui/input';


const data = [
    {
        id: "m5gr84i9",
        amount: 316,
        status: "success",
        name:"Himanshu",
        email: "ken99@yahoo.com",
    },
    {
        id: "3u1reuv4",
        amount: 242,
        status: "success",
        name:"Rai",
        email: "Abe45@gmail.com",
    },
    {
        id: "derv1ws0",
        amount: 837,
        name:"Rahul",
        status: "processing",
        email: "Monserrat44@gmail.com",
    },
    {
        id: "5kma53ae",
        amount: 874,
        name:"kajol",
        status: "success",
        email: "Silas22@gmail.com",
    },
    {
        id: "bhqecj4p",
        amount: 721,
        name:"Singh",
        status: "failed",
        email: "carmella@hotmail.com",
    },
]

export const columns = [
    {
        id: "select",
        header: ({ table }) => (
            <Checkbox
                checked={
                    table.getIsAllPageRowsSelected() ||
                    (table.getIsSomePageRowsSelected() && "indeterminate")
                }
                onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
                aria-label="Select all"
            />
        ),
        cell: ({ row }) => (
            <Checkbox
                checked={row.getIsSelected()}
                onCheckedChange={(value) => row.toggleSelected(!!value)}
                aria-label="Select row"
            />
        ),
        enableSorting: false,
        enableHiding: false,
    },
    
    {
        accessorKey: "name",
        header: ({ column }) => (
            <div>Name</div>
        ),
        cell: ({ row }) => (
            <div className="text-start">
                {row.getValue("name")}
            </div>
        ),
    },

    {
        accessorKey: "email",
        header: ({ column }) => {
            return (
                <Button
                    variant="ghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}

                >
                    Email
                    <ArrowUpDown className="ml-2 h-4 w-4" />
                </Button>
            )
        },
        cell: ({ row }) => <div className="lowercase">{row.getValue("email")}</div>,
    },
    
   


    {
        accessorKey: "status",
        header: ({ column }) => (
            <div>Status</div>


        ),
        cell: ({ row }) => {

            console.log("row", row.getValue("status"));

            return (
                <div className="text-start">
                    <Badge
                        variant="outline"
                        className={`rounded-full px-2  
                    ${row.getValue("status") === "success" && "bg-green-100 text-green-700"}
                   ${row.getValue("status") === "processing" && "bg-blue-200 text-blue-700"}
                  ${row.getValue("status") === "failed" && "bg-rose-200 text-red-700"}
               `}
                    >
                        {row.getValue("status")}
                    </Badge>
                </div>

            );
        },

    },


]



function UserList() {
    const [sorting, setSorting] = React.useState([]);
    const [columnFilters, setColumnFilters] = React.useState([]);
    const [columnVisibility, setColumnVisibility] = React.useState({});
    const [rowSelection, setRowSelection] = React.useState({});
    const [selectedRow, setSelectedRow] = useState();
    const [openDialog, setOpenDialog] = useState(false)
    const [dialog, setDialog] = useState(false)
     const [formState, setFormState] = useState({ name: '', email: '' });

    // Handle change events for the input fields
    const handleChange = (e) => {
      const { id, value } = e.target;
      setFormState((prevState) => ({
        ...prevState, // Keep other fields intact
        [id]: value,  // Dynamically update the field based on its 'id'
      }));
    };
  
  

    const table = useReactTable({
        data,
        columns,
        onSortingChange: setSorting,
        onColumnFiltersChange: setColumnFilters,
        getCoreRowModel: getCoreRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
        getSortedRowModel: getSortedRowModel(),
        getFilteredRowModel: getFilteredRowModel(),
        onColumnVisibilityChange: setColumnVisibility,
        onRowSelectionChange: setRowSelection,
        state: {
            sorting,
            columnFilters,
            columnVisibility,
            rowSelection,
        },
    });

    const handleClick = () => {
        setOpenDialog(!openDialog)


    }


    const handleDialogClick = () => {
        console.log("handleClickhandleClick", table.getSelectedRowModel());
        setDialog(!dialog)
    }

    return (
        <div className='mx-10 my-[50px]'>
            <div className="flex items-center justify-between py-4">
                <Input
                    placeholder="Filter emails..."
                    value={(table.getColumn("email")?.getFilterValue()) ?? ""}
                    onChange={(event) =>
                        table.getColumn("email")?.setFilterValue(event.target.value)
                    }
                    className="max-w-sm"
                />
                <div className='space-x-4'>
                    <Dialog open={openDialog} onOpenChange={handleClick}>
                        <DialogTrigger asChild>
                            <Button variant="outline" onClick={handleClick}>
                                Create
                            </Button>
                        </DialogTrigger>
                        <DialogContent className="sm:max-w-[560px] p-6 rounded-lg shadow-lg">
                            <DialogHeader>
                                <DialogTitle className="text-lg font-semibold text-start mb-4">
                                   Edit Profile
                                </DialogTitle>
                                <DialogDescription>
                                Update your profile details below. Click 'Save Changes' once you're done.
                                </DialogDescription>
                            </DialogHeader>
                            <div className="grid gap-4 py-4">
                                <div className="flex flex-col space-y-2">
                                    <Label htmlFor="name" className="font-medium">
                                        Name
                                    </Label>
                                    <Input
                                        id="name"
                                        className="w-full border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        placeholder="Enter your name"
                                        value={formState.name}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="flex flex-col space-y-2">
                                    <Label htmlFor="email" className="font-medium">
                                        Email
                                    </Label>
                                    <Input
                                        id="email"
                                        className="w-full border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        placeholder="Enter your email"
                                        value={formState.email}
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>
                            <DialogFooter className="flex justify-end space-x-2">
                                <Button variant="outline" onClick={handleClick}>
                                    Cancel
                                </Button>
                                <Button type="submit" className="bg-blue-700 hover:bg-blue-700 text-white px-4 py-2 rounded-md">
                                    Save changes
                                </Button>
                            </DialogFooter>
                        </DialogContent>
                    </Dialog>
                    <Dialog open={dialog} onOpenChange={handleDialogClick}>
                        <DialogTrigger >
                            <Button className="bg-blue-700 hover:bg-blue-700 " >
                                Dispatch +
                            </Button>
                        </DialogTrigger>
                        <DialogContent className="sm:max-w-[600px] p-6 rounded-lg shadow-lg">
                            <DialogHeader>
                                <DialogTitle className="text-lg font-semibold text-center mb-4">
                                    User Question
                                </DialogTitle>
                            </DialogHeader>
                            <div className="grid gap-4 py-4">
                                <Select>
                                    <SelectTrigger className="w-full">
                                        <SelectValue placeholder="Select Any one of them" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectGroup>
                                            <SelectLabel>Fruits</SelectLabel>
                                            <SelectItem value="apple">Apple</SelectItem>
                                            <SelectItem value="banana">Banana</SelectItem>
                                            <SelectItem value="blueberry">Blueberry</SelectItem>
                                            <SelectItem value="grapes">Grapes</SelectItem>
                                            <SelectItem value="pineapple">Pineapple</SelectItem>
                                        </SelectGroup>
                                    </SelectContent>
                                </Select>

                            </div>
                            <DialogFooter className="flex justify-end space-x-2">
                                <Button variant="outline" onClick={handleDialogClick}>
                                    Cancel
                                </Button>
                                <Button type="submit" className="bg-blue-700 hover:bg-blue-700 text-white px-4 py-2 rounded-md">
                                    Save changes
                                </Button>
                            </DialogFooter>
                        </DialogContent>
                    </Dialog>
                </div>

            </div>

            <div>
                <div className="rounded-md border ">
                    <Table>
                        <TableHeader>
                            {table.getHeaderGroups().map((headerGroup) => (
                                <TableRow key={headerGroup.id}>
                                    {headerGroup.headers.map((header) => {
                                        return (
                                            <TableHead key={header.id} >
                                                {header.isPlaceholder
                                                    ? null
                                                    : flexRender(
                                                        header.column.columnDef.header,
                                                        header.getContext()
                                                    )}
                                            </TableHead>
                                        );
                                    })}
                                </TableRow>
                            ))}
                        </TableHeader>
                        <TableBody>
                            {table.getRowModel().rows?.length ? (
                                table.getRowModel().rows.map((row) => (
                                    <TableRow
                                        key={row.id}
                                        data-state={row.getIsSelected() && "selected"}
                                    >
                                        {row.getVisibleCells().map((cell) => (
                                            <TableCell key={cell.id} className="h-[50px]">
                                                {flexRender(
                                                    cell.column.columnDef.cell,
                                                    cell.getContext()
                                                )}
                                            </TableCell>
                                        ))}
                                    </TableRow>
                                ))
                            ) : (
                                <TableRow>
                                    <TableCell colSpan={columns.length} className="h-24 text-center">
                                        No results.
                                    </TableCell>
                                </TableRow>
                            )}
                        </TableBody>




                    </Table>




                </div>

                <div className='flex items-center  justify-center  mt-4  mb-6 '>
                    <div className='hidden mr-4 text-sm text-muted-foreground sm:block'>
                        {table.getFilteredSelectedRowModel().rows.length} of{' '}
                        {table.getFilteredRowModel().rows.length} row(s) selected.
                    </div>
                    <div className='flex items-center sm:space-x-6 lg:space-x-8'>

                        <div className='flex  items-center justify-center text-sm font-medium'>
                            Page {table.getState().pagination.pageIndex + 1} of{' '}
                            {table.getPageCount()}
                        </div>
                        <div className='flex items-center space-x-2'>

                            <Button
                                variant='outline'
                                className='h-8  '
                                onClick={() => table.previousPage()}
                                disabled={!table.getCanPreviousPage()}
                            >
                                Previous
                            </Button>
                            <Button
                                variant='outline'
                                className='h-8  '
                                onClick={() => table.nextPage()}
                                disabled={!table.getCanNextPage()}
                            >
                                Next
                            </Button>

                        </div>
                    </div>

                </div>

            </div>
        </div>
    );
}

export default UserList







