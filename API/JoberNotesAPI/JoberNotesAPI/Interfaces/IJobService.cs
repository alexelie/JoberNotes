using JoberNotesAPI.Models;

namespace JoberNotesAPI.Interfaces
{
    public interface IJobService
    {
        Task<List<Job>> GetAllAsync();
    }
}
