
const FormStep4 = ({ firstName, lastName, age, phone, email, seat, food, allergies, isFirstStep,  back }) => {

     let values = [firstName, lastName, age, phone, email, seat, food, allergies]
     const labels = ["First Name", "Last Name", "Age", "Phone", "Email", "Seat", "Food", "Allergies"];
    return (
        <>
            <ul className="text-left">
            {labels.map((label, index) => (
                <li key={label}>
                    {label}: {values[index]}
                </li>
                ))}
            </ul>
            <div className="button-wrapper">
                {!isFirstStep && <button id="back" type="button" className="button-style" onClick={() => back()}>Back</button>}
            </div>
        </>
    )
}
export default FormStep4