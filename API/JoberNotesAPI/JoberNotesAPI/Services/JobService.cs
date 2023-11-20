using JoberNotesAPI.Interfaces;
using JoberNotesAPI.Models;

namespace JoberNotesAPI.Services
{
    public class JobService: IJobService
    {
        private readonly IJobRepository JobRepo;

        public JobService(IJobRepository jobRepo)
        {
            JobRepo = jobRepo;
        }

        public async Task<List<Job>> GetAllAsync()
        {
            var jobs = await JobRepo.GetAllAsync();

            return jobs;
        }
    }
}
