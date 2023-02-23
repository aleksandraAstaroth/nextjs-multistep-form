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
 const [errors, setErrors] = useState({})

  const updateInputFields = (fields) => {
    setFormData(prev => {
      return { ...prev, ...fields }
    })
  }
  

const [currentStep, setCurrentStep] = useState(0)
  const isFirstStep = currentStep === 0

  const steps = [
    <FormStep1 {...formData} updateInputFields={updateInputFields} errors={errors}  />,
    <FormStep2 {...formData} updateInputFields={updateInputFields} errors={errors} />,
    <FormStep3 {...formData} updateInputFields={updateInputFields} errors={errors} />,
    <FormStep4 {...formData} />]
  
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

// setValidators(validators)
  const handleSubmit = (e) => {
    e.preventDefault();
    // let errors = {};
  
  next()
  
    // setErrors(errors);
    // Object.keys(errors).length === 0 && next();
  };

  let isLastStep = currentStep === steps.length - 1;
  console.log("props", steps[currentStep])
  return (
    <section className="flex flex-col relative  border border-black rounded-xl items-center px-5 py-3 my-10 width-form">
      <span className="flex self-end"> Step {currentStep + 1} / {steps.length}</span>
      <form className="flex flex-col py-10" onSubmit={(e) => handleSubmit(e)}>
        {steps[currentStep]}
      </form>
      <div className="button-wrapper">
        {!isFirstStep && <button id="back" type="button" className="button-style" onClick={() => back()}>Back</button>}
        {!isLastStep && <button className="button-style" id="submit" type="submit" onClick={handleSubmit}>Next</button>}
      </div>
    </section>
  )
}

export default FormComponent;