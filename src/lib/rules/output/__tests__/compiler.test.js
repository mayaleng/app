const lib = require("../compiler");

describe("Go template compiler", () => {
  test("return a template with success when the given struct is well formed", () => {
    expect.assertions(1);

    const rule = {
      conditional: {
        or: [
          {
            and: [
              {
                operation: "StartsWithVowel",
                operands: [
                  {
                    literal: "1",
                  },
                ],
              },
              {
                operation: "eq",
                operands: [
                  {
                    literal: 1,
                  },
                  {
                    literal: 2,
                  },
                ],
              },
            ],
            value: "one",
          },
          {
            and: [
              {
                operation: "StartsWithVowel",
                operands: [
                  {
                    literal: "1",
                  },
                ],
              },
              {
                operation: "eq",
                operands: [
                  {
                    word: 1,
                    property: "intr",
                  },
                  {
                    literal: true,
                  },
                ],
              },
              {
                word: 1,
                property: "attr",
              },
            ],
            value: "two",
          },
        ],
      },
    };
    const compiledTemplate = lib.compileOutputRule(rule);
    return expect(compiledTemplate).not.toBeNull();
  });
});
