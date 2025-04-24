import { createContext, useContext, useState } from "react";

const FreezeCardContext = createContext();

export const FreezeCardProvider = ({ children }) => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [frozenSlides, setFrozenSlides] = useState(new Set());

  const isCurrentSlideFrozen = frozenSlides.has(activeSlide);

  const toggleFreeze = () => {
    setFrozenSlides((prev) => {
      const updated = new Set(prev);
      if (updated.has(activeSlide)) {
        updated.delete(activeSlide);
      } else {
        updated.add(activeSlide);
      }
      return updated;
    });
  };

  return (
    <FreezeCardContext.Provider
      value={{
        frozenSlides,
        toggleFreeze,
        activeSlide,
        setActiveSlide,
        isCurrentSlideFrozen,
      }}
    >
      {children}
    </FreezeCardContext.Provider>
  );
};

export const useFreezeCardContext = () => {
  return useContext(FreezeCardContext);
};
