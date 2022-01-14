import cn from 'classnames';
import style from './index.module.css'

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

const CurrencyInput = ({ value, onChange, ...props }) => {
	return (
    <div className={cn ([style.container], {[style.disable] : value <= 0})}>
      <p className={style.currency}>{props.ISOcode}</p>
      <input
        {...props}
        value={Util.valueToMoney(value)}
        onChange={e => onChange(Util.moneyToValue(e.target.value))} />
    </div>
  );
}

export default CurrencyInput