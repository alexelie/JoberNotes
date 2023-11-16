import { JobApplication } from "../Notes/utils";

export const jobService = {
    addJob: async (jobForm: JobApplication) => {
        const requestHeaders: HeadersInit = new Headers();
        requestHeaders.set('Content-Type', 'application/json');
    
        try{
            const res = await fetch('https://data.mongodb-api.com/...', {
                method: 'POST',
                headers: requestHeaders
            })
            const data = await res.json()

            return data;
        }catch(e){
            window.console.log(e)
        }
    }
}