import { assertSumOfWeightsIs1, UndefinedStateError } from "./errors";
import { State } from "./state";

export class StateMarkov {
  states: State[];
  currentState: State;

  constructor(spec: Record<string, Record<string, number>>) {
    this.states = Object.keys(spec).map((name) => new State(name));

    for (const state of this.states) {
      const neighbors = [];
      const weights = [];

      for (const [neighborName, weight] of Object.entries(spec[state.name])) {
        const neighbor = this.states.find((s) => s.name === neighborName);

        if (!neighbor) {
          throw new UndefinedStateError(neighborName);
        }

        neighbors.push(neighbor);
        weights.push(weight);
      }

      assertSumOfWeightsIs1(weights);

      state.setWeightedNeighbors(neighbors, weights);
    }

    this.currentState = this.states[0];
  }

  transition() {
    this.currentState = this.currentState.next();
  }
}
