const moneyformatter =  new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' });

const Util = {
  valueToMoney: value => {
    return moneyformatter
      .format(value)
      .replace('R$', '')
  },
  moneyToValue: money => {
    return (parseFloat(money
      .replace(',', '.')
      .replaceAll('.', '')
    ) || 0) / 100;
  }
}

export default Util