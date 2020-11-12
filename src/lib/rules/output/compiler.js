function compileOutputRule(outputRule = {}) {
  const {
    conditional: { or = [] },
  } = outputRule;

  if (or.length === 0) {
    return;
  }

  const ifs = or.map((operand, index) => {
    const isFirst = index === 0;
    const isLast = index === or.length - 1;
    const isAnElseIf = index > 0 && !isLast;

    const bodyIf = compileOperand(operand);

    if (!bodyIf) {
      return undefined;
    }

    const { value } = operand;

    if (isAnElseIf) {
      return `{{else if ${bodyIf}}}${value}`;
    }

    if (isLast && !isFirst) {
      return `{{else if ${bodyIf}}}${value}{{end}}`;
    }

    if (isLast && isFirst) {
      return `{{if ${bodyIf}}}${value}{{end}}`;
    }

    return `{{if ${bodyIf}}}${value}`;
  });

  return ifs.join('');
}

function compileOperand(operand = {}) {
  const {
    and,
    or,
    operation = '',
    operands = [],
    word = 0,
    property = '',
    literal,
  } = operand;

  if (and) {
    return compileAnd(and);
  }

  if (or) {
    return compileOr(or);
  }

  if (word && property) {
    return compileWord(operand);
  }

  if (literal) {
    return JSON.stringify(literal);
  }

  if (!operation || operands.length === 0) {
    return;
  }

  return `(${operation} ${compileOperands(operands).join(' ')})`;
}

function compileOr(or = []) {
  const compiledOr = or.map((operand) => compileOperand(operand));

  return `(or ${compiledOr.join(' ')})`;
}

function compileAnd(and = []) {
  const compiledAnd = and.map((operand) => compileOperand(operand));
  return `(and ${compiledAnd.join(' ')})`;
}

function compileWord({ word = 0, property = '' }) {
  return `.Word${word}.Properties.${property}`;
}

function compileOperands(operands = []) {
  const compiledOperands = operands.map((operand) => compileOperand(operand));

  return compiledOperands;
}

module.exports = {
  compileOutputRule,
};
