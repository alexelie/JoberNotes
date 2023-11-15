import JobsDisplay from "./components/JobsDisplay";
import { InterviewType, JobApplication } from "./utils";



export default function Page() {
    const myJobs: JobApplication[] = [
        {
            company: "Comp 1",
            title: "Senior developer",
            notes: "note exemple",
            interviews: [
                {
                    date: new Date('November 13, 2023 14:30:00'),
                    person: "mr. interview",
                    type: InterviewType.FirstCall
                },
                {
                    date: new Date('November 23, 2023 14:30:00'),
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
                    date: new Date('November 9, 2023 15:30:00'),
                    person: "mr. interview",
                    type: InterviewType.FirstCall
                },
                {
                    date: new Date('November 12, 2023 15:30:00'),
                    person: "mr. interview",
                    type: InterviewType.FirstInterview
                },
                {
                    date: new Date('November 14, 2023 15:30:00'),
                    person: "mr. interview",
                    type: InterviewType.SecondInterview
                },
                {
                    date: new Date('December 9, 2023 15:30:00'),
                    person: "mr. interview",
                    type: InterviewType.ThirdInterview
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
        <div style={{padding: "20px", flex: "1 1 0", overflowY: "auto"}}>
            <h1 style={{fontSize: "2em"}}>Notes</h1>
            <div style={{marginBottom: "15px"}}></div>
            <div style={{display: "flex", width: "100%"}}>
                <div style={{flex: "1"}} className="mr-2 p-2 rounded border-1 border-stone-200">
                    <h2 className="text-xl">Entretiens aujourd'hui</h2>
                    <p>todo...</p>
                </div>

                <div style={{flex: "1"}} className="p-2 rounded border-1 border-stone-200">
                    <h2 className="text-xl">Entretiens demain</h2>
                    <p>todo...</p>
                </div>
            </div>
            <div style={{marginBottom: "15px"}}></div>
            <JobsDisplay jobs={myJobs}/>
        </div>
    )
}