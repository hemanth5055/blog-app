import { useEffect, useRef, useState } from "react";
import { LexicalEditor, SerializedEditorState } from "lexical";

import { Editor } from "@/components/blocks/editor-00/editor";
import { $generateHtmlFromNodes } from "@lexical/html";
const initialValue = {
  root: {
    children: [
      {
        children: [
          {
            detail: 0,
            format: 0,
            mode: "normal",
            style: "font-family: Montserrat;",
            text: "✌️ Start Here...",
            type: "text",
            version: 1,
          },
        ],
        direction: "ltr",
        format: "",
        indent: 0,
        type: "paragraph",
        version: 1,
      },
    ],
    direction: "ltr",
    format: "",
    indent: 0,
    type: "root",
    version: 1,
  },
} as unknown as SerializedEditorState;

export default function EditorDemo({ setContent }: { setContent: any }) {
  const [editorState, setEditorState] =
    useState<SerializedEditorState>(initialValue);
  const editorRef = useRef<LexicalEditor | null>(null);

  useEffect(() => {
    if (!editorRef.current) return;
    editorRef.current.getEditorState().read(() => {
      const html = $generateHtmlFromNodes(editorRef.current!, null);
      setContent(html);
    });
  }, [editorState]);

  return (
    <div>
      <Editor
        ref={editorRef}
        editorSerializedState={editorState}
        onSerializedChange={(value) => {
          setContent(value);
          setEditorState(value);
        }}
      />
    </div>
  );
}
