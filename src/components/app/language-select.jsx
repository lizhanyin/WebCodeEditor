import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export function LanguageSelect({ language, setLanguage, languageList }) {
  return (
    <Select defaultValue={language} onValueChange={(value) => setLanguage(value)}>
      <SelectTrigger asChild>
        <SelectValue placeholder={language} />
      </SelectTrigger>
      <SelectContent>
        {languageList.map( x => 
        <SelectItem value={x.language} >{x.language} {x.version}</SelectItem>)}
      </SelectContent>
    </Select>
  )
}