"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { StepOne } from "./step-one";
import { StepTwo } from "./step-two";
import { StepThree } from "./step-three";
import { StepFour } from "./step-four";
import { StepFive } from "./step-five";
import { NavigationFooter } from "./navigation-footer";
import { WalletConnect } from "./wallet-connect";

export interface FormData {
  email: string;
  password: string;
  assetType: string;
  assetName: string;
  assetSymbol: string;
  assetPicture: File | null;
  legalDocs: File | null;
  insuranceDocs: File | null;
}

export default function MultiStepForm(): JSX.Element {
  const [currentStep, setCurrentStep] = useState<number>(1);
  const [formData, setFormData] = useState<FormData>({
    email: "",
    password: "",
    assetType: "",
    assetName: "",
    assetSymbol: "",
    assetPicture: null,
    legalDocs: null,
    insuranceDocs: null,
  });
  const totalSteps = 5;

  const handleInputChange = (name: string, value: string | File | null) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const nextStep = () => {
    if (currentStep < totalSteps) {
      setCurrentStep((prev) => prev + 1);
    }
  };

  const previousStep = () => {
    if (currentStep > 1) {
      setCurrentStep((prev) => prev - 1);
    }
  };

  const handleSubmit = () => {
    console.log("Form submitted with data:", formData);
    alert("Form submitted successfully!");
  };

  return (
    <div className="min-h-screen bg-background">
      <nav className="bg-card shadow-lg">
        <div className="mx-auto max-w-7xl px-4">
          <div className="flex h-16 justify-between">
            <div className="flex items-center">
              <span className="text-2xl font-bold text-primary">Birkken</span>
            </div>
            <WalletConnect />
          </div>
        </div>
      </nav>

      <div className="mx-auto max-w-4xl p-6">
        <Card>
          <CardContent className="p-6">
            <Progress
              value={(currentStep / totalSteps) * 100}
              className="mb-6"
            />

            {currentStep === 1 && (
              <StepOne
                formData={formData}
                handleInputChange={handleInputChange}
              />
            )}
            {currentStep === 2 && (
              <StepTwo
                formData={formData}
                handleInputChange={handleInputChange}
                nextStep={nextStep}
              />
            )}
            {currentStep === 3 && (
              <StepThree
                formData={formData}
                handleInputChange={handleInputChange}
              />
            )}
            {currentStep === 4 && (
              <StepFour
                formData={formData}
                handleInputChange={handleInputChange}
              />
            )}
            {currentStep === 5 && (
              <StepFive formData={formData} handleSubmit={handleSubmit} />
            )}

            <NavigationFooter
              currentStep={currentStep}
              totalSteps={totalSteps}
              previousStep={previousStep}
              nextStep={nextStep}
            />
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
