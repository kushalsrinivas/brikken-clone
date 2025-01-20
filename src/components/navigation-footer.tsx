import { Button } from "@/components/ui/button"

interface NavigationFooterProps {
  currentStep: number
  totalSteps: number
  previousStep: () => void
  nextStep: () => void
}

export function NavigationFooter({
  currentStep,
  totalSteps,
  previousStep,
  nextStep,
}: NavigationFooterProps) {
  return (
    <div className="mt-6 flex justify-between">
      {currentStep > 1 && (
        <Button variant="outline" onClick={previousStep}>
          Previous
        </Button>
      )}
      {currentStep < totalSteps && (
        <Button variant="outline" onClick={nextStep} className="ml-auto">
          Next
        </Button>
      )}
    </div>
  )
}

