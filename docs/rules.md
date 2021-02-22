# Rule structure

- [Rule structure](#rule-structure)
  - [Input _s_](#input-s)
  - [Output _s_](#output-s)
    - [Alternatives](#alternatives)
  - [Example](#example)
  
The output of the rule Editor will be a document with a structure like

```json
{
    "input": [
        ...
    ],
    "output": [
        ...
    ]
}
```

## Input _s_
Elements of the `input` array represents single members of a sentence that will be present in a setence to translate. 

The structure of each element will be like the following

```json
{
    "id": "<uuid>",
    "tag":  "<string>",
    "features": {
        "<key>": "<value>"
    }
}
```

## Output _s_

The elements of this array are most complext than the prior. Each element  have the following format
```json
{
    "id": "<uuid>",
    "alternatives": [ ... ],
    "type": "<simple|conditional>",
    "value": {
        "type": "<literal|dynamic>",
        "literal": "alex",
        "dynamic": {
            "word": 1,
            "property": "<any string>"
        }
    }
}
```

If `value` is provided, it automatically will be used as the ouput's value. Otherwise conditional will be validated. 

### Alternatives
The elements of this array will be used as alternatives to the output element. Based on conditional evaluations, the value will be selected from the first condition that is fullfilled.

Each element of the `alternatives` array have the following format:
```json
{
    "id": "<uuid>",
    "condition": {...},
    "value": {
        "type": "<literal|dynamic>",
        "literal": "alex",
        "dynamic": {
            "word": 1,
            "property": "<any string>"
        }
    }
}
```

`condition` property has a recursive pattern. It represents a condition to evaluate. 

```json
{
    "operator": "<and|or>",
    "operands": [
        // Recursive
        { 
            "operator": ...,
            "operands": [...]
        },
        
        // Single operand
        {
            "operator": "<eq|startsWith|endsWith>",
            "operands": [
                {
                    "type": "literal",
                    "literal": "<any string>"
                },
                {
                    "type": "dynamic",
                    "dynamic": {
                        "word": <numeric position>,
                        "property": "<any string>"
                    }
                }
            ]
        }
    ]
}
```

## Example

An example of a whole rule 
```json
{
    "input": [
        {
            "id": "fd85fcc5-fe1c-4fab-baf7-8dbdba898de3",
            "tag": "verb",
            "features": {
                "mode": "i"
            }
        }
    ],
    "output": [
        {
            "id": "fd85fcc5-fe1c-4fab-baf7-8dbdba898de4",
            "type": "simple",
            "value": {
                "type": "literal",
                "literal": "a'"
            }
        },
        {
            "id": "fd85fcc5-fe1c-4fab-baf7-8dbdba898de5",
            "type": "simple",
            "value": {
                "type": "dynamic",
                "dynamic": {
                    "word": 1,
                    "property": "translation"
                }
            }
        },
        {
            "id": "fd85fcc5-fe1c-4fab-baf7-8dbdba898de6",
            "type": "conditional",
            "alternatives": [
                {
                    "id": "fd85fcc5-fe1c-4fab-baf7-8dbdba898de7",
                    "value": {
                        "type": "literal",
                        "literal": "verb"
                    },
                    "condition": [
                        {
                            "operator": "and",
                            "operands": [
                                {
                                    "type": "dynamic",
                                    "dynamic": {
                                        "word": 1,
                                        "property": "tag" 
                                    }
                                },
                                {
                                    "type": "literal",
                                    "literal": "verb"
                                }
                            ]
                        }
                    ],
                },
                {
                    "id": "fd85fcc5-fe1c-4fab-baf7-8dbdba898de8",
                    "value": {
                        "type": "literal",
                        "literal": "noun"
                    },
                    "condition": [
                        {
                            "operator": "and",
                            "operands": [
                                {
                                    "type": "dynamic",
                                    "dynamic": {
                                        "word": 1,
                                        "property": "tag" 
                                    }
                                },
                                {
                                    "type": "literal",
                                    "literal": "noun"
                                }
                            ]
                        }
                    ],
                }
            ]
        },
    ]
}
```
