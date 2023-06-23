import BillTipNumContainer from "./Components/BillTipNumContainer";
import AmoutTotResContainer from "./Components/AmoutTotResContainer";
import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [billAmt, setBillAmt] = useState<number>(0);
  const [showBillAmtError, setShowBillAmtError] = useState<boolean>(false);
  const [showZeroError, setShowZeroError] = useState<boolean>(false)
  const [people, setPeoples] = useState <number>(Number);
  const [tip, setTip] = useState<number>(0)
  const [calculatedTip, setCalculatedTip] = useState<number>(0)
  const [total, setTotal] = useState<number>(0)


  useEffect(() => {
    // console.table({billAmt, tip, people})
    if(billAmt > 0 && people > 0 && tip > 0){
      setCalculatedTip(billAmt * (tip / 100))
      setTotal(calculatedTip + billAmt)
    }
  }, [billAmt, tip, people, calculatedTip])

  function handleBlillInput(e: React.ChangeEvent<HTMLInputElement>):void {
    const input: number = +e.target.value;
    const pattern = /^[0-9.]*$/;

    if (pattern.test(input.toString())) {
      setShowBillAmtError(false);
      setBillAmt(input);
      console.table(input)
    } else {
      setShowBillAmtError(true);
    }
  }
  function zeroError(e: React.ChangeEvent<HTMLInputElement>):void {
    const input = +e.target.value
    console.table(input)
    setPeoples(input)
    if(input == 0){
      setShowZeroError(true)
    } else{
      setShowZeroError(false)
    }
  }

  return (
    <div className="mainBackGround">
      <h3 className="mainHeader">
        spli
        <br />
        tter
      </h3>
      <div className="container">
        <BillTipNumContainer
          billAmt={billAmt}
          handleBlillInput={handleBlillInput}
          showBillAmtError={showBillAmtError}
          zeroError={zeroError}
          showZeroError={showZeroError}

          tip={tip}
          setTip={setTip}
          // people={people}
          // setPeoples={setPeoples}
          
        />
        <AmoutTotResContainer
        calculatedTip={calculatedTip}
        total={total}
         
        />
      </div>
    </div>
  );
}

export default App;
