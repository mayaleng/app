import React from 'react';
import {
  Grid, Link, Breadcrumbs, Typography,
} from '@material-ui/core';
import { withTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
import ConstraintsContainer from './ConstraintsContainer';
import OutputRulesContainer from './OutputRulesContainer';

class TranslationRule extends React.Component {
  constructor() {
    super();
    this.state = {
      constraints: {},
    };
  }

  componentDidMount() {
    const rule = {
      source_language: 'espaol',
      target_language: 'kaqchikel',
      pattern: 'NOUN,NOUN,VERB,DET,NOUN',
      details: [
        {
          tag: 'NOUN',
          type: 'C',
          properties: {
            type: 'C',
          },
        },
        {
          tag: 'NOUN',
          type: 'P',
          properties: {
            type: 'P',
          },
        },
        {
          tag: 'VERB',
          type: 'M',
          properties: {
            tense: 'S',
            person: '3',
          },
        },
        {
          tag: 'DET',
          type: 'I',
          properties: {
            type: 'I',
          },
        },
        {
          tag: 'NOUN',
          type: 'C',
          properties: {
            type: 'C',
          },
        },
      ],
      output: [
        {
          type: 'conditional',
          value: '{{ if (eq .Word3.p.tense "S") }}x{{end}}',
          raw: {
            conditional: {
              or: [
                {
                  or: [
                    {
                      and: [
                        {
                          operation: 'eq',
                          operands: [
                            {
                              word: 1,
                              property: 'type',
                            },
                            {
                              literal: 'Alex',
                            },
                          ],
                        },
                        {
                          operation: 'eq',
                          operands: [
                            {
                              word: 1,
                              property: 'type',
                            },
                            {
                              literal: 'Alex',
                            },
                          ],
                        },
                      ],
                    },
                    {
                      and: [
                        {
                          operation: 'eq',
                          operands: [
                            {
                              word: 1,
                              property: 'type',
                            },
                            {
                              literal: 'Alex',
                            },
                          ],
                        },
                        {
                          operation: 'eq',
                          operands: [
                            {
                              word: 1,
                              property: 'type',
                            },
                            {
                              literal: 'Alex',
                            },
                          ],
                        },
                      ],
                    },
                  ],
                },
              ],
            },
          },
        },
        {
          type: 'conditional',
          value:
            '{{ if and (eq .Word3.Properties.person "3") (eq .Word3.Properties.number "S") ( .Word3.Properties.tr ) }}u{{end}}',
        },
        {
          type: 'literal',
          value: '{{ .Word3.Translation }}',
        },
        {
          type: 'literal',
          value: ' ',
        },
        {
          type: 'literal',
          value: '{{ .Word4.Translation }}',
        },
        {
          type: 'literal',
          value: ' ',
        },
        {
          type: 'literal',
          value: '{{ .Word5.Translation }}',
        },
        {
          type: 'literal',
          value: ' ',
        },
        {
          type: 'literal',
          value: '{{ .Word1.Translation }}',
        },
        {
          type: 'literal',
          value: ' ',
        },
        {
          type: 'literal',
          value: '{{ .Word2.Translation }}',
        },
      ],
    };

    this.setState({ constraints: rule.details, outputRules: rule.output });
  }

  handleConstraintChanges(newConstraints) {
    this.set({ constraints: newConstraints });
  }

  handleOutputChanges(newOutputRules) {
    this.set({ outputRules: newOutputRules });
  }

  render() {
    const { t } = this.props;
    const { constraints, outputRules } = this.state;

    return (
      <>
        <Typography variant="h1" component="h1">
          {t('rules.new.title')}
        </Typography>

        <Breadcrumbs aria-label="breadcrumb">
          <Link color="inherit" href="/">
            Material-UI
          </Link>
          <Link color="inherit" href="/getting-started/installation/">
            Core
          </Link>
          <Typography color="textPrimary">Breadcrumb</Typography>
        </Breadcrumbs>
        <Grid container spacing={0}>
          <Grid item xs={12} sm={12} md={12} lg={12}>
            <center>
              <h3>Constraints</h3>
              <ConstraintsContainer
                constraints={constraints}
                onChage={this.handleConstraintChanges}
              />
            </center>
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={12}>
            <center>
              <h3>Output</h3>
              <OutputRulesContainer
                outputRules={outputRules}
                onChage={this.handleOutputChanges}
                words={constraints}
              />
            </center>
          </Grid>
        </Grid>
      </>
    );
  }
}

TranslationRule.propTypes = {
  t: PropTypes.func.isRequired,
};

export default withTranslation()(TranslationRule);
