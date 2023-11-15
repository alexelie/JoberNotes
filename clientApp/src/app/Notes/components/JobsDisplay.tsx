import { Card, CardContent, Typography, CardActions, Button, TextField, Box } from "@mui/material";
import { Textarea } from "@nextui-org/react";
import { InterviewType, JobApplication } from "../utils";


export interface JobsDisplayProps{
    jobs: JobApplication[]
}
export default function JobsDisplay(props: JobsDisplayProps){

    function addApplication(){
        
    }

    return (
        <div style={{flex: "1"}} className="p-2">
            <h2 className="text-xl mb-4">Postes</h2>
            
            {
                props.jobs.map((job, key) => {
                    return <>
                        <Card key={key} sx={{ minWidth: 275, marginBottom: "20px" }}>
                            <CardContent>
                                <Typography variant="h5" color="text.primary" gutterBottom>
                                    {job.title}
                                </Typography>
                                <Typography sx={{ mb: 1.5 }} variant="h6" component="div">
                                    {job.company}
                                </Typography>
                                <div style={{display: "flex", alignItems: "center", marginBottom: "25px"}}>
                                    {
                                        job.interviews.map((i, key) => {
                                            const borderColor = i.date > new Date() ? "#e9e9e98c" : "rgb(82 223 80)"
                                            return (
                                                <div key={key} className="rounded-xl" style={{border: `2px solid ${borderColor}`, marginRight: "10px", padding: "12px"}}>
                                                    <p className="mb-2">{i.date.toLocaleString()}</p>
                                                    <p className="mb-2">{InterviewType[i.type]}</p>
                                                    <p className="mb-2">{i.person}</p>
                                                </div>
                                        )})
                                    }
                                </div>
                                <div>
                                    <TextField
                                        value={job.notes}
                                        sx={{width: "100%", mb: 1}}
                                        id="outlined-multiline-flexible"
                                        multiline
                                        rows={1}
                                        maxRows={4}
                                        />
                                </div>
                            </CardContent>
                            <CardActions>
                                <Button size="small">Add interview</Button>
                            </CardActions>
                        </Card>
                    </>
                })
            }

        </div>
    )
}