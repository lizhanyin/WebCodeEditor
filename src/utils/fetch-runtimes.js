import axios from "axios";

export const fetchRuntimes = async (supportedLanguages, setData) => {
  const res = await axios.get("https://emkc.org/api/v2/piston/runtimes");
  const data = res.data;
  let result = data.map(x => {
    if (supportedLanguages.includes(x.language.toLowerCase())) {
      if(x.version === "1.32.3") return null;
      return {
        language: x.language,
        version: x.version
      }
    } else return null;
  }).filter(x => x != null);
  setData(result);
}