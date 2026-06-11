## HTML

email, country,postal code,password and confirm password.
Each are inside a p element then inside a label element so
everything it goes to the input when the texts are clicked.
two span elements one for what the input is about and another on the bottom on the rules of the input elements and its error.
use the html validation guide sa itermediate html css.

email should be well email.
country is a select, zip code is type text with philippine postal code validation,japan postal code and indonesia. password should contain one uppercase, one number, one special character and at least 7 characters long with a maximum of 20 characters. confirm password's validation should only be the password and confirm password input to be the same.

## javascript validation

Each inputs has their own error message + praise message objects

1. email :
   `Email should be a proper Email "abc@example.com"`
   `email is required`
   `That is a good email`.
2. Country no validation lmao.
3. postal code: just use existing postal code stuff.
   `Philippine Postal Code should be 4 digits`
   `Postal code is required`
   `Japanese Postal Code should be 7 digits in the format NNN-NNNN`
   `Indonesian Postal Code should be 5 digits`
   `Valid Postal Code Like Emoji`

4.password :
`Password should countain 1 special character, 1 uppercase and 1number at leaset 7 characters.`
`password is required`
`Password should contain 1 special character`
`Password should contain 1 uppercase`
`Password should contain 1 number`
`password should be at least 7 characters`
`password sohuld be no more than 20 characters`

`Good Password`

5. `confirm-password is not the same as the password above`
   `Confirm Passsword is required`
   `Good Password`

each input elements except country should have their own event listener with their own objects. Everything should be required.
Default message should be shown when the user first enters the page. The listener should trigger every typed character in each input and message should change accordingly.
