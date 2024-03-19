import { sleep } from "../utils/function";
import Sort from "./Sort";

const BubbleSort = () => {
  return (
    <>
      <Sort clickSort={async (set, arr) => {
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
      }}>Bubble Sort</Sort>
    </>
  );
};

export default BubbleSort;
