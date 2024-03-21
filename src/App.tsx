import Sort from "./components/Sort";
import algo from "./utils/algo";

function App() {
  return (
    <>
      <main className="container mx-auto">
        <section className="flex p-2 flex-col items-center space-y-5">
          <h2 className="capitalize underline text-3xl">
            By Arjun R. Mistry
          </h2>
          <div className="flex w-full *:w-full gap-4 md:grid md:grid-cols-3 md:gap-10 items-center justify-between">
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
