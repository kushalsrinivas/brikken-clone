import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import type { FormData } from "./mutli-step-form";

interface StepFourProps {
  formData: FormData;
  handleInputChange: (name: string, value: File | null) => void;
}

export function StepFour({ formData, handleInputChange }: StepFourProps) {
  console.log(formData);
  return (
    <div>
      <h2 className="mb-4 text-2xl font-bold text-foreground">
        Submit Documents
      </h2>
      <form className="space-y-4">
        <div>
          <Label htmlFor="legal-docs">Legal Documents</Label>
          <Input
            id="legal-docs"
            name="legalDocs"
            type="file"
            onChange={(e) =>
              handleInputChange("legalDocs", e.target.files?.[0] ?? null)
            }
            required
          />
        </div>
        <div>
          <Label htmlFor="insurance-docs">Insurance Documents</Label>
          <Input
            id="insurance-docs"
            name="insuranceDocs"
            type="file"
            onChange={(e) =>
              handleInputChange("insuranceDocs", e.target.files?.[0] ?? null)
            }
            required
          />
        </div>
      </form>
    </div>
  );
}
