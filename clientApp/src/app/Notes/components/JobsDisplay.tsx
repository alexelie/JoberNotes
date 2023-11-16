'use client'

import { Card, CardHeader, Textarea, Image, Divider, CardBody, CardFooter, Link, Chip, Spacer } from "@nextui-org/react";
import {Button} from "@nextui-org/react";
import { InterviewType, JobApplication } from "../utils";
import AddIcon from '@mui/icons-material/Add';
import { useState } from "react";
import AddJobModal from "./AddJobModal";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import HourglassBottomIcon from '@mui/icons-material/HourglassBottom';

export interface JobsDisplayProps{
    jobs: JobApplication[]
}

// TODO: create component for single card
export default function JobsDisplay(props: JobsDisplayProps){
    const [openAddJobModal, setOpenAddJobModal] = useState(false);

    function addApplication(){
        
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
                        return <>
                            <Card className="mb-4">
                                <CardHeader className="flex gap-3">
                                    <div className="flex flex-col">
                                        <p className="text-md">{job.title}</p>
                                        <p className="text-small text-default-500">{job.company}</p>
                                    </div>
                                </CardHeader>
                                <Divider />
                                <CardBody>
                                    <p> {job.description}</p>
                                    <Spacer y={4} />
                                    <div style={{display: "flex", alignItems: "center", flexWrap: "wrap"}}>
                                        {
                                            job.interviews.length == 0 ? "Aucune reponse"  
                                            :
                                            job.interviews.map((i, key) => {
                                                const color = i.date > new Date() ? "warning" : "success"
                                                const icon = i.date > new Date() ? <HourglassBottomIcon/> : <CheckCircleIcon />
                                                return (
                                                    <Chip
                                                        className="mr-2 mb-2"
                                                        key={key}
                                                        startContent={icon}
                                                        variant="faded"
                                                        color={color}
                                                    >
                                                        {i.date.toLocaleString("fr-FR")}
                                                    </Chip>
                                            )})
                                            
                                        }
                                    </div>
                                </CardBody>
                                <Divider />
                                <CardFooter>
                                    <Button color="primary" variant="bordered">Add interview</Button>
                                </CardFooter>
                            </Card>
                        </>
                    })
                }
            </div>
            <AddJobModal isOpen={openAddJobModal}/>
        </div>
    )
}