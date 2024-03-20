import Sort from "./components/Sort";
import algo from "./utils/algo";

function App() {
  return (
    <>
      <main className="container mx-auto">
        <section className="flex flex-col items-center space-y-5">
          <h2 className="text-gray-700 capitalize underline text-3xl">
            By Arjun R. Mistry
          </h2>
          <div className="flex w-full *:w-full gap-4 md:grid md:grid-cols-2 items-center justify-between">
            {Object.entries(algo).map(([title, fn], i) => (
              <Sort key={i} clickSort={fn}>
                {title}
              </Sort>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}

export default App;
