import cn from 'classnames'
import style from './index.module.css'

function SimulationResult(props) {
  const valueTax = (props.valueTax * 100).toFixed(0)
  const widthTax = (props.valueTax * 100)+ 12
  const convertedValue = props.convertedValue

  return (
    <div className={style.simulationResult}>
      <p className={style.title}>{props.title}</p>
      
      <div className={cn ([style.pricingInfo], {[style.disable]: props.validate === true })}>
        <p>Voce recebe</p>
        <p>Taxas</p>
      </div>

      <div className={cn ([style.pricingBar], {[style.disable]: props.validate === true})}>
        <p className={style.convertedValue}>
          {props.convertedCoin}<span/>
          {convertedValue}
        </p>
        <div className={style.tax} style={{width:`${widthTax}%`}}>
          <p>{valueTax}<span>%</span></p>
        </div>
      </div>

    </div>
  )
}

export default SimulationResult