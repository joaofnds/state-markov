const randBetween = (a: number, b: number): number =>
  Math.random() * (b - a) + a;

const randIntBetween = (a: number, b: number): number =>
  Math.floor(randBetween(a, b));

const randomPick = <T>(arr: T[]): T => arr[randIntBetween(0, arr.length)];

export function weightedRandomIndex(weights: number[]): number {
  let sum = 0;
  let rand = Math.random();

  for (let i = 0; i < weights.length; i++) {
    sum += weights[i];
    if (rand <= sum) return i;
  }

  return 0;
}
