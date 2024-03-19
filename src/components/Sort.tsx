import { ReactNode, useState } from "react";
import Button from "./UI/Button";
import { getArr, shuffleArray } from "../utils/function";
import { SetStateFn, State } from "../type";

interface Props {
  clickSort: (setArr: SetStateFn, arr: State) => void;
  children: ReactNode;
}

const Sort: React.FC<Props> = ({ clickSort, children }) => {
  const [arr, setArr] = useState(shuffleArray(getArr()));

  return (
    <section className="flex flex-col items-center space-y-5">
      <h1 className="text-3xl capitalize font-semibold">{children}</h1>
      <div
        className={`w-full mx-auto gap-px grid grid-cols-10 grid-flow-col grid-rows-10`}
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
      <Button
        onClick={async () => {
          clickSort(setArr, arr);
        }}
        className="p-2 bg-green-400 capitalize"
      >
        sort
      </Button>
    </section>
  );
};

export default Sort;
