import checkBankSystem from '../checkBankSystem';

test.each([
  ['Visa', '4716468476032081089', 'visa'],
  ['American Expess', '346178164655943', 'american-expess'],
  ['Mastercard', '5556146509476972', 'mastercard'],
  ['JCB', '3537830501037234', 'jcb'],
  ['Diners Club', '3627822023925523', 'diners-club'],
  ['Discover', '6011712754750697', 'discover'],
  ['Mir', '2221001397630788', 'mir'],
  ['Nonexistent system', '1011695386818851', false],
])(('Test checkBankSystem for '), (_, input, expected) => {
  expect(checkBankSystem(input)).toBe(expected);
});
