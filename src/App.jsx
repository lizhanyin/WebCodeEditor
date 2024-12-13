import { useState, useRef, useEffect } from 'react'
import { EditorComponent } from "@/components/app/editor";
import { LanguageSelect } from "@/components/app/language-select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { supportedLanguages } from "@/utils/monaco-supported-languages";
import { fetchRuntimes } from "@/utils/fetch-runtimes";

function App() {
  const editorRef = useRef();
  const [ value, setValue ] = useState("//comments");
  const [ language, setLanguage ] = useState("javascript");
  const [ languageList, setLanguageList ] = useState([]);
  useEffect(() => {
    fetchRuntimes(supportedLanguages, setLanguageList);
  }, []);
  return (
    <main className="min-h-full p-3 gap-1 flex flex-col">
      <LanguageSelect language={language} setLanguage={setLanguage} languageList={languageList} />
      <Tabs defaultValue="editor" className="w-[90vw]">
        <TabsList>
          <TabsTrigger value="editor">Editor</TabsTrigger>
          <TabsTrigger value="output">Run Code</TabsTrigger>
        </TabsList>
        <TabsContent value="editor">
          <EditorComponent value={value} setValue={setValue} editorRef={editorRef} language={language}/>
        </TabsContent>
        <TabsContent value="output">
        
        </TabsContent>
      </Tabs>
    </main>
  )
}

export default App