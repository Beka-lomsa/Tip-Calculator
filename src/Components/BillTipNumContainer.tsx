import "./BillTipNumContainer.css";
import { BsCurrencyDollar } from "react-icons/bs";
import { MdPerson } from "react-icons/md";
// import { useEffect } from "react";

interface Props {
  handleBlillInput: any;
  billAmt: number;
  showBillAmtError: boolean;
  zeroError: any;
  setTip: any;
  showZeroError: boolean;
  tip: any;
}

function BillTipNumContainer(props: Props) {
  const {
    handleBlillInput,
    billAmt,
    showBillAmtError,
    zeroError,
    setTip,
    tip,
    showZeroError,
  } = props;

/*   useEffect(() => {
    console.table(tip);
  }, [tip]); */

  const handleSelectedTip = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTip(+e.target.value);
    console.table(tip);
  };

  return (
    <div className="ContainerLeftSide">
      <div className="wrapper">
        <h3 className="headersStyle">Bill</h3>
        <p className="error">
          {" "}
          {showBillAmtError ? "Please enter number only" : ""}{" "}
        </p>
        <div
          className={showBillAmtError ? "billAmouContAfEroor" : "billAmount"}
        >
          <BsCurrencyDollar className="dollarICon" />
          <input
            className="billInput"
            inputMode="numeric"
            placeholder="0"
            onInput={handleBlillInput}
            value={billAmt}
          />
        </div>
      </div>
      <h3 className="headersStyle tiphead">Select Tip %</h3>
      <div className="procentCont">
        <form className="btnInput">
          <input
            onClick={handleSelectedTip}
            type="radio"
            id="input1"
            name="tip"
            value="5"
          />
          <label className="tip-btn" htmlFor="input1">
            5%
          </label>
        </form>
        <form className="btnInput">
          <input
            onClick={handleSelectedTip}
            type="radio"
            id="input2"
            name="tip"
            value="10"
          />
          <label className="tip-btn" htmlFor="input2">
            10%
          </label>
        </form>
        <form className="btnInput">
          <input
            onClick={handleSelectedTip}
            type="radio"
            id="input3"
            name="tip"
            value={15}
          />
          <label className="tip-btn" htmlFor="input3">
            15%
          </label>
        </form>
        <form className="btnInput">
          <input
            onClick={handleSelectedTip}
            type="radio"
            id="input4"
            name="tip"
            value={25}
          />
          <label className="tip-btn" htmlFor="input4">
            25%
          </label>
        </form>
        <form className="btnInput">
          <input
            onClick={handleSelectedTip}
            type="radio"
            id="input5"
            name="tip"
            value={50}
          />
          <label className="tip-btn" htmlFor="input5">
            50%
          </label>
        </form>
        <input
          className="customNumber"
          onInput={handleSelectedTip}
          inputMode="numeric"
          placeholder="Custom"
        />
      </div>
      <div className="wrapper">
        <h3 className="headersStyle headnumOfPep">Number of People</h3>
        <p className="error">{showZeroError ? "Can't be zero" : ""}</p>
        <div
          className={
            showZeroError ? "NumberofPeoAfterErrorr" : "NumberOfPeopContainer"
          }
        >
          <MdPerson className="iconAvatar" />
          <input
            className="peopleNumber"
            inputMode="numeric"
            placeholder="0"
            onInput={zeroError}
          />
        </div>
      </div>
    </div>
  );
}

export default BillTipNumContainer;
