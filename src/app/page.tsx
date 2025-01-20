import { HydrateClient } from "@/trpc/server";
import MultiStepForm from "@/components/mutli-step-form";

export default async function Home() {
  return (
    <HydrateClient>
      <MultiStepForm></MultiStepForm>
    </HydrateClient>
  );
}
