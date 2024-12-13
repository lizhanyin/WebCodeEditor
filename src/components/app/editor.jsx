import { Editor } from "@monaco-editor/react";
import { useTheme } from "@/components/theme-provider";

export function EditorComponent({ value, setValue, language, editorRef }){
  const { theme } = useTheme();
  const onMount = (editor) => {
    editorRef.current = editor;
    editor.focus();
  }
  return(
    <>
      <Editor
        className="rounded-md my-2 break-words whitespace-pre-wrap"
        height="90vh"
        theme={(theme === "dark" || theme === "system") ? "vs-dark" : "light"}
        onMount={onMount}
        value={value}
        onChange={(value) => setValue(value)}
        language={language}
      />
    </>
  )
}