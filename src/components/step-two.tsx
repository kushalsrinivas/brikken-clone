import { Button } from "@/components/ui/button"
import type { FormData } from "./mutli-step-form"


interface StepTwoProps {
  formData: FormData
  handleInputChange: (name: string, value: string) => void
  nextStep: () => void
}

export function StepTwo({ formData, handleInputChange, nextStep }: StepTwoProps) {
  const handleAssetTypeSelect = (type: string) => {
    handleInputChange("assetType", type)
    nextStep()
  }
  console.log(formData);


  return (
    <div>
      <h2 className="mb-4 text-2xl font-bold text-foreground">Select Digital Asset Type</h2>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {["Equity", "Debt", "Invoice", "Revenue"].map((type) => (
          <Button
            key={type}
            variant="outline"
            className="flex h-auto flex-col items-center p-4"
            onClick={() => handleAssetTypeSelect(type)}
          >
            <span className="text-2xl font-bold">{type}</span>
          </Button>
        ))}
      </div>
    </div>
  )
}

