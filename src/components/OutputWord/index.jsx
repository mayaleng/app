import {
  CardContent,
  Card,
  FormControl,
  TextField,
  Switch,
  Typography,
  Grid,
} from '@material-ui/core';
import React from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import PathsEditor from '../PathsEditor';

const CONDITIONAL = 'conditional';
const SIMPLE = 'simple';

const OutputWord = ({ inputWords = [], word = {}, onChange }) => {
  const { t } = useTranslation();
  const {
    type = 'simple',
    value = {},
    alternatives = [],
  } = word;

  const isConditional = type === CONDITIONAL;

  return (
    <Card>
      <CardContent>
        <Typography component="div">
          <Grid component="label" container alignItems="center" spacing={1}>
            <Grid item>{t('OutputWord.simple')}</Grid>
            <Grid item>
              <Switch
                color="primary"
                value={isConditional}
                onChange={() => {
                  onChange({ ...word, type: isConditional ? SIMPLE : CONDITIONAL });
                }}
              />
            </Grid>
            <Grid item>{t('OutputWord.conditional')}</Grid>
          </Grid>
        </Typography>
      </CardContent>
      <CardContent>
        <FormControl fullWidth>
          {!isConditional && (
          <TextField
            label={t('OutputWord.value')}
            value={value.literal || ''}
            onChange={(e) => {
              onChange({
                ...word,
                value: {
                  type: 'literal',
                  literal: e.target.value,
                },
              });
            }}
          />
          )}
          {isConditional && (
          <PathsEditor
            inputWords={inputWords}
            paths={alternatives}
            onChange={
            (newAlternatives) => {
              onChange({
                ...word,
                alternatives: newAlternatives,
              });
            }
          }
          />
          )}
        </FormControl>
      </CardContent>
    </Card>
  );
};

OutputWord.propTypes = {
  inputWords: PropTypes.arrayOf(PropTypes.shape).isRequired,
  word: PropTypes.shape({
    id: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
  }).isRequired,
  onChange: PropTypes.func.isRequired,
};

export default OutputWord;
