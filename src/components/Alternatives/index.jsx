import React from 'react';
import PropTypes from 'prop-types';
import {
  Button, FormControl, Grid, Typography,
} from '@material-ui/core';
import { Delete, Edit } from '@material-ui/icons';
import { useTranslation } from 'react-i18next';
import { getShortId } from '../../lib/id-generator';
import AlternativeContainer from '../AlternativeContainer';

const Alternatives = ({
  inputWords = [], alternatives = [], onChange, onAdd,
}) => {
  const [dialogOpened, setDialogOpened] = React.useState(false);
  const [selectedAlternative, setSelectedAlternative] = React.useState(-1);
  const { t } = useTranslation();

  return (
    <Grid container>
      {alternatives.map((path, index) => (
        <Grid container key={getShortId()}>
          <Grid item xs={6}>
            <Typography>
              {`${t('Alternatives.alternative')} #${index + 1}`}
            </Typography>
          </Grid>
          <Grid item xs={3}>
            <Button>
              <Delete color="secondary" />
            </Button>
          </Grid>
          <Grid item xs={3}>
            <Button
              onClick={() => {
                setSelectedAlternative(index);
                setDialogOpened(true);
              }}
            >
              <Edit color="primary" />
            </Button>
          </Grid>
        </Grid>
      ))}

      <Grid item xs={12}>
        <FormControl>
          <Button
            variant="contained"
            color="primary"
            onClick={() => {
              onAdd({
                id: getShortId(),
                condition: {},
                value: {},
              });
            }}
          >
            {`${t('Alternatives.add').toUpperCase()} +`}
          </Button>
        </FormControl>
      </Grid>

      {dialogOpened && (
      <AlternativeContainer
        open={dialogOpened}
        inputWords={inputWords}
        alternative={alternatives[selectedAlternative]}
        onSave={(updatedAlternative) => {
          const {
            id,
          } = updatedAlternative;

          const newAlternatives = [...alternatives];
          const index = alternatives.findIndex((v) => v.id === id);
          newAlternatives[index] = updatedAlternative;

          onChange(newAlternatives);
          setDialogOpened(false);
        }}
        onCancel={() => {
          setDialogOpened(false);
        }}
      />
      )}
    </Grid>
  );
};

Alternatives.propTypes = {
  inputWords: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  alternatives: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  onChange: PropTypes.func.isRequired,
  onAdd: PropTypes.func.isRequired,
};

export default Alternatives;
