import { createContext, useContext, useState } from "react";

const AddCardContext = createContext();

export const AddCardProvider = ({ children }) => {
  const [users, setUsers] = useState([]);
  const [modalOpened, setModalOpened] = useState(false);

  const handleAddCard = (card) => {
    setUsers((prev) => [...prev, card]);
  };

  const handleModalOpened = () => setModalOpened(true);
  const handleModalClosed = () => setModalOpened(false);

  return (
    <AddCardContext.Provider
      value={{
        users,
        setUsers,
        modalOpened,
        handleModalOpened,
        handleModalClosed,
        handleAddCard,
      }}
    >
      {children}
    </AddCardContext.Provider>
  );
};

export const useAddCardContext = () => {
  return useContext(AddCardContext);
};
