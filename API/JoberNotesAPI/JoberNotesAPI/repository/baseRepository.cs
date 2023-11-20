using JoberNotesAPI.Interfaces;
using JoberNotesAPI.Models;
using Microsoft.Extensions.Options;
using MongoDB.Driver;

namespace JoberNotesAPI.repository
{
    public class BaseRepository<T> : IBaseRepository<T>
    {
        private IMongoCollection<T> _collection { get; set; }

        public BaseRepository(string collectionName, IMongoClient mongodbClient, IOptions<JoberNotesDatabaseSettings> options)
        {
            var mongoDatabase = mongodbClient.GetDatabase(options.Value.DatabaseName);

            _collection = mongoDatabase.GetCollection<T>(collectionName);
        }

        public async Task<List<T>> GetAllAsync()
        {
            try
            {
                return await _collection.Find(_ => true).ToListAsync();
            }
            catch (Exception ex)
            {
                //TODO: Add logging
                throw;
            }
        }
    }
}
