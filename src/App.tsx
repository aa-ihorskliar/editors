import React, { useState } from "react";
import TipTap from "./editors/TipTap/TipTap";
import "./App.css";
import Lexical from "./editors/Lexical/Lexical";
import PlateEditor from "./editors/Plate/PlateEditor";
import CKEditorElement from "./editors/cke/CKEditorElement";

const content = `
      <h3>
        Devs Just Want to Have Fun by Cyndi Lauper
      </h3>
      <p>
        I come home in the morning light<br>
        My mother says, <mark>“When you gonna live your life right?”</mark><br>
        Oh mother dear we’re not the fortunate ones<br>
        And devs, they wanna have fun<br>
        Oh devs just want to have fun</p>
      <p>
        The phone rings in the middle of the night<br>
        My father yells, "What you gonna do with your life?"<br>
        Oh daddy dear, you know you’re still number one<br>
        But <s>girls</s>devs, they wanna have fun<br>
        Oh devs just want to have
      </p>
      <p>
        That’s all they really want<br>
        Some fun<br>
        When the working day is done<br>
        Oh devs, they wanna have fun<br>
        Oh devs just wanna have fun<br>
        (devs, they wanna, wanna have fun, devs wanna have)
      </p>
    `;

function App() {
  const [editor, setEditor] = useState<"tiptap" | "lexical" | "plate" | "cke">(
    "cke",
  );

  return (
    <div className="App">
      <div className="tabs">
        <button
          className={editor === "tiptap" ? "text-indigo-600" : ""}
          onClick={() => setEditor("tiptap")}
        >
          TipTap
        </button>
        <button
          className={editor === "lexical" ? "text-indigo-600" : ""}
          onClick={() => setEditor("lexical")}
        >
          Lexical
        </button>
        <button
          className={editor === "plate" ? "text-indigo-600" : ""}
          onClick={() => setEditor("plate")}
        >
          Plate
        </button>
        <button
          className={editor === "cke" ? "text-indigo-600" : ""}
          onClick={() => setEditor("cke")}
        >
          CKEditor 5
        </button>
      </div>

      <div className="editor-block">
        {editor === "tiptap" && <TipTap content={content} />}

        {editor === "lexical" && <Lexical content={content} />}

        {editor === "plate" && <PlateEditor content={content} />}

        {editor === "cke" && <CKEditorElement content={content} />}
      </div>
    </div>
  );
}

export default App;
