'use client'

import { Button, Input, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, Spacer, Textarea } from "@nextui-org/react"
import { JobApplication } from "../utils"
import { useState } from "react";

interface AddJobModalProps {
    isOpen: boolean,
    onClose: () => void,
    onJobAdded: (job: JobApplication) => void
}

const getDefaultForm = () => {
    return {
        role: undefined,
        company: undefined,
        description: undefined,
        notes: undefined,
        interviews: undefined
    }
}
export default function AddJobModal(props: AddJobModalProps) {

    const [jobForm, setJobForm] = useState<JobApplication>(getDefaultForm());

    function addJob(){
        window.console.log(jobForm)
        const newJob = {...jobForm}

        //send job to backend
        

        //close modal
        props.onClose()

        //clear fields
        setJobForm(() => {return getDefaultForm()})

        //callback
        props.onJobAdded({...newJob})
    }

    function onChangeInput(e: any){ 
        const fieldName = e.target.name;
        const fieldValue = e.target.value;

        setJobForm((prevState) => {
            return {
                ...prevState,
                [fieldName]: fieldValue
            }
        })
    }


    return (
        <>
            <Modal isOpen={props.isOpen} size="xl" onClose={()=>{props.onClose()}}>
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalHeader className="flex flex-col gap-1">Add job</ModalHeader>
                            <ModalBody>
                                <div className="gap-1">
                                    <Input name="role" onChange={onChangeInput} size="sm" type="text" label="Role" className="mb-4"/>
                                    <Input name="company" onChange={onChangeInput} size="sm" type="text" label="Company" className="mb-4"/>
                                    <Textarea
                                        onChange={onChangeInput}
                                        name="description"
                                        className="mb-4 w-full"
                                        label="Description"
                                        placeholder="Enter your description"
                                        />
                                </div>
                            </ModalBody>
                            <ModalFooter>
                                <Button color="danger" variant="light" onPress={onClose}>
                                    Close
                                </Button>
                                <Button color="primary" onPress={()=>{addJob()}}>
                                    Add
                                </Button>
                            </ModalFooter>
                        </>
                    )}
                </ModalContent>
            </Modal>
        </>
    )
}