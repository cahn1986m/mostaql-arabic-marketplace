interface StepIndicatorProps {
  steps: string[];
  currentStep: number;
}

export function StepIndicator({ steps, currentStep }: StepIndicatorProps) {
  return (
    <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
      {steps.map((step, index) => (
        <div key={step} className="flex items-center gap-3">
          <span className={`hidden h-10 w-10 items-center justify-center rounded-full border text-sm font-semibold ${index + 1 === currentStep ? 'border-primary bg-primary text-white' : 'border-border bg-white text-text'}`}> {index + 1} </span>
          <div>
            <p className="text-sm font-semibold text-text">{step}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
