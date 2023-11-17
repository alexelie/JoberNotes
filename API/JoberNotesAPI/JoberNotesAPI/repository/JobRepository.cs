using JoberNotesAPI.Models;
using Microsoft.Extensions.Options;
using MongoDB.Driver;

namespace JoberNotesAPI.repository
{
    public class JobRepository : BaseRepository<Job>
    {
        public JobRepository(IMongoClient mongodbClient, IOptions<JoberNotesDatabaseSettings> options) : base("Jobs", mongodbClient, options)
        {
        }
    }
}
