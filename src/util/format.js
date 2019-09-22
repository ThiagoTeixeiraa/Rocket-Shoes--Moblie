import numeral from 'numeral';
import 'numeral/locales';

export function formatPrice(number) {
  numeral.locale('pt-br');
  numeral(number).format('0,0');
}
