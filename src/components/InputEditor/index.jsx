import React, {
  useMemo, useRef, useState,
} from 'react';
import Draft, { EditorState } from 'draft-js';
import Editor from '@draft-js-plugins/editor';
import createMentionPlugin from '@draft-js-plugins/mention';
import {
  Card, CardContent, Paper, Typography,
} from '@material-ui/core';
import PropTypes from 'prop-types';

const filterContent = (content, inputWords = []) => {
  const { blocks, entityMap } = content;

  if (!blocks || !entityMap) {
    return content;
  }

  const newEntityMap = Object.keys(entityMap).reduce((acc, key) => {
    const entity = entityMap[`${key}`];
    const {
      data: {
        mention: {
          id,
        },
      },
    } = entity;

    const wordIndex = inputWords.findIndex((w) => id === w.id);
    const word = inputWords[wordIndex];
    if (!word) {
      return acc;
    }

    word.index = wordIndex;
    entity.data.mention = word;
    acc[key] = entity;

    return acc;
  }, {});

  const newBlocks = blocks.map((block) => {
    const {
      text,
      entityRanges = [],
    } = block;

    const {
      entityRanges: newEntityRanges,
      text: newBlockText,
    } = entityRanges.reduce((acc, entityRange) => {
      const {
        addToOffset: accAddToOffset,
        entityRanges: accEntityRanges,
        text: accText,
      } = acc;

      const {
        key,
        offset,
        length,
      } = entityRange;

      const entity = newEntityMap[key];

      if (!entity) {
        return acc;
      }

      const {
        data: {
          mention: {
            name,
          },
        },
      } = entity;

      const newLength = name.length;
      const newOffset = offset + accAddToOffset;
      const diffLength = newLength - length;
      const newText = accText.substring(0, newOffset)
        + name
        + accText.substring(newOffset + length);

      return {
        addToOffset: accAddToOffset + diffLength,
        entityRanges: [
          ...accEntityRanges,
          {
            ...entityRange,
            length: newLength,
            offset: newOffset,
          },
        ],
        text: newText,
      };
    }, { addToOffset: 0, entityRanges: [], text });

    return {
      ...block, entityRanges: newEntityRanges, text: newBlockText,
    };
  });

  return { ...content, blocks: newBlocks, entityMap: newEntityMap };
};

const InputEditor = ({ onChange, content = {}, inputWords = [] }) => {
  const ref = useRef(null);
  const [editorState, setEditorState] = useState(() => {
    const filteredContent = filterContent(content, inputWords);
    if (Object.keys(filteredContent).length === 0) {
      return EditorState.createEmpty();
    }

    const contentState = Draft.convertFromRaw(filteredContent);
    return EditorState.createWithContent(contentState);
  });

  const [open, setOpen] = useState(false);
  const [suggestions, setSuggestions] = useState(inputWords);

  const { MentionSuggestions, plugins } = useMemo(() => {
    const mentionPlugin = createMentionPlugin({
      entityMutability: 'IMMUTABLE',
      supportWhitespace: false,
      mentionComponent: ((innerProps) => {
        const { children } = innerProps;
        return (
          <span style={{ background: '#83b087', color: '#2f2020' }}>
            {children}
          </span>
        );
      }),
    }, []);

    const { MentionSuggestions: newComponent } = mentionPlugin;

    return {
      plugins: [mentionPlugin],
      MentionSuggestions: newComponent,
    };
  }, []);

  const onOpenChange = (newValue) => {
    setOpen(newValue);
  };

  const onSearchChange = ({ value }) => {
    setSuggestions(
      inputWords.filter(
        (current) => current.id && current.id.toLowerCase().startsWith(value.toLowerCase()),
      ),
    );
  };

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
            <Card
              onMouseDown={onMouseDown}
              onMouseEnter={onMouseEnter}
              onMouseUp={onMouseUp}
              style={{ background: isFocused ? '#d6cece' : '' }}
            >
              <CardContent>
                <Typography variant="button">
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
