import React from 'react';
import PropTypes from 'prop-types';
import {
  Button, FormControl, Grid, Typography,
} from '@material-ui/core';
import { Delete, Edit } from '@material-ui/icons';
import ConditionalDialog from '../ConditionalDialog';

const PathEditor = ({ words = [] }) => {
  const [paths, setPaths] = React.useState([1, 2, 3]);
  const [dialogOpened, setDialogOpened] = React.useState(false);

  return (
    <Grid container>
      {paths.map((path, index) => {
        const key = `p${index}`;
        return (
          <Grid container key={key}>
            <Grid item xs={6}>
              <Typography>
                {`Alternativa #${index + 1}`}
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
                  setDialogOpened(true);
                }}
              >
                <Edit color="primary" />
              </Button>
            </Grid>
          </Grid>
        );
      })}

      <Grid item xs={12}>
        <FormControl>
          <Button
            variant="contained"
            color="primary"
            onClick={() => { setPaths([...paths, 1]); }}
          >
            ADD +
          </Button>
        </FormControl>
      </Grid>

      {dialogOpened && (
      <ConditionalDialog
        words={words}
        open={dialogOpened}
        onSave={() => {
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

PathEditor.propTypes = {
  words: PropTypes.arrayOf(PropTypes.shape).isRequired,
};

export default PathEditor;
