import InputField from "./InputField"

const FormStep1 = ({ firstName, lastName, age, onInputFieldUpdate, errors }) => {
  return (
    <div className="form-style">
      <InputField
        label={"First Name"}
        id={"firstName"}
        errors={errors?.firstNameError}
        type={"text"}
        onInputFieldUpdate={onInputFieldUpdate}
        value={firstName}
      />

      <InputField
        label={"Last Name"}
        id={"lastName"}
        errors={errors?.lastNameError}
        type={"text"}
        onInputFieldUpdate={onInputFieldUpdate}
        value={lastName}
      />

      <InputField
        label={"Age"}
        id={"age"}
        errors={errors?.ageError}
        type={"text"}
        onInputFieldUpdate={onInputFieldUpdate}
        value={age}
      />
    </div>
  )
}
export default FormStep1
