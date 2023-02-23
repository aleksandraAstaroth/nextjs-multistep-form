import InputField from "./InputField"

const FormStep3 = ({ seat, food, allergies, onInputFieldUpdate, errors }) => {
  return (
    <div className="form-style">
      <InputField
        label={"Seat"}
        id={"seat"}
        errors={errors?.seatError}
        type={"text"}
        onInputFieldUpdate={onInputFieldUpdate}
        value={seat}
      />
      <InputField
        label={"Food"}
        id={"food"}
        errors={errors?.foodError}
        type={"text"}
        onInputFieldUpdate={onInputFieldUpdate}
        value={food}
      />
      <InputField
        label={"Allergies"}
        id={"allergies"}
        errors={errors?.allergiesError}
        type={"text"}
        onInputFieldUpdate={onInputFieldUpdate}
        value={allergies}
      />
    </div>
  )
}
export default FormStep3
