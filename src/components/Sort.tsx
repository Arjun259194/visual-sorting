import { ReactNode, useState } from "react";
import Button from "./UI/Button";
import { SetStateFn, State } from "../type";
import { getArr, shuffleArray } from "./../utils/function";


interface Props {
  clickSort: (setArr: SetStateFn, arr: State) => void;
  children: ReactNode;
}

const Sort: React.FC<Props> = ({ clickSort, children }) => {
  const [arr, setArr] = useState(shuffleArray(getArr()));

  function mix() {
    setArr((prev) => {
      return shuffleArray(prev)
    })
  }

  return (
    <section className="rounded-md p-1 flex flex-col items-center space-y-5">
      <h1 className="text-3xl capitalize font-semibold">{children}</h1>
      <div
        className={`w-full rounded-lg overflow-hidden mx-auto gap-0.5 grid grid-cols-10 grid-flow-col grid-rows-10`}
      >
        {arr.map((i) => {
          return (
            <img
              key={i}
              className="w-full rounded-sm"
              src={`/images/${i <= 9 ? `0${i}` : i}.jpg`}
            />
          );
        })}
      </div>
      <div className="w-full space-x-5 flex px-5 py-2">
        <Button
          onClick={async () => {
            clickSort(setArr, arr);
          }}
        >
          sort
        </Button>
        <Button
          onClick={mix}
          variant="secondary"
        >
          UnSort
        </Button>
      </div>
    </section>
  );
};

export default Sort;
