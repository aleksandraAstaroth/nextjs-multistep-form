
import { firstNameValidator, ageValidator, lastNameValidator } from "../utils/form-validators"
import InputField from "./InputField";

const FormStep1 = ({ firstName, lastName, age, updateInputFields, errors }) => {
     let validators = {
        ...firstNameValidator(firstName),
        ...ageValidator(age),
        ...lastNameValidator(lastName)
    }


    return (
        <div className="form-style">
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
        </div>
    )
}
export default FormStep1