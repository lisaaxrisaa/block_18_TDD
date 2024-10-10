// const sum = (a, b) => {
//   return a + b;
// };

// const subtract = (a, b) => {
//   return a - b;
// };
// module.exports = { sum, subtract };

const multiply = (a, b) => {
  return a * b;
};

// Expect multiply(2, 5), output should be 10
// Expect multiply(2, -5), output should be -10
// Expect multiply('x', 3), output should be error
// Expect multiply('', 3), output should be error

function concatOdds(arr1, arr2) {
  let result = [];
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] % 2 !== 0 && !result.includes(arr1[i])) {
      result.push(arr1[i]);
    }
  }

  for (let j = 0; j < arr2.length; j++) {
    if (arr2[j] % 2 !== 0 && !result.includes(arr2[j])) {
      result.push(arr2[j]);
    }
  }

  return result;
}

console.log(concatOdds([3, 2, 1], [9, 1, 1, 1, 4, 15, -1]));

// Expect output to be one array of odd numbers
// Expect output to be all unique numbers , no repeats
// Expect input and output to be only integers
// Expect strings, decimals, fractions, empty input, and booleans to output an error

// - When a user has empty cart, they are either prompted to create an account or prompted to go back to the home page.
// - When a user clicks 'checkout' with minimum one item in their cart, it will take them to another page with two options. Continue as guest, create a new account/ log in.
// - If continue as guest- user will be prompted to enter name, contact information, billing/ shipping information, and payment information.
// - Once information is entered, user will be prompted to view cart before finalizing payment.
// - User will confirm payment.
// - When a user completes the order they will be directed to a page gives them an order summary and will receive an order confirmation email/message

// - If user creates a new account, they will prompted to input name, contact, billing/shipping, and payment information.
// - If user enters incorrect credentials, they will receive error message for specific credentials.
// - Once information is entered, user will be prompted to view cart before finalizing payment.
// - User will confirm payment.
// - When a user completes the order they will be directed to a page gives them an order summary and will receive an order confirmation email/message

// If a User tries to create a new account with existing credentials, they should get a message stating, "There's already an account with this email. Sign in or learn more."
// - If logged in with correct credentials, user will review cart and place order.
// - When a user completes the order they will be directed to a page gives them an order summary and will receive an order confirmation email/message
