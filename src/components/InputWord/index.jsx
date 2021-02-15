import {
  Card,
  CardActions,
  CardContent,
  Collapse,
  IconButton,
  MenuItem,
  Typography,
  TextField,
} from '@material-ui/core';
import styled from 'styled-components';
import { ExpandMore as ExpandMoreIcon } from '@material-ui/icons';
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

const InputWord = ({ word = {}, header = '', onChange }) => {
  const {
    tag = '',
    features = {},
  } = word;
  const { t } = useTranslation();
  const [expanded, setExpanded] = React.useState(true);

  return (
    <Card>
      <CardContent>
        <Typography variant="h5" color="textSecondary">{header}</Typography>
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
      <CardActions disableSpacing>
        <ActionButton onClick={() => { setExpanded(!expanded); }}>
          {!expanded && <ExpandMore /> }
          {expanded && <ExpandedMore />}
        </ActionButton>
      </CardActions>
      <Collapse in={expanded}>
        <CardContent>
          <InputWordFeatures
            tag={tag}
            value={features}
            onChange={(newFeatures) => { onChange({ ...word, features: newFeatures }); }}
          />
        </CardContent>
      </Collapse>
    </Card>
  );
};

InputWord.propTypes = {
  header: PropTypes.string.isRequired,
  word: PropTypes.shape().isRequired,
  onChange: PropTypes.func.isRequired,
};

export default InputWord;
