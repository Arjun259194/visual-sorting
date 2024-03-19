import BubbleSort from "./components/BubbleSort";
import QuickSort from "./components/QuickSort";
import SelectionSort from "./components/SelectionSort";

function App() {
  return (
    <>
      <main className="container mx-auto">
        <section className="flex flex-col items-center space-y-5">
          <h2 className="text-gray-700 capitalize underline text-3xl">
            By Arjun R. Mistry
          </h2>
          <div className="flex w-full *:w-full gap-4 md:grid md:grid-cols-2 items-center justify-between">
            <BubbleSort />
            <QuickSort />
            <SelectionSort />
          </div>
        </section>
      </main>
    </>
  );
}

export default App;
