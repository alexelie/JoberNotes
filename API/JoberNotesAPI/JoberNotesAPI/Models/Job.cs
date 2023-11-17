using MongoDB.Bson.Serialization.Attributes;
using MongoDB.Bson;
using System.Runtime.Serialization;

namespace JoberNotesAPI.Models
{
    public class Job
    {
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public string Id { get; set; }

        [BsonElement("company")]
        public string? Company { get; set; }

        [BsonElement("role")]
        public string? Role { get; set; }

        [BsonElement("description")]
        public string? Description { get; set; }

        [BsonElement("notes")]
        public string? Notes { get; set; }

        [BsonElement("interviews")]
        public List<Interview> Interviews { get; set; } = new List<Interview>();
    }
}
