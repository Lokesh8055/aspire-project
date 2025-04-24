import plusIconLogo from "../../assets/plusIcon.svg";
import "./Heading.css";
import { useAddCardContext } from "../../context/AddCardContext";
import AspireLogo from "../../assets/mobile/aspire-logo.svg";
import useMobile from "../../hooks/useMobile";

const Heading = () => {
  const isMobile = useMobile();
  const { handleModalOpened } = useAddCardContext();
  
  return (
    <section className="heading">
      <div className="details">
        <h3 className="balance">Available balance</h3>
        <div className="display-amount">
          <span className="currency-badge">S$</span>
          <span className="amount">3,000</span>
        </div>
      </div>
      {isMobile && (
          <img src={AspireLogo} alt="Aspire Logo" className="aspire-mobile-logo" />
      )}
      <button className="new-card-button" onClick={handleModalOpened}>
        <img src={plusIconLogo} alt="plusIconLogo" className="plus-icon" />
        <span>New Card</span>
      </button>
    </section>
  );
};

export default Heading;
