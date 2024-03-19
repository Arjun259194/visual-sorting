import { SetStateFn, State } from "../type";
import { sleep } from "../utils/function";
import Sort from "./Sort";

const SelectionSort = () => {
  // function selectionSort(arr: number[]) {
  //   for (let i = 0; i < arr.length - 1; i++) {
  //     // Find the index of the minimum element in the unsorted part
  //     let minIndex = i;
  //     for (let j = i + 1; j < arr.length; j++) {
  //       if (arr[j] < arr[minIndex]) {
  //         minIndex = j;
  //       }
  //     }
  //     // Swap the minimum element with the first element of the unsorted part
  //     if (minIndex !== i) {
  //       [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
  //     }
  //   }
  // }

  async function selectionSort(set: SetStateFn, arr: State) {
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
        await sleep(100)
      }
    }
  }

  return <Sort clickSort={selectionSort}>Selection Sort</Sort>;
};

export default SelectionSort;
