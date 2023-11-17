using JoberNotesAPI.Models;
using JoberNotesAPI.repository;
using Microsoft.Extensions.Options;
using MongoDB.Driver;

namespace JoberNotesAPI.Services
{
    public class JobsService
    {
        private readonly JobRepository JobRepo;

        public JobsService(JobRepository jobRepo)
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
