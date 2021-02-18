export default {
  tags: {
    adj: 'adjetivo',
    adv: 'advervio',
    dt: 'determinante',
    noun: 'sustantivo',
    verb: 'verbo',
    pro: 'pronombre',
    prp: 'preposición',
    card: 'cardinales',
  },
  adj: {
    features: {
      gender: 'género',
      number: 'número',
      type: 'tipo',
    },
    gender: {
      m: 'masculino',
      f: 'femenino',
    },
    number: {
      s: 'singular',
      p: 'plural',
    },
    type: {
      q: 'calificativo',
      o: 'ordinal',
    },
  },
  adv: {
    features: {
      type: 'tipo',
    },
    type: {
      g: 'general',
      n: 'negativo',
    },
  },
  dt: {
    features: {
      type: 'tipo',
      person: 'persona',
      gender: 'género',
      number: 'número',
      possessor: 'posesivo',
    },
    type: {
      d: 'demostrativo',
      p: 'posesivo',
      t: 'interrogativo',
      e: 'exlamativo',
      i: 'indefinido',
      a: 'artículo',
    },
    person: {
      1: 'primera',
      2: 'segunda',
      3: 'tercera',
    },
    gender: {
      m: 'masculino',
      f: 'femenino',
      n: 'neutral',
    },
    number: {
      s: 'singular',
      p: 'plural',
      n: 'invariable',
    },
    possessor: {
      s: 'singular',
      p: 'plural',
    },
  },
  noun: {
    features: {
      type: 'tipo',
      gender: 'género',
      number: 'número',
      person: 'persona',
    },
    type: {
      c: 'común',
      p: 'propio',
    },
    gender: {
      m: 'mascuilino',
      f: 'femenino',
    },
    number: {
      s: 'singular',
      p: 'plural',
    },
    person: {
      1: 'primera',
      2: 'segunda',
      3: 'tercera',
    },
  },
  verb: {
    features: {
      type: 'tipo',
      mode: 'modo',
      tense: 'tiempo',
      person: 'persona',
      number: 'number',
      gender: 'género',
    },
    type: {
      m: 'principal',
      a: 'auxiliar',
      s: 'semi-auxiliar',
    },
    mode: {
      i: 'indicativo',
      s: 'subjuntivo',
      m: 'imperativo',
      n: 'infinitivo',
      g: 'gerundio',
      p: 'participio',
    },
    tense: {
      p: 'presente',
      i: 'imperfecto',
      f: 'futuro',
      s: 'pasado',
      c: 'condicional',
    },
    person: {
      1: 'primera',
      2: 'segunda',
      3: 'tercera',
    },
    number: {
      s: 'singular',
      p: 'plural',
    },
    gender: {
      m: 'mascuilino',
      f: 'femenino',
    },
  },
  pro: {
    features: {
      type: 'tipo',
      person: 'persona',
      gender: 'género',
      number: 'número',
      possessor: 'posesivo',
      case: 'case',
    },
    type: {
      d: 'demostrativo',
      p: 'personal',
      t: 'interrogativo',
      e: 'exclamativo',
      i: 'indefinido',
      x: 'posesivo',
      r: 'relativo',
    },
    person: {
      1: 'primera',
      2: 'segunda',
      3: 'tercera',
    },
    gender: {
      m: 'mascuilino',
      f: 'femenino',
      n: 'neutral',
    },
    number: {
      s: 'singular',
      p: 'plural',
      n: 'invariable',
    },
    possessor: {
      s: 'singular',
      p: 'plural',
    },
  },
  prp: {
    features: {
      type: 'tipo',
    },
    type: {
      p: 'preposicón',
    },
  },
  card: {
    features: {
      gender: 'género',
      number: 'número',
      person: 'persona',
    },
    gender: {
      m: 'mascuilino',
      f: 'femenino',
    },
    number: {
      s: 'singular',
      p: 'plural',
    },
    person: {
      1: 'primera',
      2: 'segunda',
      3: 'tercera',
    },
  },
};
