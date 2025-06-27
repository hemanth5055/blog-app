"use client";

import {
  InitialConfigType,
  LexicalComposer,
  // LexicalComposerContext,
  // useLexicalComposerContext,
} from "@lexical/react/LexicalComposer";
import { OnChangePlugin } from "@lexical/react/LexicalOnChangePlugin";
import { EditorState, SerializedEditorState, LexicalEditor } from "lexical";

import { editorTheme } from "@/components/editor/themes/editor-theme";
import { TooltipProvider } from "@/components/ui/tooltip";

import { nodes } from "./nodes";
import { Plugins } from "./plugins";
import { forwardRef, useImperativeHandle } from "react";
import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";

const editorConfig: InitialConfigType = {
  namespace: "Editor",
  theme: editorTheme,
  nodes,
  onError: (error: Error) => {
    console.error(error);
  },
};

function InnerEditor({
  onChange,
  onSerializedChange,
}: {
  onChange?: (editorState: EditorState) => void;
  onSerializedChange?: (editorSerializedState: SerializedEditorState) => void;
}, ref: React.Ref<LexicalEditor>) {
  const [editor] = useLexicalComposerContext();

  // Expose the editor instance to parent
  useImperativeHandle(ref, () => editor, [editor]);

  return (
    <TooltipProvider>
      <Plugins />
      <OnChangePlugin
        ignoreSelectionChange={true}
        onChange={(editorState) => {
          onChange?.(editorState);
          onSerializedChange?.(editorState.toJSON());
        }}
      />
    </TooltipProvider>
  );
}

const ForwardedInnerEditor = forwardRef(InnerEditor);

export const Editor = forwardRef(function Editor(
  {
    editorState,
    editorSerializedState,
    onChange,
    onSerializedChange,
  }: {
    editorState?: EditorState;
    editorSerializedState?: SerializedEditorState;
    onChange?: (editorState: EditorState) => void;
    onSerializedChange?: (editorSerializedState: SerializedEditorState) => void;
  },
  ref: React.Ref<LexicalEditor>
) {
  return (
    <div className="bg-background overflow-hidden rounded-lg border shadow">
      <LexicalComposer
        initialConfig={{
          ...editorConfig,
          ...(editorState ? { editorState } : {}),
          ...(editorSerializedState
            ? { editorState: JSON.stringify(editorSerializedState) }
            : {}),
        }}
      >
        <ForwardedInnerEditor
          ref={ref}
          onChange={onChange}
          onSerializedChange={onSerializedChange}
        />
      </LexicalComposer>
    </div>
  );
});
