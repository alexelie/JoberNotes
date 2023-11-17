using MongoDB.Bson.Serialization.Attributes;

namespace JoberNotesAPI.Models
{
    public class Interview
    {
        [BsonElement("date")]
        public DateTime Date { get; set; }

        [BsonElement("person")]
        public string Person { get; set; }

        [BsonElement("type")]
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
