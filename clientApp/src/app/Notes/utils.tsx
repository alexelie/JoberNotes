export enum InterviewType {
    FirstCall,
    FirstInterview,
    SecondInterview,
    ThirdInterview,
    FourthINterview,
    FifthInterview,
    LastInterview
}
export interface Interviews {
    date: Date,
    person: string,
    type: InterviewType
}
export interface JobApplication {
    company: string,
    title: string,
    description: string,
    notes: string,
    interviews: Interviews[]
}