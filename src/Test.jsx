import { Box } from '@material-ui/core';
import React from 'react';
import { ReactSortable } from 'react-sortablejs';
import InputEditor from './components/InputEditor';

const Test = () => {
  const [list, setList] = React.useState([1, 2, 3]);
  const ref = React.useRef(null);
  return (
    <ReactSortable list={list} setList={setList} delay={500}>
      {list.map((v, index) => {
        const key = `k${index}`;
        return (
          <Box key={key} style={{ width: '200px', height: '200px' }}>
            <InputEditor
              ref={ref}
              onChange={() => {}}
              inputWords={[
                {
                  name: 'test',
                },
                {
                  name: 'other',
                },
              ]}
            />
          </Box>
        );
      })}
    </ReactSortable>
  );
};

export default Test;
