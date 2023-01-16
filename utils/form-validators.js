export const emailValidator = (value) => {
    let errors = {}
      if (!value) {
        errors.emailError = "Email is a required field"
        return errors
      } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
        errors.emailError = "Email should have a correct format"
        return errors
      }else return null

  }
  
  export const firstNameValidator = (value) => {
      let errors = {}
      if (!value) {
         errors.firstNameError = "First name is a required field"
         return errors
      } else if (/[0-9]/.test(value)) {
       errors.firstNameError = "First name should not contain numbers"
       return errors
      } return null
  }  

  export const ageValidator = (value) => {
    let errors = {}
    if (!value) {
       errors.ageError = "Age is a required field"
       return errors
    } else if (isNaN(value)) {
      errors.ageError = "Age must be a number"
     return errors
    } else if (Number.isInteger(value) && value > 0) {
     errors.ageError = "Age should be positive"
     return errors
    } else return null
}
  export const lastNameValidator = (value) => {
      let errors = {}
      if (!value) {
       errors.lastNameError =  "Last name is a required field"
       return errors
      } else if (/[0-9]/.test(value)) {
        errors.lastNameError =  "Last name should not contain numbers"
        return errors
      } else return null
     
    }
    export const phoneValidator = (value) => {  
      let errors = {}
      if (!value) {
        errors.phoneError = "Phone number is a required field"
        return errors
      } else if (/^\+(?:[0-9] ?){6,14}[0-9]$/.test(value)) {
        errors.phoneError = "Phone number should have a correct format"
        return errors
      }
      return null
    }
      export const seatValidator = (value) => {
          let errors = {}
           if (!value) {
        errors.seatError = "Seat is a required field"
        return errors
      }}
  
      export const foodValidator = (value) => {
      let errors = {}
      if (!value) {
        errors.foodError = "Food is a required field"
      }
      return errors
  }
  
      export const allergiesValidator = (value) => {
          let errors = {}
      if (!value) {
        errors.allergiesError = "Allergies is a required field"
      }
      return errors
  
    }
  
  
