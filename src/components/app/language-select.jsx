import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export function LanguageSelect({ language, setLanguage, languageList }) {
  
  return (
    <Select defaultValue={language} onValueChange={(value) => setLanguage(value)}>
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