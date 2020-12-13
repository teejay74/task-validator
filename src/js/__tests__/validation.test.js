import validation from '../validation';

test.each([
  ['valid card number', '371449635398431', true],
  ['invalid card number', '30569309025905', false],
])(('Test validNumber  for '), (_, input, expected) => {
  expect(validation(input)).toBe(expected);
});
