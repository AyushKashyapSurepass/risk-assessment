import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"

export default function InitiateUser() {
    return (
        <div className={'grid-cols-2 grid '}>
        <div className="w-full max-w-2xl mx-auto bg-white border rounded-lg shadow-lg m-6 p-6">
            <div className="flex justify-between items-center border-b pb-4 mb-4">
                <h2 className="text-xl font-semibold">New Documents</h2>
                {/*<Button variant="ghost" size="icon">*/}
                {/*    <DoorClosedIcon className="w-6 h-6" />*/}
                {/*</Button>*/}
            </div>
            <div className="border-dashed border bg-slate-50 border-gray-300 rounded-lg p-6 mb-6 text-center">
                <CloudUploadIcon className="w-12 h-12 text-blue-700 mx-auto mb-4" />
                <p className="mb-2">
                    Drag & Drop or{" "}
                    <a href="#" className="text-blue-600">
                        Choose File
                    </a>{" "}
                    to Upload
                </p>
                <p className="text-sm text-gray-500">DOCX, XLSX, PPTX, PDF, and JPG formats, up to 50 MB.</p>
                <Button variant="outline" className="mt-4">
                    Browse
                </Button>
            </div>
            <div className="bg-gray-100 p-4 rounded-lg mb-6">
                <div className="flex justify-between items-center mb-2">
                    <div className="flex items-center">
                        <FileIcon className="w-6 h-6 text-purple-600 mr-2" />
                        <p>New Documents</p>
                    </div>
                    <Button variant="ghost" size="icon">
                        <DoorClosedIcon className="w-4 h-4" />
                    </Button>
                </div>
                <div className="flex items-center">
                    <p className="text-sm text-gray-500 mr-2">4 MB - 23 Sec left - 85% Completed</p>
                    <Progress value={85} className="w-full bg-purple-600" />
                </div>
            </div>
            <div className="mb-6">
                <h3 className="text-lg font-semibold mb-2">Document Details</h3>
                <div className="space-y-4">
                    <div>
                        <Label htmlFor="file-name">File Name</Label>
                        <Input id="file-name" placeholder="New Documents" />
                    </div>
                    <div>
                        <Label htmlFor="details">Details</Label>
                        <Textarea id="details" placeholder="Write your description in shortly." />
                    </div>
                    <div>
                        <Label htmlFor="tags">Tags</Label>
                        <Select>
                            <SelectTrigger id="tags" aria-label="Tags">
                                <SelectValue placeholder="Reports" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="reports">Reports</SelectItem>
                                <SelectItem value="invoices">Invoices</SelectItem>
                                <SelectItem value="receipts">Receipts</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                </div>
            </div>
            <div className="mb-6">
                <h3 className="text-lg font-semibold mb-2">Document Access</h3>
                <div className="grid grid-cols-2 gap-4">
                    <div className="flex items-center space-x-2">
                        <Checkbox id="all" defaultChecked />
                        <Label htmlFor="all">All</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                        <Checkbox id="administration" />
                        <Label htmlFor="administration">Administration</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                        <Checkbox id="editors" />
                        <Label htmlFor="editors">Editors</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                        <Checkbox id="messengers" />
                        <Label htmlFor="messengers">Messengers</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                        <Checkbox id="developers" />
                        <Label htmlFor="developers">Developers</Label>
                    </div>
                </div>
            </div>
            <div className="flex justify-end space-x-4">
                <Button variant="outline">Cancel</Button>
                <Button className="bg-purple-600 text-white">Save Documents</Button>
            </div>
        </div>
            <div className="w-full max-w-2xl mx-auto bg-white border rounded-lg shadow-lg m-6 p-6">
            <div className="flex justify-between items-center border-b pb-4 mb-4">
                <h2 className="text-xl font-semibold">New Documents</h2>
                {/*<Button variant="ghost" size="icon">*/}
                {/*    <DoorClosedIcon className="w-6 h-6" />*/}
                {/*</Button>*/}
            </div>
            <div className="border-dashed border bg-slate-50 border-gray-300 rounded-lg p-6 mb-6 text-center">
                <CloudUploadIcon className="w-12 h-12 text-blue-700 mx-auto mb-4" />
                <p className="mb-2">
                    Drag & Drop or{" "}
                    <a href="#" className="text-blue-600">
                        Choose File
                    </a>{" "}
                    to Upload
                </p>
                <p className="text-sm text-gray-500">DOCX, XLSX, PPTX, PDF, and JPG formats, up to 50 MB.</p>
                <Button variant="outline" className="mt-4">
                    Browse
                </Button>
            </div>
            <div className="bg-gray-100 p-4 rounded-lg mb-6">
                <div className="flex justify-between items-center mb-2">
                    <div className="flex items-center">
                        <FileIcon className="w-6 h-6 text-purple-600 mr-2" />
                        <p>New Documents</p>
                    </div>
                    <Button variant="ghost" size="icon">
                        <DoorClosedIcon className="w-4 h-4" />
                    </Button>
                </div>
                <div className="flex items-center">
                    <p className="text-sm text-gray-500 mr-2">4 MB - 23 Sec left - 85% Completed</p>
                    <Progress value={85} className="w-full bg-purple-600" />
                </div>
            </div>
            <div className="mb-6">
                <h3 className="text-lg font-semibold mb-2">Document Details</h3>
                <div className="space-y-4">
                    <div>
                        <Label htmlFor="file-name">File Name</Label>
                        <Input id="file-name" placeholder="New Documents" />
                    </div>
                    <div>
                        <Label htmlFor="details">Details</Label>
                        <Textarea id="details" placeholder="Write your description in shortly." />
                    </div>
                    <div>
                        <Label htmlFor="tags">Tags</Label>
                        <Select>
                            <SelectTrigger id="tags" aria-label="Tags">
                                <SelectValue placeholder="Reports" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="reports">Reports</SelectItem>
                                <SelectItem value="invoices">Invoices</SelectItem>
                                <SelectItem value="receipts">Receipts</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                </div>
            </div>
            <div className="mb-6">
                <h3 className="text-lg font-semibold mb-2">Document Access</h3>
                <div className="grid grid-cols-2 gap-4">
                    <div className="flex items-center space-x-2">
                        <Checkbox id="all" defaultChecked />
                        <Label htmlFor="all">All</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                        <Checkbox id="administration" />
                        <Label htmlFor="administration">Administration</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                        <Checkbox id="editors" />
                        <Label htmlFor="editors">Editors</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                        <Checkbox id="messengers" />
                        <Label htmlFor="messengers">Messengers</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                        <Checkbox id="developers" />
                        <Label htmlFor="developers">Developers</Label>
                    </div>
                </div>
            </div>
            <div className="flex justify-end space-x-4">
                <Button variant="outline">Cancel</Button>
                <Button className="bg-purple-600 text-white">Save Documents</Button>
            </div>
        </div>
        </div>
    )
}

function CloudUploadIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242" />
            <path d="M12 12v9" />
            <path d="m16 16-4-4-4 4" />
        </svg>
    )
}


function DoorClosedIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M18 20V6a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v14" />
            <path d="M2 20h20" />
            <path d="M14 12v.01" />
        </svg>
    )
}


function FileIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
            <path d="M14 2v4a2 2 0 0 0 2 2h4" />
        </svg>
    )
}