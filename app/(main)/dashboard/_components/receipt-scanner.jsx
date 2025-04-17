import { Card } from "@/components/ui/Card";
import { CardHeader } from "@/components/ui/Card";
import { CardTitle } from "@/components/ui/Card";
import { CardDescription } from "@/components/ui/Card";
import { CardContent } from "@/components/ui/Card";
import { Upload } from "lucide-react";

<Card className="receipt-scanner shine-effect">
  <CardHeader>
    <CardTitle className="text-lg font-semibold text-white gradient-text">
      Scan Receipt with AI
    </CardTitle>
    <CardDescription className="text-gray-400">
      Upload a receipt to automatically extract transaction details
    </CardDescription>
  </CardHeader>z
  <CardContent>
    <div className="flex items-center justify-center w-full">
      <label
        htmlFor="dropzone-file"
        className="flex flex-col items-center justify-center w-full h-64 border-2 border-dashed border-gray-600 rounded-lg cursor-pointer bg-gray-800/30 hover:bg-gray-800/50 transition-all duration-300 hover:border-blue-500/50 gradient-border-shine"
      >
        <div className="flex flex-col items-center justify-center pt-5 pb-6">
          <Upload className="h-10 w-10 text-blue-400 mb-3 animate-float" />
          <p className="mb-2 text-sm text-gray-300">
            <span className="font-semibold gradient-text">Click to upload</span> or drag and drop
          </p>
          <p className="text-xs text-gray-500">PNG, JPG or PDF (MAX. 10MB)</p>
        </div>
        <input id="dropzone-file" type="file" className="hidden" />
      </label>
    </div>
  </CardContent>
</Card>