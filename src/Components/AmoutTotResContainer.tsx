import "../Components/AmoutTotResContainer.css"

interface Props {
  calculatedTip: number;
  total: number;
}



function AmoutTotResContainer (props:Props) {
  const {calculatedTip, total} = props

  return(
  <div className="ContainerRightSide">
    <div className="tipAmPeCont">
      <div>
        <h3 className="tip">Tip Amount</h3>
        <h5 className="person">/ person</h5>
      </div>
      <div className="numOfTip">${calculatedTip}</div>
    </div>
    <div className="totalPerCont">
      <div>
        <h3 className="total">Total</h3>
        <h5 className="person">/ person</h5>
      </div>
      <div className="numOfTotal">${total}</div>
    </div>
    <button className="resetBtn">reset</button>

  </div>
  )
  
}

export default AmoutTotResContainer