import JobsDisplay from "./components/JobsDisplay";

export default function Page() {
    
    return (
        <div style={{margin: "10px", padding: "10px"}}>
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
            <JobsDisplay/>
        </div>
    )
}