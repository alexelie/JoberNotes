using MongoDB.Bson.Serialization.Attributes;
using MongoDB.Bson;

namespace JoberNotesAPI.Models
{
    public class Job
    {
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public string? Id { get; set; }
        public string? Company { get; set; }
        public string? Role { get; set; }
        public string? Description { get; set; }
        public string? Notes { get; set; }
        public List<Interview> Interviews { get; set; } = new List<Interview>();
    }
}
