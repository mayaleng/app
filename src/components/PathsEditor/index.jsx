import React from 'react';
import PropTypes from 'prop-types';
import {
  Button,
  FormControl,
  Grid,
  Typography,
  Dialog,
  DialogContent,
  DialogContentText,
  DialogActions,
} from '@material-ui/core';
import { Delete, Edit } from '@material-ui/icons';
import { v4 as uuidv4 } from 'uuid';
import ConditionalDialog from '../ConditionalDialog';

const PathEditor = ({
  inputWords = [], paths = [], onChange, onRemove,
}) => {
  const [dialogOpened, setDialogOpened] = React.useState(false);
  const [deleteOpen, setDeleteOpen] = React.useState(false);

  return (
    <Grid container>
      {paths.map((path, index) => (
        <Grid container key={uuidv4()}>
          <Grid item xs={6}>
            <Typography>
              {`Alternativa #${index + 1}`}
            </Typography>
          </Grid>
          <Grid item xs={3}>
            <Button
              onClick={() => { setDeleteOpen(!deleteOpen); }}
            >
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
          <Dialog open={deleteOpen} onClose={() => { setDeleteOpen(!deleteOpen); }}>
            <DialogContent>
              <DialogContentText>
                ¿Desea eliminar este elemento?
              </DialogContentText>
              <DialogActions>
                <Button color="primary" onClick={() => { setDeleteOpen(!deleteOpen); }}>No</Button>
                <Button color="secondary" onClick={() => { onRemove(index); setDeleteOpen(!deleteOpen); }}>Sí</Button>
              </DialogActions>
            </DialogContent>
          </Dialog>
        </Grid>
      ))}

      <Grid item xs={12}>
        <FormControl>
          <Button
            variant="contained"
            color="primary"
            onClick={() => { onChange([...paths, {}]); }}
          >
            ADD +
          </Button>
        </FormControl>
      </Grid>

      {dialogOpened && (
      <ConditionalDialog
        inputWords={inputWords}
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
  inputWords: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  paths: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  onChange: PropTypes.func.isRequired,
  onRemove: PropTypes.func.isRequired,
};

export default PathEditor;
