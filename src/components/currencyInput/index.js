import cn from 'classnames';
import Util from '../moneyFormatter';
import style from './index.module.css'

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