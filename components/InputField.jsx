const InputField = ({ label, id, errors, type, onInputFieldUpdate, value }) => {
  return (
    <>
      <span className="input-wrapper">
        <label htmlFor={id} className="label-padding">
          {label}
        </label>
        <input
          id={id}
          type={type}
          className={`input-field ${errors ? "border-red-600" : "border-gray-300"}`}
          value={value}
          onChange={(e) => onInputFieldUpdate({ [id]: e.target.value })}
        />
      </span>
      {errors && <p className="error-field">{errors}</p>}
    </>
  )
}
export default InputField
