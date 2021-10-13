interface Lengthable {
  length: number;
}

export class DifferentLengthError extends Error {
  constructor(states: Lengthable, weights: Lengthable) {
    super();
    this.message = `${states} and ${weights} must have the same length, got ${states.length} for length and ${weights.length} for weights`;
  }
}

export class UndefinedStateError extends Error {
  constructor(stateName: string) {
    super();
    this.message = `undefined state '${stateName}'. Make shure to declare it as a top-level key`;
  }
}

export function assertSameLength(a: Lengthable, b: Lengthable) {
  if (a.length != b.length) {
    throw new DifferentLengthError(a, b);
  }
}

export function assertSumOfWeightsIs1(weights: number[]) {
  const sum = weights.reduce((sum, w) => sum + w);
  if (sum > 1) {
    throw new Error("weight sum must be less than or equal to 1, got: " + sum);
  }
}
