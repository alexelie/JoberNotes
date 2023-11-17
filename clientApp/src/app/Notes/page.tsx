"use client"

import { useEffect, useState } from "react";
import JobsDisplay from "./components/JobsDisplay";
import { JobApplication } from "./utils";
import { jobService } from "../apiServices/jobService";

export default function Page() {
    
    const [jobs, setJobs] = useState<JobApplication[]>([])

    async function fetchJobs(){
        const jobs = await jobService.getJobs()

        if(jobs) setJobs(jobs)
    }

    //Init
    useEffect(() => {
        fetchJobs();
    }, []);

    return (
        <div style={{padding: "20px", flex: "1 1 0", overflowY: "auto"}}>
            <h1 style={{fontSize: "2em"}}>Interviews</h1>
            <div style={{marginBottom: "15px"}}></div>
            <div style={{display: "flex", width: "100%"}}>
                <div style={{flex: "1"}} className="mr-2 p-2 rounded border-1 border-stone-200">
                    <h2 className="text-xl">Today's interviews</h2>
                    <p>todo...</p>
                </div>

                <div style={{flex: "1"}} className="p-2 rounded border-1 border-stone-200">
                    <h2 className="text-xl">Tomorrow's interviews</h2>
                    <p>todo...</p>
                </div>
            </div>
            <div style={{marginBottom: "15px"}}></div>
            <JobsDisplay jobs={jobs}/>
        </div>
    )
}