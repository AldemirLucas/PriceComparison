import style from './index.module.css'

function SimulationResult(props) {
  
  return (
    <div className={style.simulationResult}>
      <p className={style.title}>{props.title}</p>
      
      <div className={style.pricingInfo}>
        <p>Voce recebe</p>
        <p>Taxas</p>
      </div>

      <div className={style.pricingBar}>
        <div className={style.tax} style={{width:'30px'}}></div>
      </div>

    </div>
  )
}

export default SimulationResult