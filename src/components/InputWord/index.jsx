import {
  Card,
  CardActions,
  CardContent,
  Collapse,
  IconButton,
  MenuItem,
  TextField,
  CardHeader,
  Dialog,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button,
} from '@material-ui/core';
import styled from 'styled-components';
import { Delete, ExpandMore as ExpandMoreIcon } from '@material-ui/icons';
import React from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import { v4 as uuidv4 } from 'uuid';
import knownTags from '../../lib/known-tags';
import InputWordFeatures from '../InputWordFeatures';

const ActionButton = styled(IconButton)`
  margin-left: auto;
`;

const ExpandMore = styled(ExpandMoreIcon)`
  transform: rotate(0deg);
`;

const ExpandedMore = styled(ExpandMoreIcon)`
  transform: rotate(180deg);
`;

const InputWord = ({
  word = {}, header = '', onChange, onRemove,
}) => {
  const {
    tag = '',
    features = {},
  } = word;
  const { t } = useTranslation();
  const [expanded, setExpanded] = React.useState(false);
  const [deleteOpen, setDeleteOpen] = React.useState(false);

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

      <CardContent style={{ paddingTop: '0px', paddingBottom: '0px' }}>
        <TextField
          select
          fullWidth
          label="Choose a word type"
          helperText="Choose the function of the word in a setence"
          size="medium"
          value={tag}
          onChange={(e) => {
            onChange({
              ...word,
              features: {},
              tag: e.target.value,
            });
          }}
        >
          {Object.keys(knownTags).map((knownTag) => (
            <MenuItem value={knownTag} key={uuidv4()}>
              {t(`linguakit.tags.${knownTag}`)}
            </MenuItem>
          ))}
        </TextField>
      </CardContent>
      <CardActions disableSpacing style={{ paddingBottom: '0px' }}>
        <ActionButton onClick={() => { setExpanded(!expanded); }}>
          {!expanded && <ExpandMore /> }
          {expanded && <ExpandedMore />}
        </ActionButton>
      </CardActions>
      <Collapse in={expanded}>
        <CardContent style={{ paddingTop: '0px' }}>
          <InputWordFeatures
            tag={tag}
            value={features}
            onChange={(newFeatures) => { onChange({ ...word, features: newFeatures }); }}
          />
        </CardContent>
      </Collapse>

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

InputWord.propTypes = {
  header: PropTypes.string.isRequired,
  word: PropTypes.shape().isRequired,
  onChange: PropTypes.func.isRequired,
  onRemove: PropTypes.func.isRequired,
};

export default React.memo(InputWord);
