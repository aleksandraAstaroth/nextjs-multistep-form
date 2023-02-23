import { useState } from "react"
import FormStep1 from "./FormStep1"
import FormStep2 from "./FormStep2"
import FormStep3 from "./FormStep3"
import FormStep4 from "./FormStep4"
import {
  firstNameValidator,
  ageValidator,
  lastNameValidator,
  phoneValidator,
  emailValidator,
  seatValidator,
  foodValidator,
  allergiesValidator,
} from "../utils/form-validators"

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
  const [currentStep, setCurrentStep] = useState(0)

  const onInputFieldUpdate = (fields) => {
    setFormData((prev) => {
      return { ...prev, ...fields }
    })
  }

  const steps = [
    <FormStep1 {...formData} onInputFieldUpdate={onInputFieldUpdate} errors={errors} />,
    <FormStep2 {...formData} onInputFieldUpdate={onInputFieldUpdate} errors={errors} />,
    <FormStep3 {...formData} onInputFieldUpdate={onInputFieldUpdate} errors={errors} />,
    <FormStep4 {...formData} />,
  ]
  const isFirstStep = currentStep === 0
  let isLastStep = currentStep === steps.length - 1

  const next = () => {
    setCurrentStep((i) => {
      return steps.length - 1 <= i ? i : i + 1
    })
  }
  const back = () => {
    setCurrentStep((i) => {
      return i <= 0 ? i : i - 1
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const validators = getValidators(currentStep)
    let validationErrors = {}

    Object.entries(validators).forEach(([fieldName, validator]) => {
      const fieldErrors = validator(formData[fieldName])
      if (fieldErrors) {
        validationErrors = { ...validationErrors, ...fieldErrors }
      }
    })

    setErrors(validationErrors)
    Object.keys(validationErrors).length === 0 && next()
  }

  return (
    <section className="flex flex-col relative  border border-black rounded-xl items-center px-5 py-3 my-10 width-form">
      <span className="flex self-end">
        {" "}
        Step {currentStep + 1} / {steps.length}
      </span>
      <form className="flex flex-col pt-10 pb-6" onSubmit={(e) => handleSubmit(e)}>
        {steps[currentStep]}
      </form>
      <div className="button-wrapper">
        {!isFirstStep && (
          <button id="back" type="button" className="button-style" onClick={() => back()}>
            Back
          </button>
        )}
        {!isLastStep && (
          <button className="button-style" id="submit" type="submit" onClick={handleSubmit}>
            Next
          </button>
        )}
      </div>
    </section>
  )
}

const getValidators = (currentStep) => {
  switch (currentStep) {
    case 0:
      return {
        firstName: firstNameValidator,
        lastName: lastNameValidator,
        age: ageValidator,
      }
    case 1:
      return {
        phone: phoneValidator,
        email: emailValidator,
      }
    case 2:
      return {
        seat: seatValidator,
        allergies: allergiesValidator,
        food: foodValidator,
      }
    default:
      return {}
  }
}

export default FormComponent
