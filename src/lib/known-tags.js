// Whole list here https://github.com/gamallo/DepPattern/blob/master/doc/tutorialGrammar.pdf
export default {
  adj: {
    gender: ['m', 'f'],
    number: ['s', 'p'],
    type: ['q', 'o'],
  },
  adv: {
    type: ['g', 'n'],
  },
  dt: {
    type: ['d', 'p', 't', 'e', 'i', 'a'],
    person: [1, 2, 3],
    gender: ['m', 'f', 'n'],
    number: ['s', 'p'],
    possessor: ['s', 'p'],
  },
  noun: {
    type: ['c', 'p'],
    gender: ['m', 'f'],
    number: ['s', 'p'],
    person: [1, 2, 3],
  },
  verb: {
    type: ['m', 'a', 's'],
    mode: ['i', 's', 'm', 'n', 'g', 'p'],
    tense: ['p', 'f', 's'],
    person: [1, 2, 3],
    number: ['s', 'p'],
    gender: ['m', 'f'],
  },
  pro: {
    type: ['d', 'p', 't', 'e', 'i', 'x', 'r'],
    person: [1, 2, 3],
    gender: ['m', 'f', 'n'],
    number: ['s', 'p', 'n'],
    possessor: ['s', 'p'],
  },
  prp: {
    type: ['p'],
  },
  card: {
    gender: ['m', 'f'],
    number: ['s', 'p'],
    person: [1, 2, 3],
  },
};
