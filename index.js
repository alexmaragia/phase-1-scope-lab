// Global scope declarations
var customerName = 'bob'; // Declaring a global variable 'customerName'
const leastFavoriteCustomer = 'someone'; // Declaring a global constant 'leastFavoriteCustomer'

// Function to uppercase the global 'customerName' variable
function upperCaseCustomerName() {
  customerName = customerName.toUpperCase();
}

// Function to declare and set a global variable 'bestCustomer' within its scope
function setBestCustomer() {
  bestCustomer = 'not bob'; // This will declare 'bestCustomer' in the global scope
}

// Function to overwrite the global 'bestCustomer' variable
function overwriteBestCustomer() {
  bestCustomer = 'maybe bob'; // This will change the value of 'bestCustomer'
}

// Function to attempt changing the constant 'leastFavoriteCustomer'
function changeLeastFavoriteCustomer() {
  // Directly attempting to change 'leastFavoriteCustomer' 
  leastFavoriteCustomer = 'anyone';
}
