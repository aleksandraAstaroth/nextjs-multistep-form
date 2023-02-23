import { useState } from "react"
import { seatValidator, foodValidator, allergiesValidator } from "../utils/form-validators"
import InputField from "./InputField";
const FormStep3 = ({ seat, food, allergies, updateInputFields, isFirstStep, isLastStep, back, next }) => {
    let [errors, setErrors] = useState({})

    const onSubmit = (e) => {
        e.preventDefault()
        let validators = { ...foodValidator(food), ...seatValidator(seat), ...allergiesValidator(allergies) }
        setErrors(validators)
        Object.keys(validators).length === 0 && next()
    }

    return (
        <form className="form-style">
            <InputField label={"Seat"}
                id={"seat"}
                errors={errors?.seatError}
                type={"text"}
                updateInputFields={updateInputFields}
                value={seat} />
            <InputField label={"Food"}
                id={"food"}
                errors={errors?.foodError}
                type={"text"}
                updateInputFields={updateInputFields}
                value={food} />
            <InputField label={"Allergies"}
                id={"allergies"}
                errors={errors?.allergiesError}
                type={"text"}
                updateInputFields={updateInputFields}
                value={allergies} />
        </form >
    )
}
export default FormStep3