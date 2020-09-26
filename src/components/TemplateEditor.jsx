import React from "react";
import { Editor } from "draft-js";

class TemplateEditor extends React.Component {
  render() {
    return (
      <Editor
        editorState={this.props.editorState}
        onChange={this.props.onChange}
        spellCheck={true}
      />
    );
  }
}

export default TemplateEditor;
