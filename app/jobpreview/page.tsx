import  About  from "../components/About";
import { Card } from "../components/Card";
import Company from "../components/Company";
import { JobData } from "../components/JobData";
import JobTitle from "../components/JobTitle";
import { Requirement } from "../components/Requirements";

const jobData ={
    title:"Senior Product Designer",
    location:"Dealware, USA",
    Salary:"$300k-$400k",
    isOpen:true
} 

export default function JobPreview(){
    return <div className="h-screen flex">
        <div className="w-[75%] ">
        <JobTitle title={jobData.title} location={jobData.location} Salary={jobData.Salary} isOpen={jobData.isOpen}></JobTitle>
        <Requirement/>
        <About/>
        <Company/>
        </div>
        <div className="w-[25%] bg-lightGray">
            <div>
                <JobData/>
            </div>
            <div>
                <Card/>
            </div>
        </div>
    </div>
}