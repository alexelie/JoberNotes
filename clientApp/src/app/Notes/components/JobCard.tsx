import { Button, Card, CardBody, CardFooter, CardHeader, Chip, Divider, Spacer } from "@nextui-org/react"
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import HourglassBottomIcon from '@mui/icons-material/HourglassBottom';
import { JobApplication } from "../utils";

interface JobCardProps{
    job: JobApplication
}

export default function JobCard(props: JobCardProps){

    return (
        <Card className="mb-4">
        <CardHeader className="flex gap-3" style={{display: "flex", justifyContent: "space-between"}}>
            <div className="flex flex-col">
                <p className="text-md">{props.job.role}</p>
                <p className="text-small text-default-500">{props.job.company}</p>
            </div>
            <Button color="danger" variant="ghost">
                Didn't work out
            </Button>
        </CardHeader>
        <Divider />
        <CardBody>
            <p> {props.job.description}</p>
            <Spacer y={4} />
            <div style={{display: "flex", alignItems: "center", flexWrap: "wrap"}}>
                {
                    props.job.interviews?.length == 0 ? "Aucune reponse"  
                    :
                    props.job.interviews?.map((i, key) => {
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
    )
}