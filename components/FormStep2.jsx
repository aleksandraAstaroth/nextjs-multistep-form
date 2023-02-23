import InputField from "./InputField"

const FormStep2 = ({ phone, email, onInputFieldUpdate, errors }) => {
  return (
    <div className="form-style">
      <InputField
        label={"Phone"}
        id={"phone"}
        errors={errors?.phoneError}
        type={"text"}
        onInputFieldUpdate={onInputFieldUpdate}
        value={phone}
      />
      <InputField
        label={"Email"}
        id={"email"}
        errors={errors?.emailError}
        type={"email"}
        onInputFieldUpdate={onInputFieldUpdate}
        value={email}
      />
    </div>
  )
}
export default FormStep2
