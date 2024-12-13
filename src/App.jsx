import { useState, useRef } from 'react'
import { EditorComponent } from "@/components/app/editor";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

function App() {
  const editorRef = useRef();
  const [ value, setValue ] = useState("//comments");
  const [ language, setLanguage ] = useState("javascript");
  return (
    <main>
      <Tabs defaultValue="editor" className="w-[90vw] mx-auto">
        <TabsList>
          <TabsTrigger value="editor">Editor</TabsTrigger>
          <TabsTrigger value="output">Run Code</TabsTrigger>
        </TabsList>
        <TabsContent value="editor">
          <EditorComponent value={value} setValue={setValue} editorRef={editorRef} language={language}/>
        </TabsContent>
        <TabsContent value="output">Change your password here.</TabsContent>
      </Tabs>
    </main>
  )
}

export default App