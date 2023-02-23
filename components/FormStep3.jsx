import InputField from "./InputField"

const FormStep3 = ({ seat, food, allergies, updateInputFields, errors }) => {
  return (
    <div className="form-style">
      <InputField
        label={"Seat"}
        id={"seat"}
        errors={errors?.seatError}
        type={"text"}
        updateInputFields={updateInputFields}
        value={seat}
      />
      <InputField
        label={"Food"}
        id={"food"}
        errors={errors?.foodError}
        type={"text"}
        updateInputFields={updateInputFields}
        value={food}
      />
      <InputField
        label={"Allergies"}
        id={"allergies"}
        errors={errors?.allergiesError}
        type={"text"}
        updateInputFields={updateInputFields}
        value={allergies}
      />
    </div>
  )
}
export default FormStep3
