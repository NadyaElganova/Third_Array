using Third_Array.Models;

namespace Third_Array.Services
{
    public interface IArrayApiService
    {
        Task<ArrayNumbers> GetArrayThird(int[] array1);
    }
}
