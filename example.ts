import { StateMarkov } from "./src";

const spec = {
  one: {
    one: 0.1,
    two: 0.6,
    three: 0.3,
  },
  two: {
    one: 0.5,
    three: 0.5,
  },
  three: {
    one: 1,
  },
};

const sm = new StateMarkov(spec);
const stateLog = [];

for (let i = 0; i < 10; i++) {
  stateLog.push(sm.currentState.name);
  sm.transition();
}

console.log(stateLog.join(", ")); //=> one, three, one, two, three, one, one, three, one, two