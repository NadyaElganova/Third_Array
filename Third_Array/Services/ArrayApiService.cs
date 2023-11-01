using Third_Array.Models;

namespace Third_Array.Services
{
    public class ArrayApiService: IArrayApiService
    {
        public async Task<ArrayNumbers> GetArrayThird(int[] array1) 
        { 
            ArrayNumbers array = new ArrayNumbers();
            array.Numbers = array1.ToArray();
            int n = array.Numbers.Length;
            bool swapped;
            do
            {
                swapped = false;
                for (int i = 1; i < n; i++)
                {
                    if (array.Numbers[i - 1] > array.Numbers[i])
                    {
                        int temp = array.Numbers[i - 1];
                        array.Numbers[i - 1] = array.Numbers[i];
                        array.Numbers[i] = temp;
                        swapped = true;
                    }
                }
            } while (swapped);

            return array;
        }
    }
}
