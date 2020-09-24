const translations = {
  menu: {
    home: 'Inicio',
    translator: 'Traductor',
    languages: 'Idiomas',
    about: 'Acerca de',
  },
  rules: {
    new: {
      title: 'Regla #',
    },
  },
  constraints: {
    properties: {
      mode: 'modo',
      number: 'número',
      person: 'persona',
      tense: 'tiempo',
      gender: 'género',
    },
    mode: {
      I: 'indicativo',
      S: 'subjuntivo',
      M: 'imperativo',
      N: 'infinitivo',
      G: 'gerundio',
      P: 'participio',
    },
    number: {
      S: 'singular',
      P: 'plural',
      I: 'invariable',
    },
    person: {
      1: 'primera',
      2: 'segunda',
      3: 'tercera',
    },
    tense: {
      P: 'presente',
      I: 'imperfecto',
      F: 'futuro',
      S: 'pasado',
      C: 'conditional',
    },
    gender: {
      M: 'masculino',
      F: 'femenino',
    },
  },
  output: {
    types: {
      conditional: "condicional",
      literal: "literal",
    },
    conditional: "salida condicional"
  }
};

export default translations;