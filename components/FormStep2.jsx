import { useState } from "react"
import { phoneValidator, emailValidator } from "../utils/form-validators"
import InputField from "./InputField";
const FormStep2 = ({ phone, email, updateInputFields, isFirstStep, isLastStep, back, next }) => {
    let [errors, setErrors] = useState({})

    const onSubmit = (e) => {
        e.preventDefault()
        let validators = { ...phoneValidator(phone), ...emailValidator(email) }
        setErrors(validators)
        Object.keys(validators).length === 0 && next()
    }


    return (
        <form className="form-style">
            <InputField label={"Phone"}
                id={"phone"}
                errors={errors?.phoneError}
                type={"text"}
                updateInputFields={updateInputFields}
                value={phone} />
            <InputField label={"Email"}
                id={"email"}
                errors={errors?.emailError}
                type={"email"}
                updateInputFields={updateInputFields}
                value={email} />

            <div className="button-wrapper">
                {!isFirstStep && <button id="back" type="button" className="button-style" onClick={() => back()}>Back</button>}
                {<button className="button-style" id="submit" type="submit" onClick={onSubmit}>{isLastStep ? "Submit" : "Next"}</button>}
            </div>
        </form>
    )
}
export default FormStep2