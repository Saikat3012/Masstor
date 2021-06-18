//In this file check validationa Pattern

const Validation = {
    emailPatternvalidtion: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/, //email pattern
    namePatternvalidtion: /^[a-zA-Z]*$/, //name pattern
    phonenumbervalidtion: /^\d{10}$/,
}
export default Validation;