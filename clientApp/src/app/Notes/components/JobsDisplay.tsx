import { Card, CardContent, Typography, CardActions, Button, TextField, Box } from "@mui/material";
import { Textarea } from "@nextui-org/react";

enum InterviewType {
    FirstCall,
    FirstInterview,
    SecondInterview,
    ThirdInterview,
    FourthINterview,
    FifthInterview,
    LastInterview
}
interface Interviews {
    date: Date,
    person: string,
    type: InterviewType
}
interface JobApplication {
    company: string,
    title: string,
    notes: string,
    interviews: Interviews[]
}

export default function JobsDisplay(){

    const myJobs: JobApplication[] = [
        {
            company: "Comp 1",
            title: "Senior developer",
            notes: "note exemple",
            interviews: [
                {
                    date: new Date('December 4, 2023 14:30:00'),
                    person: "mr. interview",
                    type: InterviewType.FirstCall
                },
                {
                    date: new Date('December 10, 2023 14:30:00'),
                    person: "mr. interview",
                    type: InterviewType.FirstInterview
                }
            ]
        },
        {
            company: "Comp 2",
            title: "Senior developer",
            notes: "",
            interviews: [
                {
                    date: new Date('December 9, 2023 15:30:00'),
                    person: "mr. interview",
                    type: InterviewType.FirstCall
                }
            ]
        }
    ]

    return (
        <div style={{flex: "1"}} className="p-2">
            <h2 className="text-xl mb-4">Postes</h2>
            
            {
                myJobs.map((job) => {
                    return <>
                        <Card sx={{ minWidth: 275, marginBottom: "20px" }}>
                            <CardContent>
                                <Typography variant="h5" color="text.primary" gutterBottom>
                                    {job.title}
                                </Typography>
                                <Typography sx={{ mb: 1.5 }} variant="h6" component="div">
                                    {job.company}
                                </Typography>
                                <Typography sx={{ mb: 1.5 }}>
                                <TextField
                                    value={job.notes}
                                    sx={{width: "100%", mb: 1.5}}
                                    id="outlined-multiline-flexible"
                                    multiline
                                    rows={3}
                                    maxRows={4}
                                    />
                                </Typography>
                                <Typography variant="body2" style={{display: "flex", alignItems: "center"}}>
                                    {
                                        job.interviews.map((i, key) => {
                                            return (
                                            <Card key={key} className="rounded-xl" style={{border: "2px solid #4bff00", marginRight: "10px", padding: "12px"}}>
                                                <p className="mb-2">{i.date.toLocaleString()}</p>
                                                <p className="mb-2">{InterviewType[i.type]}</p>
                                                <p className="mb-2">{i.person}</p>
                                            </Card>
                                        )})
                                    }
                                </Typography>
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