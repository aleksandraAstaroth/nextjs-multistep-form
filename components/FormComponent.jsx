import { useState } from "react";
import FormStep1 from "./FormStep1";
import FormStep2 from "./FormStep2";
import FormStep3 from "./FormStep3";
import FormStep4 from "./FormStep4";

const INITIAL_DATA = {
  firstName: "",
  lastName: "",
  age: "",
  phone: "",
  email: "",
  seat: "",
  food: "",
  allergies: "",
}

const FormComponent = () => {
  const [formData, setFormData] = useState(INITIAL_DATA)
  const updateInputFields = (fields) => {
    setFormData(prev => {
      return { ...prev, ...fields }
    })
  }

  const [currentStep, setCurrentStep] = useState(0)
  const isFirstStep = currentStep === 0

  const next = () => {
    setCurrentStep(i => {
      return steps.length - 1 <= i ? i : i + 1
    })
  }
  const back = () => {
    setCurrentStep(i => {
      return i <= 0 ? i : i - 1
    })
  }
  let isLastStep;
  const steps = [
    <FormStep1 {...formData} updateInputFields={updateInputFields} isFirstStep={isFirstStep} next={next} back={back} isLastStep={isLastStep} />,
    <FormStep2 {...formData} updateInputFields={updateInputFields} isFirstStep={isFirstStep} next={next} back={back} isLastStep={isLastStep} />,
    <FormStep3 {...formData} updateInputFields={updateInputFields} isFirstStep={isFirstStep} next={next} back={back} isLastStep={isLastStep} />,
    <FormStep4 {...formData} isFirstStep={isFirstStep} next={next} back={back} isLastStep={isLastStep} />]

  return (
    <section className="flex flex-col relative  border border-black rounded-xl items-center px-5 py-3 my-10 width-form">
      <span className="flex self-end"> Step {currentStep + 1} / {steps.length}</span>
      <div className="flex flex-col py-10">
        {steps[currentStep]}
      </div>
    </section>
  )
}

export default FormComponent;