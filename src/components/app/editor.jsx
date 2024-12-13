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
        height="80vh"
        theme={theme === "dark" ? "vs-dark" : "vs-light"}
        onMount={onMount}
        value={value}
        onChange={(value) => setValue(value)}
        language={language}
      />
    </>
  )
}