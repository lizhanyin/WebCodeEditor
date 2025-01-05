import { useState, useRef, useEffect } from 'react'
import { EditorComponent } from "@/components/app/editor";
import { LanguageSelect } from "@/components/app/language-select";
import { CodeRunner } from "@/components/app/code-runner";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ModeToggle } from "@/components/mode-toggle";
import { supportedLanguages } from "@/utils/monaco-supported-languages";
import { codeSnippets } from "@/utils/hello-world";
import { fetchRuntimes } from "@/utils/fetch-runtimes";

function App() {
  const editorRef = useRef();
  const [ value, setValue ] = useState("");
  
  const [ language, setLanguage ] = useState(localStorage.getItem("language") || "javascript");
  
  const [ languageList, setLanguageList ] = useState([]);
  
  useEffect(() => {
    fetchRuntimes(supportedLanguages, setLanguageList);
  }, []);
  return (
    <main className="min-h-full p-3 gap-1 flex flex-col">
      <section className="w-full my-2 flex justify-between items-center gap-1">
        <LanguageSelect language={language} setLanguage={setLanguage} languageList={languageList} setValue={setValue} codeSnippets={codeSnippets} />
        <ModeToggle />
      </section>
      <Tabs defaultValue="editor" className="w-[90vw]">
        <TabsList>
          <TabsTrigger value="editor">Editor</TabsTrigger>
          <TabsTrigger value="output">Run Code</TabsTrigger>
        </TabsList>
        <TabsContent value="editor">
          <EditorComponent value={value} setValue={setValue} editorRef={editorRef} language={language}/>
        </TabsContent>
        <TabsContent value="output">
        <CodeRunner data={value} language={language} version={languageList.find(x => x.language === language)?.version || ""} />
        </TabsContent>
      </Tabs>
    </main>
  )
}

export default App