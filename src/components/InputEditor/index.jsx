import React, {
  useCallback, useMemo, useRef, useState,
} from 'react';
import Draft, { EditorState } from 'draft-js';
import Editor from '@draft-js-plugins/editor';
import createMentionPlugin from '@draft-js-plugins/mention';
import {
  Card, CardContent, Paper, Typography,
} from '@material-ui/core';
import PropTypes from 'prop-types';

const InputEditor = ({ onChange, content = {}, inputWords = [] }) => {
  const ref = useRef(null);
  const [editorState, setEditorState] = useState(() => {
    const contentState = Draft.convertFromRaw(content);
    return EditorState.createWithContent(contentState);
  });

  const [open, setOpen] = useState(false);
  const [suggestions, setSuggestions] = useState(inputWords);

  const { MentionSuggestions, plugins } = useMemo(() => {
    const mentionPlugin = createMentionPlugin({
      mentionComponent: ((innerProps) => {
        const { children } = innerProps;
        return (
          <span style={{ background: 'blue', color: 'white' }}>
            {children}
          </span>
        );
      }),
    });

    const { MentionSuggestions: newComponent } = mentionPlugin;

    return { plugins: [mentionPlugin], MentionSuggestions: newComponent };
  }, []);

  const onOpenChange = useCallback((newValue) => {
    setOpen(newValue);
  }, []);

  const onSearchChange = useCallback(({ value }) => {
    setSuggestions(suggestions.filter((current) => current.name.includes(value)));
  }, []);

  return (
    <Paper onClick={() => {
      ref.current.focus();
    }}
    >
      <Editor
        editorKey="editor"
        editorState={editorState}
        onChange={(newEditorState) => {
          const raw = Draft.convertToRaw(newEditorState.getCurrentContent());
          setEditorState(newEditorState);
          onChange(raw);
        }}
        plugins={plugins}
        ref={ref}
      />

      <MentionSuggestions
        open={open}
        onOpenChange={onOpenChange}
        suggestions={suggestions}
        onSearchChange={onSearchChange}
        entryComponent={(incommingProps) => {
          const {
            mention,
            onMouseDown,
            onMouseEnter,
            onMouseUp,
            isFocused,
          } = incommingProps;

          return (
            <Card onMouseDown={onMouseDown} onMouseEnter={onMouseEnter} onMouseUp={onMouseUp} style={{ background: isFocused ? 'red' : 'green' }}>
              <CardContent>
                <Typography>
                  {mention.name}
                </Typography>
              </CardContent>
            </Card>
          );
        }}
      />
    </Paper>
  );
};

InputEditor.propTypes = {
  content: PropTypes.shape().isRequired,
  onChange: PropTypes.func.isRequired,
  inputWords: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string,
  })).isRequired,

};

export default InputEditor;
