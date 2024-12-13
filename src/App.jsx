import { useState, useRef } from 'react'
import { EditorComponent } from "@/components/app/editor";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

function App() {
  const editorRef = useRef();
  const [ value, setValue ] = useState("//comments");
  const [ language, setLanguage ] = useState("javascript");
  return (
    <main className="min-h-full p-3 gap-1 flex justify-start items-start">
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