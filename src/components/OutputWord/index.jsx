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
import PathEditor from '../PathEditor';

const OutputWord = ({ inputWords = [] }) => {
  const [isConditional, setIsConditional] = React.useState(false);

  return (
    <Card>
      <CardContent>
        <Typography component="div">
          <Grid component="label" container alignItems="center" spacing={1}>
            <Grid item>Literal</Grid>
            <Grid item>
              <Switch color="primary" value={isConditional} onChange={() => { setIsConditional(!isConditional); }} />
            </Grid>
            <Grid item>Condicional</Grid>
          </Grid>
        </Typography>
      </CardContent>
      <CardContent>
        <FormControl fullWidth>
          {!isConditional && <TextField label="Palabra literal" />}
          {isConditional && <PathEditor inputWords={inputWords} />}
        </FormControl>
      </CardContent>
    </Card>
  );
};

OutputWord.propTypes = {
  inputWords: PropTypes.arrayOf(PropTypes.shape).isRequired,
};

export default OutputWord;
