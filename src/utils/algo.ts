import { SetStateFn, State } from "../type";
import { sleep } from "./function";

type AlgoMap = Record<string, (arg1: SetStateFn, arg2: State) => Promise<void>>;

export default {
  "Bubble Sort": async (set, arr) => {
    for (let i = 0; i < arr.length; i++) {
      for (let j = i; j < arr.length; j++) {
        if (arr[i] > arr[j]) {
          let temp = arr[i];
          arr[i] = arr[j];
          arr[j] = temp;
          set([...arr]);
          await sleep(100);
        }
      }
    }
  },
  "Selection Sort": async (set, arr) => {
    for (let i = 0; i < arr.length; i++) {
      let minIndex = i;
      for (let j = i + 1; j < arr.length; j++) {
        if (arr[j] < arr[minIndex]) {
          minIndex = j;
        }
      }
      if (minIndex !== i) {
        let temp = arr[i];
        arr[i] = arr[minIndex];
        arr[minIndex] = temp;
        set([...arr]);
        await sleep(100);
      }
    }
  },
  "Quick Sort": async (set, arr) => {
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
  },
} satisfies AlgoMap;
