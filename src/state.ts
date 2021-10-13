import { assertSameLength, assertSumOfWeightsIs1 } from "errors";
import { weightedRandomIndex } from "random";

export class State {
  private neighbors: State[] = [];
  private weights: number[] = [];

  constructor(readonly name: string) {}

  setWeightedNeighbors(neighbors: State[], weights: number[]) {
    assertSameLength(neighbors, weights);
    assertSumOfWeightsIs1(weights);

    this.neighbors = neighbors;
    this.weights = weights;
  }

  next(): State {
    const index = weightedRandomIndex(this.weights);
    return this.neighbors[index];
  }

  toString(): string {
    return this.name;
  }
}
