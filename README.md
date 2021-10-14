<p align=center>
  <img src="https://i.imgur.com/GPB8q9L.gif" />
</p>

<p align=center>
  Gif taken from <em><a href="https://setosa.io/ev/markov-chains/">Markov chains explained visually, by Victor Powell</a></em>
</p>

# state-markov

a simple state machine that transitions to a new state based on weights

# example
```typescript
import { StateMarkov } from "state-markov";

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

for (let i = 0; i < 10; i++) {
  console.log(sm.currentState.name); //=> one, three, one, two, three, one, one, three, one, two
  sm.transition();
}
```