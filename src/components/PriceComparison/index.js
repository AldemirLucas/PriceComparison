import { useState, useEffect } from 'react';
import CurrencyInput from './../currencyInput';
import SimulationResult from './simulationResult';
import Services from '../currencyInput/services';
import Util from '../moneyFormatter';
import style from './index.module.css'

function PriceComparison() {
  const [amount, setAmount] = useState(0)
  const [traditional, setTraditional] = useState()
  const [ourBank, setOurBank] = useState()
  
  useEffect(() => {
    Services.simulate(amount).then((res) => {
      setTraditional(res.bank)
      setOurBank(res.remessa)
    })
  },[amount])

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
          valueTax={traditional && traditional.tax}
          convertedCoin='USA'
          convertedValue={traditional && Util.valueToMoney(traditional.amount)}
          validate={amount <= 0}
        />

        <SimulationResult
          title='Nosso banco'
          valueTax={ourBank && ourBank.tax}
          convertedCoin='USA'
          convertedValue={ourBank &&  Util.valueToMoney(ourBank.amount)}
          validate={amount <= 0}
        />

    </div>
  )
}

export default PriceComparison