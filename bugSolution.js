function foo(a, b) {
  if (typeof a === 'number' && typeof b === 'number') {
    return a + b; // Numeric addition
  } else {
    // Handle cases where one or both operands aren't numbers appropriately.
    return 'Invalid operands'; // Or throw an error
  }
}

console.log(foo(1, '2')); // Output: Invalid operands
console.log(foo(1, 2)); // Output: 3