import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import type{ FormData } from "./mutli-step-form";

interface StepThreeProps {
  formData: FormData;
  handleInputChange: (name: string, value: string | File | null) => void;
}

export function StepThree({ formData, handleInputChange }: StepThreeProps) {
  return (
    <div>
      <h2 className="mb-4 text-2xl font-bold text-foreground">
        Enter Asset Information
      </h2>
      <form className="space-y-4">
        <div>
          <Label htmlFor="asset-name">Asset Name</Label>
          <Input
            id="asset-name"
            name="assetName"
            value={formData.assetName}
            onChange={(e) => handleInputChange("assetName", e.target.value)}
            required
          />
        </div>
        <div>
          <Label htmlFor="asset-symbol">Asset Symbol</Label>
          <Input
            id="asset-symbol"
            name="assetSymbol"
            value={formData.assetSymbol}
            onChange={(e) => handleInputChange("assetSymbol", e.target.value)}
            required
          />
        </div>
        <div>
          <Label htmlFor="asset-picture">Asset Picture</Label>
          <Input
            id="asset-picture"
            name="assetPicture"
            type="file"
            accept="image/*"
            onChange={(e) =>
              handleInputChange("assetPicture", e.target.files?.[0] ?? null)
            }
            required
          />
        </div>
      </form>
    </div>
  );
}
