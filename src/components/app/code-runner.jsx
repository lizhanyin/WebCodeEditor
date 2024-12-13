import { runCode } from "@/utils/run-code";
import { useEffect, useState } from "react";
import { useToast } from "@/hooks/use-toast";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export function CodeRunner({ language, version, data }){
  const [ error, setError ] = useState(false);
  const [ result, setResult ] = useState("");
  const { toast } = useToast();
  
  useEffect(() => {
    if(language&&version&&data){
      runCode(language, version, data, setResult);
    }
  }, []);
  
  useEffect(() => {
    if(result.error){
      toast({
        variant: "destructive",
        description: result.content
      });
    } else if (result.stderr){
      setError(true);
    }
  }, [result]);
  
  return(
    <Card className="min-h-[90vh]">
      <CardHeader>
        <CardTitle>{language.toUpperCase()}</CardTitle>
        <CardDescription>Code Output</CardDescription>
      </CardHeader>
      <CardContent>
        {error ? <div className="text-md text-red-700 font-bold font-mono">{result.output}</div> : <div className="text-md font-bold font-mono">{result.output}</div>}
      </CardContent>
      <CardFooter>
        <p>Version: {version}</p>
      </CardFooter>
    </Card>
  )
}