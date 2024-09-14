import {Button} from "@/components/ui/button"
import {Progress} from "@/components/ui/progress"
import {Label} from "@/components/ui/label"
import {Input} from "@/components/ui/input"
import {Textarea} from "@/components/ui/textarea"
import {Select, SelectTrigger, SelectValue, SelectContent, SelectItem, SelectGroup} from "@/components/ui/select"
import {Checkbox} from "@/components/ui/checkbox"
import {
    FileUploader,
    FileUploaderContent,
    FileUploaderItem,
    FileInput,
} from "@/components/ui/fileUpload.jsx";
import {useState} from "react";
import {floor, lowerCase, startCase} from "lodash";
import {CircleX} from "lucide-react";
import axiosInstance from "@/AxiosInstance/index.js";
import {getQuestions} from "@/Service/RiskAssessment/manager.js";
import {Card, CardContent, CardFooter, CardHeader, CardTitle} from "@/components/ui/card.jsx";

export default function InitiateUser() {
    const [files, setFiles] = useState([]);
    const [fileName, setFileName] = useState("");
    const [description, setDescription] = useState("");
    const [category, setCategory] = useState("");
    const [categories, setCategories] = useState([
        {
            value: 'Stock'
        },
        {
            value: 'Guidelines'
        },
        {
            value: 'Interview'
        },
        {
            value: 'Employee'
        },
    ]);
    const dropZoneConfig = {
        maxFiles: 1,
        maxSize: 1024 * 1024 * 4,
        multiple: false,
    };

    const handleSubmit = async () => {
        const formDataPayload = new FormData();
        const payload = {
            filename : fileName,
            file: files[files.length-1],
            categories: category,
            categories_description: description
        }
        Object.keys(payload).forEach(key => {
            formDataPayload.append(key, payload[key]);
        })
        try{
            const response = await axiosInstance({
                method: 'post',
                url: '/pdf/upload-pdf',
                data: formDataPayload,
            });
            console.log(response)
            try {
                const questions = await getQuestions(response?.data?.data?.question_doc_id)
                console.log(questions)
            }catch (err){
                console.log(err)
            }
        }catch (err){
                console.log(err)
        }

    }
    return (
        <div className={'flex'}>
            <div className="w-full max-w-2xl mx-auto bg-white border rounded-lg shadow-lg m-6 p-6">
                <div className="flex justify-between items-center border-b pb-4 mb-4">
                    <h2 className="text-xl font-semibold">New Documents</h2>
                    {/*<Button variant="ghost" size="icon">*/}
                    {/*    <DoorClosedIcon className="w-6 h-6" />*/}
                    {/*</Button>*/}
                </div>
                <FileUploader
                    files={files}
                    onValueChange={setFiles}
                    dropzoneOptions={dropZoneConfig}
                >
                    <div className="border-dashed border bg-slate-50  rounded-lg  p-6 mb-6 text-center">
                        <FileInput>
                            <CloudUploadIcon className="w-12 h-12 text-blue-700 mx-auto mb-4"/>
                            <p className="mb-2">
                                Drag & Drop or{" "}
                                <a href="#" className="text-blue-600">
                                    Choose File
                                </a>{" "}
                                to Upload
                            </p>
                            <p className="text-sm text-gray-500">DOCX, XLSX, PPTX, PDF, and JPG formats, up to 50
                                MB.</p>
                            <Button variant="outline" className="mt-4">
                                Browse
                            </Button>
                        </FileInput>
                    </div>
                    <FileUploaderContent>
                        {
                            files.map((file, index) => (
                                <div className="bg-gray-100 border p-4 rounded-lg mb-6">
                                    <div className="flex justify-between items-center mb-2">
                                        <div className="flex items-center">
                                            <FileIcon className="w-6 h-6 text-blue-700 mr-2"/>
                                            <p className={'truncate max-w-44'}>{file.name}</p>
                                        </div>
                                        <Button variant="ghost" size="icon">
                                            <CircleX onClick={()=>{
                                                setFiles([])
                                            }} className="w-4 h-4"/>
                                        </Button>
                                    </div>
                                    <div className="flex items-center gap-4">
                                        <p className="text-sm text-gray-500 mr-2">{`${floor(file.size / 1000)}KB`}</p>
                                        {/*<Progress value={85} className="w-full bg-white"/>*/}
                                    </div>
                                </div>
                            ))
                        }
                    </FileUploaderContent>
                </FileUploader>
                <div className="mb-6">
                    <h3 className="text-lg font-semibold mb-2">Document Details</h3>
                    <div className="space-y-4">
                        <div>
                            <Label htmlFor="file-name">File Name</Label>
                            <Input id="file-name" value={fileName} onChange={(e) => {
                                setFileName(e.target.value)
                            }} placeholder="New Documents"/>
                        </div>
                        <div>
                            <Label htmlFor="tags">Assessment Categories</Label>
                            <Select value={category} onValueChange={setCategory}>
                                <SelectTrigger className="w-">
                                    <SelectValue placeholder="Select a category"/>
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectGroup>
                                        {
                                            categories.map((category, index) => (
                                                <SelectItem key={index}
                                                            value={lowerCase(category.value)}>{startCase(lowerCase(category.value))}</SelectItem>
                                            ))
                                        }
                                    </SelectGroup>
                                </SelectContent>
                            </Select>
                        </div>
                        <div>
                            <Label htmlFor="details">Description</Label>
                            <Textarea value={description} onChange={({target}) => setDescription(target.value)}
                                      id="details" placeholder="Write your description in shortly."/>
                        </div>
                    </div>
                </div>
                {/*<div className="mb-6">*/}
                {/*    <h3 className="text-lg font-semibold mb-2">Document Access</h3>*/}
                {/*    <div className="grid grid-cols-2 gap-4">*/}
                {/*        <div className="flex items-center space-x-2">*/}
                {/*            <Checkbox id="all" defaultChecked/>*/}
                {/*            <Label htmlFor="all">All</Label>*/}
                {/*        </div>*/}
                {/*        <div className="flex items-center space-x-2">*/}
                {/*            <Checkbox id="administration"/>*/}
                {/*            <Label htmlFor="administration">Administration</Label>*/}
                {/*        </div>*/}
                {/*        <div className="flex items-center space-x-2">*/}
                {/*            <Checkbox id="editors"/>*/}
                {/*            <Label htmlFor="editors">Editors</Label>*/}
                {/*        </div>*/}
                {/*        <div className="flex items-center space-x-2">*/}
                {/*            <Checkbox id="messengers"/>*/}
                {/*            <Label htmlFor="messengers">Messengers</Label>*/}
                {/*        </div>*/}
                {/*        <div className="flex items-center space-x-2">*/}
                {/*            <Checkbox id="developers"/>*/}
                {/*            <Label htmlFor="developers">Developers</Label>*/}
                {/*        </div>*/}
                {/*    </div>*/}
                {/*</div>*/}
                <div className="flex justify-end space-x-4">
                    <Button variant="outline">Cancel</Button>
                    <Button onClick={handleSubmit} className="bg-blue-700 text-white">Save Documents</Button>
                </div>
            </div>
            <Card className="w-full max-w-4xl rounded-lg shadow-lg mx-auto m-6 p-6">
                <CardHeader>
                    <CardTitle>Investment Questionnaire</CardTitle>
                </CardHeader>
                <CardContent>
                    <form className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                            <Label htmlFor="name">Name</Label>
                            <Input id="name" placeholder="Enter your name"/>
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="email">Email</Label>
                            <Input id="email" placeholder="Enter your email" type="email"/>
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="stock-ticker">Stock Ticker</Label>
                            <Input id="stock-ticker" placeholder="Enter stock ticker"/>
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="investment-amount">Investment Amount</Label>
                            <Input id="investment-amount" placeholder="Enter investment amount"/>
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="investment-horizon">Investment Horizon</Label>
                            <Select>
                                <SelectTrigger id="investment-horizon">
                                    <SelectValue placeholder="Select investment horizon"/>
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="short-term">Short-term</SelectItem>
                                    <SelectItem value="medium-term">Medium-term</SelectItem>
                                    <SelectItem value="long-term">Long-term</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="risk-tolerance">Risk Tolerance</Label>
                            <Select>
                                <SelectTrigger id="risk-tolerance">
                                    <SelectValue placeholder="Select risk tolerance"/>
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="low">Low</SelectItem>
                                    <SelectItem value="medium">Medium</SelectItem>
                                    <SelectItem value="high">High</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="financial-goals">Financial Goals</Label>
                            <Textarea id="financial-goals" placeholder="Enter your financial goals"/>
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="investment-strategy">Investment Strategy</Label>
                            <Textarea id="investment-strategy" placeholder="Enter your investment strategy"/>
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="investment-experience">Investment Experience</Label>
                            <Select>
                                <SelectTrigger id="investment-experience">
                                    <SelectValue placeholder="Select investment experience"/>
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="beginner">Beginner</SelectItem>
                                    <SelectItem value="intermediate">Intermediate</SelectItem>
                                    <SelectItem value="expert">Expert</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="investment-time-frame">Investment Time Frame</Label>
                            <Select>
                                <SelectTrigger id="investment-time-frame">
                                    <SelectValue placeholder="Select investment time frame"/>
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="1-year">1 year</SelectItem>
                                    <SelectItem value="2-5-years">2-5 years</SelectItem>
                                    <SelectItem value="5-10-years">5-10 years</SelectItem>
                                    <SelectItem value="10-plus-years">10+ years</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="investment-objectives">Investment Objectives</Label>
                            <Textarea id="investment-objectives" placeholder="Enter your investment objectives"/>
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="investment-constraints">Investment Constraints</Label>
                            <Textarea id="investment-constraints" placeholder="Enter your investment constraints"/>
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="investment-horizon-2">Investment Horizon (2)</Label>
                            <Select>
                                <SelectTrigger id="investment-horizon-2">
                                    <SelectValue placeholder="Select investment horizon"/>
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="short-term">Short-term</SelectItem>
                                    <SelectItem value="medium-term">Medium-term</SelectItem>
                                    <SelectItem value="long-term">Long-term</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="investment-risk-profile">Investment Risk Profile</Label>
                            <Select>
                                <SelectTrigger id="investment-risk-profile">
                                    <SelectValue placeholder="Select investment risk profile"/>
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="conservative">Conservative</SelectItem>
                                    <SelectItem value="balanced">Balanced</SelectItem>
                                    <SelectItem value="aggressive">Aggressive</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                    </form>
                </CardContent>
                <CardFooter>
                    <Button className="ml-auto">Submit</Button>
                </CardFooter>
            </Card>
            {/*    <div className="w-full max-w-2xl mx-auto bg-white border rounded-lg shadow-lg m-6 p-6">*/}
            {/*    <div className="flex justify-between items-center border-b pb-4 mb-4">*/}
            {/*        <h2 className="text-xl font-semibold">New Documents</h2>*/}
            {/*        /!*<Button variant="ghost" size="icon">*!/*/}
            {/*        /!*    <DoorClosedIcon className="w-6 h-6" />*!/*/}
            {/*        /!*</Button>*!/*/}
            {/*    </div>*/}
            {/*    <div className="border-dashed border bg-slate-50 border-gray-300 rounded-lg p-6 mb-6 text-center">*/}
            {/*        <CloudUploadIcon className="w-12 h-12 text-blue-700 mx-auto mb-4" />*/}
            {/*        <p className="mb-2">*/}
            {/*            Drag & Drop or{" "}*/}
            {/*            <a href="#" className="text-blue-600">*/}
            {/*                Choose File*/}
            {/*            </a>{" "}*/}
            {/*            to Upload*/}
            {/*        </p>*/}
            {/*        <p className="text-sm text-gray-500">DOCX, XLSX, PPTX, PDF, and JPG formats, up to 50 MB.</p>*/}
            {/*        <Button variant="outline" className="mt-4">*/}
            {/*            Browse*/}
            {/*        </Button>*/}
            {/*    </div>*/}
            {/*    <div className="bg-gray-100 p-4 rounded-lg mb-6">*/}
            {/*        <div className="flex justify-between items-center mb-2">*/}
            {/*            <div className="flex items-center">*/}
            {/*                <FileIcon className="w-6 h-6 text-purple-600 mr-2" />*/}
            {/*                <p>New Documents</p>*/}
            {/*            </div>*/}
            {/*            <Button variant="ghost" size="icon">*/}
            {/*                <DoorClosedIcon className="w-4 h-4" />*/}
            {/*            </Button>*/}
            {/*        </div>*/}
            {/*        <div className="flex items-center">*/}
            {/*            <p className="text-sm text-gray-500 mr-2">4 MB - 23 Sec left - 85% Completed</p>*/}
            {/*            <Progress value={85} className="w-full bg-purple-600" />*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*    <div className="mb-6">*/}
            {/*        <h3 className="text-lg font-semibold mb-2">Document Details</h3>*/}
            {/*        <div className="space-y-4">*/}
            {/*            <div>*/}
            {/*                <Label htmlFor="file-name">File Name</Label>*/}
            {/*                <Input id="file-name" placeholder="New Documents" />*/}
            {/*            </div>*/}
            {/*            <div>*/}
            {/*                <Label htmlFor="details">Details</Label>*/}
            {/*                <Textarea id="details" placeholder="Write your description in shortly." />*/}
            {/*            </div>*/}
            {/*            <div>*/}
            {/*                <Label htmlFor="tags">Tags</Label>*/}
            {/*                <Select>*/}
            {/*                    <SelectTrigger id="tags" aria-label="Tags">*/}
            {/*                        <SelectValue placeholder="Reports" />*/}
            {/*                    </SelectTrigger>*/}
            {/*                    <SelectContent>*/}
            {/*                        <SelectItem value="reports">Reports</SelectItem>*/}
            {/*                        <SelectItem value="invoices">Invoices</SelectItem>*/}
            {/*                        <SelectItem value="receipts">Receipts</SelectItem>*/}
            {/*                    </SelectContent>*/}
            {/*                </Select>*/}
            {/*            </div>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*    <div className="mb-6">*/}
            {/*        <h3 className="text-lg font-semibold mb-2">Document Access</h3>*/}
            {/*        <div className="grid grid-cols-2 gap-4">*/}
            {/*            <div className="flex items-center space-x-2">*/}
            {/*                <Checkbox id="all" defaultChecked />*/}
            {/*                <Label htmlFor="all">All</Label>*/}
            {/*            </div>*/}
            {/*            <div className="flex items-center space-x-2">*/}
            {/*                <Checkbox id="administration" />*/}
            {/*                <Label htmlFor="administration">Administration</Label>*/}
            {/*            </div>*/}
            {/*            <div className="flex items-center space-x-2">*/}
            {/*                <Checkbox id="editors" />*/}
            {/*                <Label htmlFor="editors">Editors</Label>*/}
            {/*            </div>*/}
            {/*            <div className="flex items-center space-x-2">*/}
            {/*                <Checkbox id="messengers" />*/}
            {/*                <Label htmlFor="messengers">Messengers</Label>*/}
            {/*            </div>*/}
            {/*            <div className="flex items-center space-x-2">*/}
            {/*                <Checkbox id="developers" />*/}
            {/*                <Label htmlFor="developers">Developers</Label>*/}
            {/*            </div>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*    <div className="flex justify-end space-x-4">*/}
            {/*        <Button variant="outline">Cancel</Button>*/}
            {/*        <Button className="bg-purple-600 text-white">Save Documents</Button>*/}
            {/*    </div>*/}
            {/*</div>*/}
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
            <path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242"/>
            <path d="M12 12v9"/>
            <path d="m16 16-4-4-4 4"/>
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
            <path d="M18 20V6a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v14"/>
            <path d="M2 20h20"/>
            <path d="M14 12v.01"/>
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
            <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/>
            <path d="M14 2v4a2 2 0 0 0 2 2h4"/>
        </svg>
    )
}