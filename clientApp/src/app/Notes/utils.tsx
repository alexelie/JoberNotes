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
    company: string | undefined,
    role: string | undefined,
    description: string | undefined,
    notes: string | undefined,
    interviews: Interviews[] | undefined
}