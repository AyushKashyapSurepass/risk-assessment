import { Input } from "@/components/ui/input"
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import {Card, CardContent, CardFooter, CardHeader, CardTitle} from "@/components/ui/card.jsx";
import {Label} from "@/components/ui/label.jsx";

export default function ClientQuestionaries() {
    return (
        // <main className=" px-6 border border-red-600  py-8 space-y-6 h-fit w-full">
        //     <header className="w-full mx-auto px-6 py-8">
        //          <div className="flex flex-col gap-5 items-center justify-center">
        //          <div className="text-4xl font-bold text-[#333]">Security Questionnaires</div>
        //          <p className="mt-2 text-center max-w-xl text-lg text-[#666]">We have prepared this comprehensive Securities Questionnaire to better understand your financial situation, investment goals, and risk tolerance. Your thoughtful responses will help us:</p>
        //          </div>
        //     </header>
        //     <form className="bg-white max-w-4xl mx-auto rounded-lg border shadow-lg p-8">
        //         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        //             <div className="grid gap-2">
        //                 <label htmlFor="name" className="text-sm font-medium text-[#333]">
        //                     Name
        //                 </label>
        //                 <Input id="name" placeholder="Enter your name"/>
        //             </div>
        //             <div className="grid gap-2">
        //                 <label htmlFor="email" className="text-sm font-medium text-[#333]">
        //                     Email
        //                 </label>
        //                 <Input id="email" type="email" placeholder="Enter your email"/>
        //             </div>
        //         </div>
        //         <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
        //             <div className="grid gap-2">
        //                 <label htmlFor="stock-ticker" className="text-sm font-medium text-[#333]">
        //                     Stock Ticker
        //                 </label>
        //                 <Input id="stock-ticker" placeholder="Enter stock ticker"/>
        //             </div>
        //             <div className="grid gap-2">
        //                 <label htmlFor="investment-amount" className="text-sm font-medium text-[#333]">
        //                     Investment Amount
        //                 </label>
        //                 <Input id="investment-amount" type="number" placeholder="Enter investment amount"/>
        //             </div>
        //         </div>
        //         <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
        //             <div className="grid gap-2">
        //                 <label htmlFor="investment-horizon" className="text-sm font-medium text-[#333]">
        //                     Investment Horizon
        //                 </label>
        //                 <Select id="investment-horizon">
        //                     <SelectTrigger>
        //                         <SelectValue placeholder="Select investment horizon"/>
        //                     </SelectTrigger>
        //                     <SelectContent>
        //                         <SelectItem value="short-term">Short-term (1-3 years)</SelectItem>
        //                         <SelectItem value="medium-term">Medium-term (3-5 years)</SelectItem>
        //                         <SelectItem value="long-term">Long-term (5+ years)</SelectItem>
        //                     </SelectContent>
        //                 </Select>
        //             </div>
        //             <div className="grid gap-2">
        //                 <label htmlFor="risk-tolerance" className="text-sm font-medium text-[#333]">
        //                     Risk Tolerance
        //                 </label>
        //                 <Select id="risk-tolerance">
        //                     <SelectTrigger>
        //                         <SelectValue placeholder="Select risk tolerance"/>
        //                     </SelectTrigger>
        //                     <SelectContent>
        //                         <SelectItem value="low">Low</SelectItem>
        //                         <SelectItem value="medium">Medium</SelectItem>
        //                         <SelectItem value="high">High</SelectItem>
        //                     </SelectContent>
        //                 </Select>
        //             </div>
        //         </div>
        //         <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
        //             <div className="grid gap-2">
        //                 <label htmlFor="financial-goals" className="text-sm font-medium text-[#333]">
        //                     Financial Goals
        //                 </label>
        //                 <Textarea id="financial-goals" rows={3} placeholder="Enter your financial goals"/>
        //             </div>
        //             <div className="grid gap-2">
        //                 <label htmlFor="investment-strategy" className="text-sm font-medium text-[#333]">
        //                     Investment Strategy
        //                 </label>
        //                 <Textarea id="investment-strategy" rows={3} placeholder="Enter your investment strategy"/>
        //             </div>
        //         </div>
        //         <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
        //             <div className="grid gap-2">
        //                 <label htmlFor="investment-experience" className="text-sm font-medium text-[#333]">
        //                     Investment Experience
        //                 </label>
        //                 <Select id="investment-experience">
        //                     <SelectTrigger>
        //                         <SelectValue placeholder="Select investment experience"/>
        //                     </SelectTrigger>
        //                     <SelectContent>
        //                         <SelectItem value="beginner">Beginner</SelectItem>
        //                         <SelectItem value="intermediate">Intermediate</SelectItem>
        //                         <SelectItem value="advanced">Advanced</SelectItem>
        //                     </SelectContent>
        //                 </Select>
        //             </div>
        //             <div className="grid gap-2">
        //                 <label htmlFor="investment-time-frame" className="text-sm font-medium text-[#333]">
        //                     Investment Time Frame
        //                 </label>
        //                 <Select id="investment-time-frame">
        //                     <SelectTrigger>
        //                         <SelectValue placeholder="Select investment time frame"/>
        //                     </SelectTrigger>
        //                     <SelectContent>
        //                         <SelectItem value="short-term">Short-term (1-3 years)</SelectItem>
        //                         <SelectItem value="medium-term">Medium-term (3-5 years)</SelectItem>
        //                         <SelectItem value="long-term">Long-term (5+ years)</SelectItem>
        //                     </SelectContent>
        //                 </Select>
        //             </div>
        //         </div>
        //         <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
        //             <div className="grid gap-2">
        //                 <label htmlFor="investment-objectives" className="text-sm font-medium text-[#333]">
        //                     Investment Objectives
        //                 </label>
        //                 <Textarea id="investment-objectives" rows={3} placeholder="Enter your investment objectives"/>
        //             </div>
        //             <div className="grid gap-2">
        //                 <label htmlFor="investment-constraints" className="text-sm font-medium text-[#333]">
        //                     Investment Constraints
        //                 </label>
        //                 <Textarea id="investment-constraints" rows={3} placeholder="Enter your investment constraints"/>
        //             </div>
        //         </div>
        //         <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
        //             <div className="grid gap-2">
        //                 <label htmlFor="investment-horizon-2" className="text-sm font-medium text-[#333]">
        //                     Investment Horizon (2)
        //                 </label>
        //                 <Select id="investment-horizon-2">
        //                     <SelectTrigger>
        //                         <SelectValue placeholder="Select investment horizon"/>
        //                     </SelectTrigger>
        //                     <SelectContent>
        //                         <SelectItem value="short-term">Short-term (1-3 years)</SelectItem>
        //                         <SelectItem value="medium-term">Medium-term (3-5 years)</SelectItem>
        //                         <SelectItem value="long-term">Long-term (5+ years)</SelectItem>
        //                     </SelectContent>
        //                 </Select>
        //             </div>
        //             <div className="grid gap-2">
        //                 <label htmlFor="investment-risk-profile" className="text-sm font-medium text-[#333]">
        //                     Investment Risk Profile
        //                 </label>
        //                 <Select id="investment-risk-profile">
        //                     <SelectTrigger>
        //                         <SelectValue placeholder="Select investment risk profile"/>
        //                     </SelectTrigger>
        //                     <SelectContent>
        //                         <SelectItem value="conservative">Conservative</SelectItem>
        //                         <SelectItem value="moderate">Moderate</SelectItem>
        //                         <SelectItem value="aggressive">Aggressive</SelectItem>
        //                     </SelectContent>
        //                 </Select>
        //             </div>
        //         </div>
        //         <div className="flex justify-end mt-8">
        //             <Button type="submit" className="bg-[#007bff] hover:bg-[#0056b3] text-white px-6 py-2 rounded-lg">
        //                 Submit
        //             </Button>
        //         </div>
        //     </form>
        // </main>
        <main className="px-6 py-8 space-y-6 min-h-screen w-full">
            <header className="w-full mx-auto px-6 py-8">
                <div className="flex flex-col gap-5 items-center justify-center">
                    <div className="text-4xl font-bold text-[#333]">Security Questionnaires</div>
                    <p className="mt-2 text-center max-w-xl text-lg text-[#666]">
                        We have prepared this comprehensive Securities Questionnaire to better understand your financial
                        situation, investment goals, and risk tolerance. Your thoughtful responses will help us:
                    </p>
                </div>
            </header>
            <Card className="w-full max-w-4xl mx-auto p-6">
                <CardHeader>
                    <CardTitle>Investment Questionnaire</CardTitle>
                </CardHeader>
                <CardContent>
                    <form className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                            <Label htmlFor="name">Name</Label>
                            <Input id="name" placeholder="Enter your name" />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="email">Email</Label>
                            <Input id="email" placeholder="Enter your email" type="email" />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="stock-ticker">Stock Ticker</Label>
                            <Input id="stock-ticker" placeholder="Enter stock ticker" />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="investment-amount">Investment Amount</Label>
                            <Input id="investment-amount" placeholder="Enter investment amount" />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="investment-horizon">Investment Horizon</Label>
                            <Select>
                                <SelectTrigger id="investment-horizon">
                                    <SelectValue placeholder="Select investment horizon" />
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
                                    <SelectValue placeholder="Select risk tolerance" />
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
                            <Textarea id="financial-goals" placeholder="Enter your financial goals" />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="investment-strategy">Investment Strategy</Label>
                            <Textarea id="investment-strategy" placeholder="Enter your investment strategy" />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="investment-experience">Investment Experience</Label>
                            <Select>
                                <SelectTrigger id="investment-experience">
                                    <SelectValue placeholder="Select investment experience" />
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
                                    <SelectValue placeholder="Select investment time frame" />
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
                            <Textarea id="investment-objectives" placeholder="Enter your investment objectives" />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="investment-constraints">Investment Constraints</Label>
                            <Textarea id="investment-constraints" placeholder="Enter your investment constraints" />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="investment-horizon-2">Investment Horizon (2)</Label>
                            <Select>
                                <SelectTrigger id="investment-horizon-2">
                                    <SelectValue placeholder="Select investment horizon" />
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
                                    <SelectValue placeholder="Select investment risk profile" />
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
        </main>

    )
}