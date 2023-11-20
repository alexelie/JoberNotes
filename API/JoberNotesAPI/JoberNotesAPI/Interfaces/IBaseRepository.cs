namespace JoberNotesAPI.Interfaces
{
    public interface IBaseRepository<T>
    {
        public Task<List<T>> GetAllAsync();
    }
}
