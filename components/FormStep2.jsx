import InputField from "./InputField"

const FormStep2 = ({ phone, email, updateInputFields, errors }) => {
  return (
    <div className="form-style">
      <InputField
        label={"Phone"}
        id={"phone"}
        errors={errors?.phoneError}
        type={"text"}
        updateInputFields={updateInputFields}
        value={phone}
      />
      <InputField
        label={"Email"}
        id={"email"}
        errors={errors?.emailError}
        type={"email"}
        updateInputFields={updateInputFields}
        value={email}
      />
    </div>
  )
}
export default FormStep2
