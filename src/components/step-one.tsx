import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import type { FormData } from "./mutli-step-form";
import { useState } from "react";

interface StepOneProps {
  formData: FormData;
  handleInputChange: (name: string, value: string) => void;
}

export function StepOne({ formData, handleInputChange }: StepOneProps) {
  const [activeTab, setActiveTab] = useState("createAccount");

  return (
    <div>
      <div className="mb-4 flex justify-center border-b border-gray-200 text-black">
        <button
          className={`px-4 py-2 ${
            activeTab === "signIn"
              ? "border-b-2 border-primary text-primary"
              : "text-gray-500"
          }`}
          onClick={() => setActiveTab("signIn")}
        >
          Sign In
        </button>
        <button
          className={`px-4 py-2 ${
            activeTab === "createAccount"
              ? "border-b-2 border-primary text-primary"
              : "text-gray-500"
          }`}
          onClick={() => setActiveTab("createAccount")}
        >
          Create Account
        </button>
      </div>

      {activeTab === "signIn" && (
        <div>
          <h2 className="mb-4 text-2xl font-bold text-foreground">Sign In</h2>
          <form className="space-y-4">
            <div>
              <Label htmlFor="email">Email</Label>
              <Input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={(e) => handleInputChange("email", e.target.value)}
                required
              />
            </div>
            <div>
              <Label htmlFor="password">Password</Label>
              <Input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={(e) => handleInputChange("password", e.target.value)}
                required
              />
            </div>
          </form>
        </div>
      )}

      {activeTab === "createAccount" && (
        <div>
          <h2 className="mb-4 text-2xl font-bold text-foreground">
            Create Account
          </h2>
          <form className="space-y-4">
            <div>
              <Label htmlFor="email">Email</Label>
              <Input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={(e) => handleInputChange("email", e.target.value)}
                required
              />
            </div>
            <div>
              <Label htmlFor="password">Password</Label>
              <Input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={(e) => handleInputChange("password", e.target.value)}
                required
              />
            </div>
            <div>
              <Label htmlFor="confirmPassword">Confirm Password</Label>
              <Input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                value={formData.password ?? ""}
                onChange={(e) =>
                  handleInputChange("confirmPassword", e.target.value)
                }
                required
              />
            </div>
          </form>
        </div>
      )}
    </div>
  );
}
