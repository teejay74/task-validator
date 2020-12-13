export default function checkSystem(value) {
  let bank = false;
  if (value.startsWith('2')) bank = 'mir';
  if (value.startsWith('30') || value.startsWith('36') || value.startsWith('38')) bank = 'diners-club';
  if (value.startsWith('31') || value.startsWith('35')) bank = 'jcb';
  if (value.startsWith('34') || value.startsWith('37')) bank = 'american-expess';
  if (value.startsWith('4')) bank = 'visa';
  if (value.startsWith('50') || value.startsWith('56') || value.startsWith('57') || value.startsWith('58') || value.startsWith('63') || value.startsWith('67')) bank = 'maestro';
  if (value.startsWith('51') || value.startsWith('52') || value.startsWith('53') || value.startsWith('54') || value.startsWith('55')) bank = 'mastercard';
  if (value.startsWith('60')) bank = 'discover';
  return bank;
}
