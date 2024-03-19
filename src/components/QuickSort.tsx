import { SetStateFn, State } from "../type";
import { sleep } from "../utils/function";
import Sort from "./Sort";

const QuickSort = () => {
  function clickHandler(set: SetStateFn, arr: State) {
    async function quickSort(arr: number[], low: number, high: number) {
      if (low < high) {
        const partitionIndex = await partition(arr, low, high);
        await Promise.all([
          quickSort(arr, low, partitionIndex - 1),
          quickSort(arr, partitionIndex + 1, high),
        ]);
      }
    }

    async function partition(arr: number[], low: number, high: number) {
      const pivot = arr[high];
      let i = low - 1;

      for (let j = low; j < high; j++) {
        if (arr[j] < pivot) {
          i++;
          await swap(arr, i, j);
        }
      }

      await swap(arr, i + 1, high);

      return i + 1;
    }

    async function swap(arr: number[], i: number, j: number) {
      const temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
      set([...arr]);
      await sleep(100);
    }

    quickSort(arr, 0, arr.length - 1);
  }

  return (
    <>
      <Sort clickSort={clickHandler}> Quick Sort</Sort>
    </>
  );
};

export default QuickSort;
