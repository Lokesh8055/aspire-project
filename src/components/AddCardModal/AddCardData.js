import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export const generateRandomCardNumber = () => {
  return Math.floor(1000 + Math.random() * 9000);
};

export const generateRandomExpiry = () => {
  const month = String(Math.floor(Math.random() * 12) + 1).padStart(2, "0");
  const year = String(2025 + Math.floor(Math.random() * 5)).slice(-2);
  console.log("month", month);
  console.log("year", year);
  return `${month}/${year}`;
};

export const ADD_CARD_CONST = {
  ADD_NEW_CARD: "Add New Card",
  CARD_HOLDER_NAME: "Card Holder Name",
  CARD_NUMBER: "Card Number",
  EXPIRY_DATE: "Expiry Date",
  ADD_CARD: "Add Card",
  NAME_PLACEHOLDER: "e.g. John Doe",
  NAME_ERROR: "Name should be less than 25 characters",
  MAX_NAME_LENGTH: 25,
  MIN_NAME_LENGTH: 3,
};

export const useAddCardModal = (handleAddCard, handleModalClosed) => {
  const [name, setName] = useState("");
  const [error, setError] = useState("");

  const handleNameChange = (e) => {
    const value = e.target.value.replace(/[^a-zA-Z\s]/g, '');
    if (value.length >= ADD_CARD_CONST.MIN_NAME_LENGTH && value.length <= ADD_CARD_CONST.MAX_NAME_LENGTH) {
      setName(value);
      setError("");
    } else {
      if (value.length < ADD_CARD_CONST.MIN_NAME_LENGTH) {
        setError(`Name should be at least ${ADD_CARD_CONST.MIN_NAME_LENGTH} characters`);
      } else {
        setError(ADD_CARD_CONST.NAME_ERROR);
      }
      setName(value);
    }
  };

  const handleSubmit = () => {
    if (!name.trim() || name.length < ADD_CARD_CONST.MIN_NAME_LENGTH || name.length > ADD_CARD_CONST.MAX_NAME_LENGTH) {
      if (name.length < ADD_CARD_CONST.MIN_NAME_LENGTH) {
        setError(`Name should be at least ${ADD_CARD_CONST.MIN_NAME_LENGTH} characters`);
      } else {
        setError(ADD_CARD_CONST.NAME_ERROR);
      }
      return;
    }

    const newCard = {
      name,
      userId: uuidv4(),
      creditCard: {
        cardNumber: generateRandomCardNumber(),
        expiryDate: generateRandomExpiry(),
        cvv: "***",
      },
    };
    handleAddCard(newCard);
    setName("");
    setError("");
    handleModalClosed();
  };

  return {
    name,
    error,
    handleNameChange,
    handleSubmit
  };
};





