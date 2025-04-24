import React, { useState } from "react";
import BusinessAndFinance from "../../assets/business-and-finance.svg";
import FileStorage from "../../assets/file-storage.svg";
import Flights from "../../assets/flights.svg";
import Megaphone from "../../assets/megaphone.svg";
import UpArrow from "../../assets/upArrow.svg";
import DownArrow from "../../assets/downArrow.svg";
import "./RecentTransactions.css";

const transactions = [
  {
    icon: FileStorage,
    iconColor: "blue",
    name: "Hamleys",
    date: "20 May 2020",
    amount: "+ S$ 150",
    amountColor: "green",
    description: "Refund on debit card",
    isCredit: true,
  },
  {
    icon: Flights,
    iconColor: "green",
    name: "Hamleys",
    date: "20 May 2020",
    amount: "- S$ 150",
    amountColor: "black",
    description: "Charged to debit card",
  },
  {
    icon: Megaphone,
    iconColor: "pink",
    name: "Hamleys",
    date: "20 May 2020",
    amount: "- S$ 150",
    amountColor: "black",
    description: "Charged to debit card",
  },
];

export default function RecentTransactionsCard() {
  const [isOpen, setIsOpen] = useState(true);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      toggleAccordion();
    }
  };

  return (
    <div className="accordion" role="region" aria-label="Recent Transactions">
      <button 
        className="accordion-header" 
        onClick={toggleAccordion}
        onKeyDown={handleKeyDown}
        aria-expanded={isOpen}
        aria-controls="accordion-content"
        aria-label={`${isOpen ? 'Collapse' : 'Expand'} recent transactions`}
      >
        <div className="accordion-title">
          <span>Recent transactions</span>
          <img 
            src={isOpen ? UpArrow : DownArrow} 
            alt="" 
            className="accordion-icon"
            aria-hidden="true"
          />
        </div>
      </button>
      
      <div 
        id="accordion-content"
        className={`accordion-content ${isOpen ? 'open' : 'closed'}`}
        role="region"
        aria-label="Transaction list"
      >
        <ul className="transaction-list" role="list">
          {transactions.map((transaction, index, arr) => {
            const { icon, iconColor, name, date, amount, description } = transaction;
            return (
              <li className="transaction-wrapper" key={index} role="listitem">
                <div className="transaction-item">
                  <div className={`icon ${iconColor}`} aria-hidden="true">
                    <img src={icon} alt="" />
                  </div>
                  <div className="content">
                    <div className="top-row">
                      <span className="merchant">{name}</span>
                      <span 
                        className={`amount ${transaction.isCredit ? 'positive' : ''}`}
                        aria-label={`Amount: ${amount}`}
                      >
                        {amount}
                      </span>
                    </div>
                    <div className="date" aria-label={`Date: ${date}`}>{date}</div>
                    <div className="desc">
                      <img src={FileStorage} alt="" aria-hidden="true" />
                      <span className="text blue-text">{description}</span>
                    </div>
                  </div>
                </div>
                {index !== arr.length - 1 && <hr />}
              </li>
            );
          })}
        </ul>
        <button 
          className="view-transactions"
          onClick={() => console.log('View all transactions')}
          aria-label="View all card transactions"
        >
          View all card transactions
        </button>
      </div>
    </div>
  );
}
