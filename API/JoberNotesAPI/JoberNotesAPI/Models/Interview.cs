namespace JoberNotesAPI.Models
{
    public class Interview
    {
        public DateTime Date { get; set; }
        public string Person { get; set; }
        public InterviewType Type { get; set; }
    }

    public enum InterviewType 
    {
        FirstCall,
        SecondCall,
        ThirdCall,
        FourthCall,
        FifthCall,
        LastInterview
    }
}
