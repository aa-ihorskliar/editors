import { Editor, EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Highlight from "@tiptap/extension-highlight";
import TextAlign from "@tiptap/extension-text-align";
import Link from "@tiptap/extension-link";
import Image from "@tiptap/extension-image";

// define your extension array
const extensions = [StarterKit];

const MenuBar = ({ editor = null }: { editor: Editor | null }) => {
  if (!editor) {
    return null;
  }

  const cl =
    "flex h-10 px-2 items-center justify-center border-gray-200 outline-none hover:text-indigo-500 focus:outline-none border-r";

  return (
    <div className="flex w-full border-b border-gray-200 text-xl text-gray-600">
      <button
        className={`${cl} ${editor.isActive("link") ? "is-active" : ""}`}
        onClick={() => {
          const previousUrl = editor.getAttributes("link").href;
          const url = window.prompt("URL", previousUrl);

          // cancelled
          if (url === null) {
            return;
          }

          // empty
          if (url === "") {
            editor.chain().focus().extendMarkRange("link").unsetLink().run();

            return;
          }

          // update link
          editor
            .chain()
            .focus()
            .extendMarkRange("link")
            .setLink({ href: url })
            .run();
        }}
      >
        Link
      </button>
      <button
        className={cl}
        onClick={() => {
          const url = window.prompt("URL");

          if (url) {
            editor.chain().focus().setImage({ src: url }).run();
          }
        }}
      >
        Image
      </button>
      <button
        onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
        className={`${cl} ${editor.isActive("heading", { level: 1 }) ? "text-indigo-600" : ""}`}
      >
        h1
      </button>
      <button
        onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
        className={`${cl} ${editor.isActive("heading", { level: 2 }) ? "text-indigo-600" : ""}`}
      >
        h2
      </button>
      <button
        onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
        className={`${cl} ${editor.isActive("heading", { level: 3 }) ? "text-indigo-600" : ""}`}
      >
        h3
      </button>
      <button
        onClick={() => editor.chain().focus().setParagraph().run()}
        className={`${cl} ${editor.isActive("paragraph") ? "text-indigo-600" : ""}`}
      >
        paragraph
      </button>
      <button
        onClick={() => editor.chain().focus().toggleBold().run()}
        className={`${cl} ${editor.isActive("bold") ? "text-indigo-600" : ""}`}
      >
        bold
      </button>
      <button
        onClick={() => editor.chain().focus().toggleItalic().run()}
        className={`${cl} ${editor.isActive("italic") ? "text-indigo-600" : ""}`}
      >
        italic
      </button>
      <button
        onClick={() => editor.chain().focus().toggleStrike().run()}
        className={`${cl} ${editor.isActive("strike") ? "text-indigo-600" : ""}`}
      >
        strike
      </button>
      <button
        onClick={() => editor.chain().focus().toggleHighlight().run()}
        className={`${cl} ${editor.isActive("highlight") ? "text-indigo-600" : ""}`}
      >
        highlight
      </button>
      <button
        onClick={() => editor.chain().focus().setTextAlign("left").run()}
        className={`${cl} ${editor.isActive({ textAlign: "left" }) ? "text-indigo-600" : ""}`}
      >
        left
      </button>
      <button
        onClick={() => editor.chain().focus().setTextAlign("center").run()}
        className={`${cl} ${editor.isActive({ textAlign: "center" }) ? "text-indigo-600" : ""}`}
      >
        center
      </button>
      <button
        onClick={() => editor.chain().focus().setTextAlign("right").run()}
        className={`${cl} ${editor.isActive({ textAlign: "right" }) ? "text-indigo-600" : ""}`}
      >
        right
      </button>
      <button
        onClick={() => editor.chain().focus().setTextAlign("justify").run()}
        className={`${cl} ${editor.isActive({ textAlign: "justify" }) ? "text-indigo-600" : ""}`}
      >
        justify
      </button>
    </div>
  );
};

const TipTap = ({ content }: { content: string }) => {
  const editor = useEditor({
    extensions: [
      StarterKit,
      TextAlign.configure({
        types: ["heading", "paragraph"],
      }),
      Highlight,
      Image.configure({
        inline: true,
      }),
      Link.configure({
        openOnClick: false,
        autolink: true,
        HTMLAttributes: {
          class:
            "font-medium text-primary underline decoration-primary underline-offset-4",
        },
      }),
    ],
    content,
  });

  return (
    <div>
      <MenuBar editor={editor} />
      <EditorContent editor={editor} />
    </div>
  );
};

export default TipTap;
