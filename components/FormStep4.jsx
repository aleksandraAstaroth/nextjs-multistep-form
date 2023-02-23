const FormStep4 = ({ firstName, lastName, age, phone, email, seat, food, allergies }) => {
  let values = [
    ["First Name", firstName],
    ["Last Name", lastName],
    ["Age", age],
    ["Phone", phone],
    ["Email", email],
    ["Seat", seat],
    ["Food", food],
    ["Allergies", allergies],
  ]
  return (
    <>
      <ul className="text-left">
        {values.map(([label, value]) => (
          <li key={label}>
            <span className="text-sm">{label}:</span>{" "}
            <span className="px-1 font-bold">{value}</span>
          </li>
        ))}
      </ul>
    </>
  )
}
export default FormStep4
