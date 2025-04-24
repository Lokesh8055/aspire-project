import { useState, useEffect, useRef } from "react";
import { v4 as uuidv4 } from "uuid";
import { useAddCardContext } from "../../context/AddCardContext";
import { useFreezeCardContext } from "../../context/FreezeCardContext";

export const CAROUSEL_CONST = {
  SWIPE_THRESHOLD: 50,
  LOADING_MESSAGE: "Loading credit card info...",
  TOUCH_START: "touchstart",
  TOUCH_MOVE: "touchmove",
  TOUCH_END: "touchend"
};

export const useCarouselData = () => {
  const { users, setUsers } = useAddCardContext();
  const { activeSlide, setActiveSlide, frozenSlides } = useFreezeCardContext();
  const carouselRef = useRef(null);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  useEffect(() => {
    if (users.length > 0) {
      localStorage.setItem("users", JSON.stringify(users));
    }
  }, [users]);

  const fetchCardDataFromJSON = async () => {
    const response = await fetch("/mockCreditCardUsers.json");
    const data = await response.json();
    const dataWithIds = data.map((card) => ({ ...card, userId: uuidv4() }));
    localStorage.setItem("users", JSON.stringify(dataWithIds));
    return data;
  };

  useEffect(() => {
    const stored = localStorage.getItem("users");
    if (stored) {
      setUsers(JSON.parse(stored));
    } else {
      fetchCardDataFromJSON()
        .then((data) => setUsers(data))
        .catch((err) => {
          console.error(err);
        });
    }
  }, []);

  const handleTouchStart = (e) => {
    setTouchStart(e.touches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.touches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > CAROUSEL_CONST.SWIPE_THRESHOLD;
    const isRightSwipe = distance < -CAROUSEL_CONST.SWIPE_THRESHOLD;

    if (isLeftSwipe) {
      setActiveSlide((prev) => (prev + 1) % users.length);
    }
    if (isRightSwipe) {
      setActiveSlide((prev) => (prev - 1 + users.length) % users.length);
    }

    setTouchStart(null);
    setTouchEnd(null);
  };

  useEffect(() => {
    if (carouselRef.current) {
      carouselRef.current.style.transform = `translateX(-${activeSlide * 100}%)`;
    }
  }, [activeSlide]);

  return {
    users,
    activeSlide,
    setActiveSlide,
    frozenSlides,
    carouselRef,
    handleTouchStart,
    handleTouchMove,
    handleTouchEnd
  };
};
