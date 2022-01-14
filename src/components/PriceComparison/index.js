import { useState } from 'react';
import CurrencyInput from './../currencyInput';
import SimulationResult from './simulationResult';
import style from './index.module.css'

function PriceComparison() {
  const [amount, setAmount] = useState(5000) 

  return (
    <div className={style.priceComparison}>

        <div className={style.comparedValue}>
          <p>Você envia</p>
          <CurrencyInput
            value={amount}
            onChange={setAmount}
            ISOcode='BRL'
          />
        </div>

        <SimulationResult
          title='Bancos tradicionais'
        />

    </div>
  )
}

export default PriceComparison