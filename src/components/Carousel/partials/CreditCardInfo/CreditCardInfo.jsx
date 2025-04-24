import AspireLogoWhite from "../../../../assets/aspireLogoWhite.svg";
import VisaLogo from "../../../../assets/visaLogo.svg";
import "./CreditCardInfo.css";
import DotGroup from "../DotGroup/DotGroup";

export default function CreditCardInfo({ name, creditCard, isFrozen }) {
  const background = isFrozen ? "frozen" : "unfrozen";
  return (
    <div className={`creditCard ${background}`}>
      <div className="card-header">
        <img src={AspireLogoWhite} alt="aspire-logo" className="aspire-logo" />
      </div>
      <div className="card-body">
        <h3 className="userName">{name}</h3>
        <div className="userNumber">
          <DotGroup />
          <span className="space">{creditCard.cardNumber}</span>
        </div>
        <div className="userDetails">
          <p>
            <span>Expiry:</span>
            <span>{creditCard.expiryDate}</span>
          </p>
          <p>
            <span>CVV:</span>
            <span>{creditCard.cvv}</span>
          </p>
        </div>
      </div>
      <div className="card-footer">
        <img src={VisaLogo} alt="visa-logo" className="visa-logo" />
      </div>
    </div>
  );
}
