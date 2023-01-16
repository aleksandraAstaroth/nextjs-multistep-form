
import { useState } from "react";
import { firstNameValidator, ageValidator, lastNameValidator } from "../utils/form-validators"
import InputField from "./InputField";

const FormStep1 = ({ firstName, lastName, age, updateInputFields, isFirstStep, back, next, isLastStep }) => {
    let [errors, setErrors] = useState({})

    const onSubmit = (e) => {
        e.preventDefault()
        let validators = {
            ...firstNameValidator(firstName),
            ...ageValidator(age),
            ...lastNameValidator(lastName)
        }

        setErrors(validators)
        Object.keys(validators).length === 0 && next()
    }

    return (
        <form className="form-style">
            <InputField label={"First Name"}
                id={"firstName"}
                errors={errors?.firstNameError}
                type={"text"}
                updateInputFields={updateInputFields}
                value={firstName} />

            <InputField label={"Last Name"}
                id={"lastName"}
                errors={errors?.lastNameError}
                type={"text"}
                updateInputFields={updateInputFields}
                value={lastName} />

            <InputField label={"Age"}
                id={"age"}
                errors={errors?.ageError}
                type={"text"}
                updateInputFields={updateInputFields}
                value={age} />

            <div className="button-wrapper">
                {!isFirstStep && <button id="back" type="button" className="button-style" onClick={() => back()}>Back</button>}
                {<button className="button-style" id="submit" type="submit" onClick={onSubmit}>{isLastStep ? "Submit" : "Next"}</button>}
            </div>
        </form >
    )
}
export default FormStep1