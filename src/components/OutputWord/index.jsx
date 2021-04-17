import {
  CardContent,
  Card,
  FormControl,
  Switch,
  Typography,
  Grid,
  Dialog,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button,
  CardHeader,
  IconButton,
} from '@material-ui/core';
import React from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import { Delete } from '@material-ui/icons';
import Alternatives from '../Alternatives';
import InputEditor from '../InputEditor';

const CONDITIONAL = 'conditional';
const SIMPLE = 'simple';

const OutputWord = ({
  inputWords = [], word = {}, onChange, onRemove, header,
}) => {
  const { t } = useTranslation();
  const [deleteOpen, setDeleteOpen] = React.useState(false);

  const {
    type = 'simple',
    simple = {},
    conditional = {},
  } = word;

  const isConditional = type === CONDITIONAL;

  const editorKey = inputWords.reduce((key, w) => `${key}${w.tag}`, '');

  return (
    <Card>
      <CardHeader
        title={header}
        action={(
          <IconButton aria-label="delete" onClick={() => { setDeleteOpen(!deleteOpen); }}>
            <Delete />
          </IconButton>
        )}
        style={{ paddingBottom: '10px' }}
      />
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
            <InputEditor
              key={editorKey}
              content={simple || {}}
              inputWords={inputWords}
              onChange={(newValue) => {
                onChange({
                  ...word,
                  type: 'simple',
                  simple: newValue,
                });
              }}
            />
          )}
          {isConditional && (
          <Alternatives
            inputWords={inputWords}
            alternatives={conditional.alternatives || []}
            onAdd={(newAlternative) => {
              const {
                alternatives = [],
              } = conditional;
              onChange({
                ...word,
                conditional: {
                  ...conditional,
                  alternatives: [
                    ...alternatives,
                    newAlternative,
                  ],
                },
              });
            }}
            onChange={
            (newAlternatives) => {
              onChange({
                ...word,
                conditional: {
                  ...conditional,
                  alternatives: newAlternatives,
                },
              });
            }
          }
          />
          )}
        </FormControl>
      </CardContent>

      <Dialog open={deleteOpen} onClose={() => { setDeleteOpen(!deleteOpen); }}>
        <DialogContent>
          <DialogContentText>
            ¿Desea eliminar este elemento?
          </DialogContentText>
          <DialogActions>
            <Button color="primary" onClick={() => { setDeleteOpen(!deleteOpen); }}>No</Button>
            <Button color="secondary" onClick={() => { onRemove(word); }}>Sí</Button>
          </DialogActions>
        </DialogContent>
      </Dialog>
    </Card>
  );
};

OutputWord.propTypes = {
  header: PropTypes.string.isRequired,
  inputWords: PropTypes.arrayOf(PropTypes.shape).isRequired,
  word: PropTypes.shape({
    id: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
  }).isRequired,
  onChange: PropTypes.func.isRequired,
  onRemove: PropTypes.func.isRequired,
};

export default React.memo(OutputWord);
