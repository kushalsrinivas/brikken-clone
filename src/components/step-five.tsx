import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import type{ FormData } from "./mutli-step-form";

interface StepFiveProps {
  formData: FormData;
  handleSubmit: () => void;
}

export function StepFive({ formData, handleSubmit }: StepFiveProps) {
  return (
    <div>
      <h2 className="mb-4 text-2xl font-bold text-foreground">Confirmation</h2>
      <Card>
        <CardContent className="p-6">
          <p className="mb-4">Review and confirm your details.</p>
          <dl className="space-y-2">
            <div className="flex justify-between">
              <dt className="font-semibold">Asset Type:</dt>
              <dd>{formData.assetType}</dd>
            </div>
            <div className="flex justify-between">
              <dt className="font-semibold">Asset Name:</dt>
              <dd>{formData.assetName}</dd>
            </div>
            <div className="flex justify-between">
              <dt className="font-semibold">Asset Symbol:</dt>
              <dd>{formData.assetSymbol}</dd>
            </div>
          </dl>
          <Button type="button" className="mt-4 w-full" onClick={handleSubmit}>
            Submit
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
