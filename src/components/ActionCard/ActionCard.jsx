import FreezeCard from "../../assets/freezeCard.svg";
import SetSpendLimit from "../../assets/setSpendLimit.svg";
import GPay from "../../assets/gPay.svg";
import ReplaceCard from "../../assets/replaceCard.svg";
import CancelCard from "../../assets/cancelCard.svg";
import "./ActionCard.css";
import { useFreezeCardContext } from "../../context/FreezeCardContext";

const ActionCard = () => {
  const { toggleFreeze, isCurrentSlideFrozen } = useFreezeCardContext();

  const ACTION_CARD = [
    {
      label: isCurrentSlideFrozen ? "Unfreeze card" : "Freeze card",
      icon: FreezeCard,
      onClick: toggleFreeze,
    },
    { label: "Set spend limit", icon: SetSpendLimit },
    { label: "Add to GPay", icon: GPay },
    { label: "Replace card", icon: ReplaceCard },
    { label: "Cancel card", icon: CancelCard },
  ];

  return (
    <ul className="card-action-container">
      {ACTION_CARD.map((action, index) => (
        <li
          key={index}
          className="card-action"
          onClick={action.onClick}
        >
          <img
            src={action.icon}
            alt={action.label}
            className="card-action-icon"
          />
          <div className="card-action-text">{action.label}</div>
        </li>
      ))}
    </ul>
  );
};

export default ActionCard;
