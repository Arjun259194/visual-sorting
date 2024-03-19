export function getArr() {
  const a: number[] = [];
  for (let i = 0; i < 100; i++) {
    a[i] = i
  }
  return a
}

export const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

export function shuffleArray(inputArr: Array<number>) {
  const array = [...inputArr]
  for (let i = array.length - 1; i > 0; i--) {
    // Generate a random index between 0 and i (inclusive)
    const randomIndex = Math.floor(Math.random() * (i + 1));

    // Swap elements at randomIndex and i
    [array[i], array[randomIndex]] = [array[randomIndex], array[i]];
  }
  return array
}
