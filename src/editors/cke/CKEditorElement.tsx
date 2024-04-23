import React, { Component } from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from '@ckeditor/ckeditor5-editor-classic/src/classiceditor';
import Essentials from '@ckeditor/ckeditor5-essentials/src/essentials';
import Paragraph from '@ckeditor/ckeditor5-paragraph/src/paragraph';
import Bold from '@ckeditor/ckeditor5-basic-styles/src/bold';
import Italic from '@ckeditor/ckeditor5-basic-styles/src/italic';

const config = {
  plugins: [Paragraph, Bold, Italic, Essentials],
  toolbar: ["bold", "italic"],
};

export default function CKEditorElement({ content }: { content: string }) {
  return (
    <CKEditor
      editor={ClassicEditor}
      data={content}
      config={config}
      onReady={(editor) => {
        // You can store the "editor" and use when it is needed.
        console.log("Editor is ready to use!", editor);
      }}
      onChange={(event) => {
        console.log(event);
      }}
      onBlur={(event, editor) => {
        console.log("Blur.", editor);
      }}
      onFocus={(event, editor) => {
        console.log("Focus.", editor);
      }}
    />
  );
}
