import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useEffect } from "react";

export function LanguageSelect({ language, setLanguage, languageList, setValue, codeSnippets }) {
  useEffect(() => {
    if(language){
      setValue(codeSnippets[language] || "");
    }
  }, [language]);
  return (
    <Select defaultValue={language} onValueChange={(value) => {
      setLanguage(value)
      localStorage.setItem("language", value);
    }}>
      <SelectTrigger>
        <SelectValue placeholder={language.toUpperCase() || "JAVASCRIPT"}/>
      </SelectTrigger>
      <SelectContent>
    {languageList.map((x, i) => 
        <SelectItem key={i} value={x.language} >{x.language.toUpperCase()} {x.version}</SelectItem>)}
      </SelectContent>
    </Select>
  )
}