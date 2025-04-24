export const maskCreditCard = (cardNumber) => {
  // Remove all non-digit characters just in case
  const digits = cardNumber.replace(/\D/g, "");

  if (digits.length !== 16) {
    throw new Error("Invalid credit card number. Must be 16 digits.");
  }

  const last4 = digits.slice(-4);

  return last4;
};
