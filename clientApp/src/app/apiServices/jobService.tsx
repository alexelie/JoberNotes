import { JobApplication } from "../Notes/utils";

export const jobService = {
    addJob: async (jobForm: JobApplication) => {
        try{
            const domain = process.env.NEXT_PUBLIC_APIBaseAddress ?? ""
            var url = 
            window.console.log(domain)
            const res = await fetch("https://localhost:7083/api/jobs", {
                method: 'GET',
            })
            const data = await res.json()

            return data;
        }catch(e){
            window.console.log(e)
        }
    },
    getJobs: async () => {
        try{
            const domain = process.env.NEXT_PUBLIC_APIBaseAddress ?? ""
            window.console.log(domain)
            const res = await fetch("https://localhost:7083/api/jobs", {
                method: 'GET',
            })
            const data = await res.json()

            return data as JobApplication[];
        }catch(e){
            window.console.log(e)
        }
    }
}