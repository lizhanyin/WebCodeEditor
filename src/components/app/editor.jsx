import PropTypes from 'prop-types';
import { Editor, loader } from "@monaco-editor/react";
import { useTheme } from "@/components/theme-provider";

import * as monaco from 'monaco-editor';
import editorWorker from 'monaco-editor/esm/vs/editor/editor.worker?worker';
import jsonWorker from 'monaco-editor/esm/vs/language/json/json.worker?worker';
import cssWorker from 'monaco-editor/esm/vs/language/css/css.worker?worker';
import htmlWorker from 'monaco-editor/esm/vs/language/html/html.worker?worker';
import tsWorker from 'monaco-editor/esm/vs/language/typescript/ts.worker?worker';

self.MonacoEnvironment = {
  getWorker(_, label) {
    if (label === 'json') {
      return new jsonWorker();
    }
    if (label === 'css' || label === 'scss' || label === 'less') {
      return new cssWorker();
    }
    if (label === 'html' || label === 'handlebars' || label === 'razor') {
      return new htmlWorker();
    }
    if (label === 'typescript' || label === 'javascript') {
      return new tsWorker();
    }
    return new editorWorker();
  },
};

export function EditorComponent({ value, setValue, language, editorRef }){
  
  const { theme } = useTheme();
  const onMount = (editor) => {
    editorRef.current = editor;
    editor.focus();
  }

  loader.config({ monaco });
  loader.config({ 'vs/nls': { availableLanguages: { "*": "zh-cn" } } });
  //loader.init().then(/* ... */);
  return(
    <>
      <Editor
        className="rounded-md my-2 break-words whitespace-pre-wrap"
        height="75vh"
        theme={(theme === "dark" || theme === "system") ? "vs-dark" : "light"}
        onMount={onMount}
        value={value}
        onChange={(value) => {
          setValue(value)
          localStorage.setItem(language, value);
        }}
        language={language}
      />
    </>
  )
}

EditorComponent.propTypes = {
  value: PropTypes.string.isRequired,
  setValue: PropTypes.func.isRequired,
  language: PropTypes.string.isRequired,
  editorRef: PropTypes.object.isRequired,
}; 