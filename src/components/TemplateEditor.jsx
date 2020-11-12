import React from 'react';
import { Editor } from 'draft-js';
import PropTypes from 'prop-types';

const TemplateEditor = (props) => {
  const {
    editorState,
    onChange,
  } = props;
  return (
    <Editor
      editorState={editorState}
      onChange={onChange}
      spellCheck
    />
  );
};

TemplateEditor.propTypes = {
  editorState: PropTypes.shape().isRequired,
  onChange: PropTypes.func.isRequired,
};

export default TemplateEditor;
