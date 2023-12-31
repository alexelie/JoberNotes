"use client"

import {Button} from "@nextui-org/react";
import { JobApplication } from "../utils";
import { useState } from "react";
import AddJobModal from "./AddJobModal";
import JobCard from "./JobCard";

export interface JobsDisplayProps{
    jobs: JobApplication[]
}

export default function JobsDisplay(props: JobsDisplayProps){
    const [openAddJobModal, setOpenAddJobModal] = useState(false);

    function addApplication(){
        
    }

    function onJobAdded(job: JobApplication){

    }

    return (
        <div style={{flex: "1"}} className="p-2">
            <div className="flex mb-4" style={{alignItems: "center"}}>
                <h2 style={{fontSize: "2em"}} className="mr-4 text-xl">Jobs</h2>
                <Button size="md" color="primary" onClick={()=> {setOpenAddJobModal(!openAddJobModal)}}>
                    Add Job
                </Button>
            </div>
            <div className="grid grid-cols-3 gap-4">
                {
                    props.jobs.map((job, key) => {
                        return <JobCard key={key} job={job}></JobCard> 
                    })
                }
            </div>
            <AddJobModal 
                isOpen={openAddJobModal} 
                onClose={() => { setOpenAddJobModal(!openAddJobModal); } } 
                onJobAdded={onJobAdded}/>
        </div>
    )
}