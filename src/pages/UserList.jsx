import React, { useEffect, useState } from 'react';
import axiosInstance from '../AxiosInstance/axiosInstance';
import { Play } from 'lucide-react';
import { Loader2 } from 'lucide-react';
import { Pencil } from 'lucide-react';
import { toast } from 'sonner';
import { ChevronDown } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import PageTitle from './pageTitle';
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
import { Input } from '../components/ui/input';
import { original } from '@reduxjs/toolkit';
const data = [
    {
        id: "m5gr84i9",
        amount: 316,
        status: "success",
        name: "Himanshu",
        email: "ken99@yahoo.com",
    },
    {
        id: "3u1reuv4",
        amount: 242,
        status: "success",
        name: "Rai",
        email: "Abe45@gmail.com",
    },
    {
        id: "derv1ws0",
        amount: 837,
        name: "Rahul",
        status: "processing",
        email: "Monserrat44@gmail.com",
    },
    {
        id: "5kma53ae",
        amount: 874,
        name: "kajol",
        status: "success",
        email: "Silas22@gmail.com",
    },
    {
        id: "bhqecj4p",
        amount: 721,
        name: "Singh",
        status: "failed",
        email: "carmella@hotmail.com",
    },
]

export const columns = [
    // {
    //     id: "select",
    //     header: ({ table }) => (
    //         <Checkbox
    //             checked={
    //                 table.getIsAllPageRowsSelected() ||
    //                 (table.getIsSomePageRowsSelected() && "indeterminate")
    //             }
    //             onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
    //             aria-label="Select all"
    //         />
    //     ),
    //     cell: ({ row }) => (
    //         <Checkbox
    //             checked={row.getIsSelected()}
    //             onCheckedChange={(value) => row.toggleSelected(!!value)}
    //             aria-label="Select row"
    //         />
    //     ),
    //     enableSorting: false,
    //     enableHiding: false,
    // },

    {
        accessorKey: "full_name",
        header: ({ column }) => (
            <div>Name</div>
        ),
        cell: ({ row }) => (
            <div className="text-start">
                {row.getValue("full_name") ? row.getValue("full_name") : "-"}
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

    {
        accessorKey: "action",
        header: () => <div className="text-start">Action</div>,
        cell: ({ row }) => <div className="lowercase  text-start">{row.getValue("action")}</div>,

    },



]

function UserList() {
    const [sorting, setSorting] = React.useState([]);
    const [columnFilters, setColumnFilters] = React.useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [columnVisibility, setColumnVisibility] = React.useState({});
    const [rowSelection, setRowSelection] = React.useState({});
    const [selectedRow, setSelectedRow] = useState();
    const [openDialog, setOpenDialog] = useState(false)
    const [dialog, setDialog] = useState(false)
    const [user, setUsers] = useState([])
    const [formState, setFormState] = useState({ name: '', email: '' });
  

    // const data = user?.data || []

   console.log("selectedRowselectedRow",selectedRow);
   
    // Handle change events for the input fields
    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormState((prevState) => ({
            ...prevState, // Keep other fields intact
            [id]: value,  // Dynamically update the field based on its 'id'
        }));
    };

    const navigate = useNavigate();

  const handleNevigateClick = (row) => {
    console.log("handleNevigateClick",row);
    
    navigate('/result');
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


    const postUser = async (body) => {
        setLoading(true);
        setError(null);
        try {
            const response = await axiosInstance.post('/admin/init', body);
            if (response) {
                setOpenDialog(false)
            }

            console.log('Response:', response.data);
            return response.data;
        } catch (error) {
            console.log("error", error?.response?.data?.message);
            toast.error(error?.response?.data?.message || "Something went wrong, please try again.");
            // setError(error.response ? error.response.data : error.message);
            console.error('Error posting user:', error);
            throw error;
        } finally {
            setLoading(false);
        }
    };


    const getList = async () => {
        try {
            // setLoading(true); // Set loading state to true
            const response = await axiosInstance.get('/admin/get-users');
            console.log('Response:', response.data);
            setUsers(response.data); // Set the fetched data to state
        } catch (error) {
            console.error('Error fetching users:', error.response ? error.response.data : error.message);
            // setError(error); // Optionally set error state
        } finally {
            // setLoading(false); // Set loading state to false
        }
    };

    useEffect(() => {
        getList(); // Call the getList function inside useEffect
    }, []);

    const handleClick = () => {

        console.log("Himanshu");

        setFormState({ name: '', email: '' })
        setLoading(false)
        setOpenDialog(!openDialog)
    }

    const handleSubmit = async () => {
        console.log("Himansshu");

        const formData = {
            name: formState.name,
            email: formState.email,
        };

        try {
            const result = await postUser(formData);
            console.log('User data saved:', result);
            setOpenDialog(false);
        } catch (error) {
            console.error('Error while saving user data:', error);
        }
    };


    const handleDialogClick = () => {
        console.log("handleClickhandleClick", table.getSelectedRowModel());
        setDialog(!dialog)
    }

    return (
        <div className='mx-10 my-[50px]'>
             <PageTitle
                title={'UserList'}
                subtitles={'Welcome to the Users Page! Here, you can kickstart workflows to simplify and optimize your processes. Build efficient, automated workflows that help you manage tasks seamlessly, ensuring everything runs smoothly and effortlessly'}
            />

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
                                Create +
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
                                        required
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
                                        required
                                    />
                                </div>
                            </div>
                            <DialogFooter className="flex justify-end space-x-2">
                                <Button variant="outline" onClick={handleClick}>
                                    Cancel
                                </Button>
                                <Button type="submit" className="bg-blue-700 hover:bg-blue-700 text-white px-4 py-2 rounded-md" onClick={handleSubmit}>
                                    {loading ? (
                                        <>

                                            <Loader2 className="mr-2 h-4 w-4 animate-spin" />

                                            Please wait

                                        </>
                                    ) : (
                                        "Create"
                                    )}
                                </Button>
                            </DialogFooter>
                        </DialogContent>
                    </Dialog>
                    <Dialog open={dialog} onOpenChange={handleDialogClick}>
                        
                        <DialogContent className="sm:max-w-[600px] p-6 rounded-lg shadow-lg">
                            <DialogHeader>
                                <DialogTitle className="text-lg font-semibold text-start mb-4">
                                    Question List
                                </DialogTitle>
                                <DialogDescription>
                                    <DialogDescription>
                                        Review the list of questions below .
                                    </DialogDescription>
                                </DialogDescription>
                            </DialogHeader>
                            <div className="grid gap-4 py-4">
                                <Input value={selectedRow?.original?.email} disabled={true}></Input>
                                <Select>
                                    <SelectTrigger className="w-full">
                                        <SelectValue placeholder="Select Any one of them" />
                                        <ChevronDown className='h-4'/>
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
                            <DialogFooter className="flex justify-end space-x-2 ">
                                <Button variant="outline" onClick={handleDialogClick}>
                                    Cancel
                                </Button>
                                <Button type="submit" className="bg-blue-700 hover:bg-blue-700 text-white px-4 py-2 rounded-md">
                                    Send
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
                                        onClick={()=>handleNevigateClick(row)}
                                    >
                                        {row.getVisibleCells().map((cell) => {
                                            const columnId = cell.getContext().column.id;
                                            console.log("columnId", columnId);
                                            let cellContent = flexRender(
                                                cell.column.columnDef.cell,
                                                cell.getContext()
                                            );

                                            if (columnId === "action") {
                                                cellContent = (
                                                    <div className='flex p-0'>
                                                        <div key={row.id} className='flex p-0'>
                                                            <Play className='w-6 h-4 cursor-pointer '  color="blue" onClick={(e) => {
                                                                e.stopPropagation();
                                                                setDialog(true);
                                                                setSelectedRow(row);
                                                            }} />
                                                        </div>
                                                    </div>
                                                );
                                            }
                                            return (
                                                <TableCell key={cell.id} className="h-[60px]">
                                                    {cellContent}
                                                </TableCell>
                                            );
                                        })}
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







