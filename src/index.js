import "./styles.css";

const emailInput = document.querySelector("#email-input");
const countryInput = document.querySelector("#country-input");
const postalInput = document.querySelector("#postal-input");
const passwordInput = document.querySelector("#password-input");
const confirmPasswordInput = document.querySelector("#confirm-password-input");
const submitButton = document.querySelector("#submit-btn");

const messageEmail = document.querySelector(".message.email");
const messagePostal = document.querySelector(".message.postal");
const messagePassword = document.querySelector(".message.password");
const messageConfirmPassword = document.querySelector(
  ".message.confirm-password",
);

const regUpper = new RegExp("^(?=.*[A-Z]).+$", "");
const regSpecial = new RegExp("^(?=.*[^A-Za-z0-9]).+$", "");
const regNumber = new RegExp("^(?=.*\\d).+$");
const regCharacters = new RegExp("^.{7,}$");
const messages = {
  upper: "at least 1 upper case character, ",
  special: "at least 1 special character, ",
  number: "at least 1 number, ",
  characters: "at least 7 characters",
  good: "Good Password",
};

const validateEmail = () => {
  const emailMessageError = {
    default: "Email should be a proper email 'abc@example.com'",
    good: "That is a good email",
  };

  if (emailInput.validity.typeMismatch || emailInput.validity.valueMissing) {
    messageEmail.textContent = emailMessageError.default;
  } else if (emailInput.validity.valid) {
    messageEmail.textContent = emailMessageError.good;
  }
};
const validatePostalCode = () => {
  const postalMessageError = {
    ph: ["^\\d{4}$", `Philippine Postal Code should be 4 digits`],
    jp: [
      "^\\d{3}-\\d{4}$",
      `Japanese Postal Code should be 7 digits in the format NNN-NNNN`,
    ],
    id: ["^\\d{5}$", `Indonesian Postal Code should be 5 digits`],
  };

  const selectedCountry = countryInput.value;
  console.log(selectedCountry);
  const constraint = new RegExp(postalMessageError[selectedCountry][0], "");

  if (!constraint.test(postalInput.value)) {
    messagePostal.textContent = postalMessageError[selectedCountry][1];
    postalInput.setCustomValidity("1");
  } else {
    messagePostal.textContent = "Valid Postal Code 👍";
    postalInput.setCustomValidity("");
  }
};

const validatePassword = () => {
  let message = "Password should contain ";

  if (!regUpper.test(passwordInput.value)) {
    message += messages.upper;
    passwordInput.setCustomValidity("1");
  }

  if (!regSpecial.test(passwordInput.value)) {
    message += messages.special;
    passwordInput.setCustomValidity("1");
  }

  if (!regNumber.test(passwordInput.value)) {
    message += messages.number;
    passwordInput.setCustomValidity("1");
  }

  if (!regCharacters.test(passwordInput.value)) {
    message += messages.characters;
    passwordInput.setCustomValidity("1");
  }

  if (
    regUpper.test(passwordInput.value) &&
    regSpecial.test(passwordInput.value) &&
    regNumber.test(passwordInput.value) &&
    regCharacters.test(passwordInput.value)
  ) {
    message = "Good Password";
    passwordInput.setCustomValidity("");
  }
  messagePassword.textContent = message;

  validateConfirmPassword();
};

const validateConfirmPassword = () => {
  let message = "Password should contain ";

  if (!regUpper.test(confirmPasswordInput.value)) {
    message += messages.upper;
    confirmPasswordInput.setCustomValidity("1");
  }

  if (!regSpecial.test(confirmPasswordInput.value)) {
    message += messages.special;
    confirmPasswordInput.setCustomValidity("1");
  }

  if (!regNumber.test(confirmPasswordInput.value)) {
    message += messages.number;
    confirmPasswordInput.setCustomValidity("1");
  }

  if (!regCharacters.test(confirmPasswordInput.value)) {
    message += messages.characters;
    confirmPasswordInput.setCustomValidity("1");
  }
  messageConfirmPassword.textContent = message;

  if (
    regUpper.test(passwordInput.value) &&
    regSpecial.test(passwordInput.value) &&
    regNumber.test(passwordInput.value) &&
    regCharacters.test(passwordInput.value) &&
    passwordInput.value === confirmPasswordInput.value
  ) {
    messageConfirmPassword.textContent = `Good Password`;
    confirmPasswordInput.setCustomValidity("");
  } else if (
    passwordInput.value !== confirmPasswordInput.value &&
    !confirmPasswordInput
  ) {
    confirmPasswordInput.setCustomValidity("1");
    messageConfirmPassword.textContent =
      "confirm-password is not the same as the password above";
  }
};

const validateSubmit = (event) => {
  if (emailInput.validity.valueMissing) {
    messageEmail.textContent = "Email is required";
  }

  if (postalInput.validity.valueMissing) {
    messagePostal.textContent = "Postal is required";
  }

  if (passwordInput.validity.valueMissing) {
    messagePassword.textContent = "Password is required";
  }

  if (confirmPasswordInput.validity.valueMissing) {
    messageConfirmPassword.textContent = "Confirm-password is required";
  }

  if (
    confirmPasswordInput.validity.valueMissing ||
    passwordInput.validity.valueMissing ||
    postalInput.validity.valueMissing ||
    emailInput.validity.valueMissing
  ) {
    event.preventDefault();
  }
};

submitButton.addEventListener("click", validateSubmit);

validateEmail();
validatePostalCode();
validatePassword();
validateConfirmPassword();
emailInput.addEventListener("input", validateEmail);
countryInput.addEventListener("change", validatePostalCode);
postalInput.addEventListener("input", validatePostalCode);
passwordInput.addEventListener("input", validatePassword);
confirmPasswordInput.addEventListener("input", validatePassword);
