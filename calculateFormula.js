let value1 = 111;
let value2 = Math.floor(Math.random() * 500);
let result;

/**
 * Calculates and returns the result based on the formula: x + y / 5 + 17.
 * This function applies operator precedence where division is performed before addition:
 * 1. Division: y / 5 - Division has higher precedence, so y is divided by 5 first.
 * 2. Addition: x + (result of division) + 17 - The results are then added together from left to right.
 * @param {number} x - The first operand used in the formula.
 * @param {number} y - The second operand, which is divided by 5 in the formula.
 * @return {number} The calculated result based on the formula.
 */
function calculateFormula(x, y) {
  return x + y / 5 + 17;
}
result = calculateFormula(value1, value2);

console.log(`${value1} + ${value2} / 5 + 17 = ${result}`);
