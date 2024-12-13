import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export function LanguageSelect({ language, setLanguage, languageList }) {
  
  return (
    <Select onValueChange={(value) => setLanguage(value)}>
      <SelectTrigger>
        <SelectValue placeholder={language.toUpperCase() || "JAVASCRIPT"}/>
      </SelectTrigger>
      <SelectContent>
        {languageList.map(x => 
        <SelectItem value={x.language} >{x.language.toUpperCase()} {x.version}</SelectItem>)}
      </SelectContent>
    </Select>
  )
}