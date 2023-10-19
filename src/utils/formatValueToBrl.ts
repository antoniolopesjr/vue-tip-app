const formatValueToBRL = (value) => new Intl.NumberFormat('pt-BR', {
  style: 'currency',
  currency: 'BRL',
  maximumFractionDigits: 2,
}).format(value);

/**
 * Given a value in USD or EUR, format it to BRL.
 * @param input - The value that the user entered in the input field.
 * @returns The value of the input, formatted to BRL.
 */
function formatValue(input) {
  let output = 0;

  output = formatValueToBRL(input);

  return output;
}

export default {
  formatValue,
};
