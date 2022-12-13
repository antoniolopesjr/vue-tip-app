const formatValueToUSD = (value) => new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  maximumFractionDigits: 2,
}).format(value);

/**
 * Given a value, format it to USD pattern.
 * @param input - The value that the user entered in the input field.
 * @returns The value of the input, formatted to BRL.
 */
function formatValue(input) {
  let output = 0;

  output = formatValueToUSD(input);
  // console.log(input, output);

  return output;
}

export default {
  formatValue,
};
