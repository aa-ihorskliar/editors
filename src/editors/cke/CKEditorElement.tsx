import React, { Profiler } from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

const config = {};

export default function CKEditorElement({ content }: { content: string }) {
  return (
    <Profiler
      onRender={(id, phase, actualDuration) => {
        console.log(
          `The ${id} render took ` + `${actualDuration}ms to render (${phase})`,
        );
      }}
      id="CKEditor"
    >
      <CKEditor
        config={config}
        editor={ClassicEditor}
        data={content}
        onReady={(editor) => {
          // You can store the "editor" and use when it is needed.
          console.log("Editor is ready to use!", editor);

          editor.model.document.on("change:data", () => {
            console.log("Change", editor.getData());
          });
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
    </Profiler>
  );
}
