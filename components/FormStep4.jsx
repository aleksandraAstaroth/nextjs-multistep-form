
const FormStep4 = ({ firstName, lastName, age, phone, email, seat, food, allergies, isFirstStep, isLastStep, back, next }) => {
    const onSubmit = (e) => {
        e.preventDefault()
    }
    return (
        <>
            <div className="text-left">
                <div id="firstName">First Name: {firstName}</div>
                <div id="age">Last Name: {lastName}</div>
                <div id="age">Age: {age}</div>
                <div id="phone"> Phone: {phone}</div>
                <div id="email">Email: {email}</div>
                <div id="seat">Seat: {seat}</div>
                <div id="food">Food: {food}</div>
                <div id="allergies">Allergies: {allergies}</div>
            </div>
            <div className="button-wrapper">
                {!isFirstStep && <button id="back" type="button" className="button-style" onClick={() => back()}>Back</button>}
            </div>
        </>
    )
}
export default FormStep4