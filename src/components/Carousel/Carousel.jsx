import CreditCardInfo from "./partials/CreditCardInfo/CreditCardInfo";
import "./Carousel.css";
import { useCarouselData, CAROUSEL_CONST } from "./CarouselData";

const CarouselComponent = () => {
  const {
    users,
    activeSlide,
    setActiveSlide,
    frozenSlides,
    carouselRef,
    handleTouchStart,
    handleTouchMove,
    handleTouchEnd
  } = useCarouselData();

  if (!users) return <p>{CAROUSEL_CONST.LOADING_MESSAGE}</p>;

  return (
    <div className="carousel-container">
      <div 
        className="carousel"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <div className="carousel-track" ref={carouselRef}>
          {users.map((user, index) => (
            <div key={user.userId} className="carousel-slide">
              <CreditCardInfo {...user} isFrozen={frozenSlides.has(index)} />
            </div>
          ))}
        </div>
      </div>
      
      <div className="carousel-indicators">
        {users.map((_, index) => (
          <button
            key={index}
            className={`carousel-indicator ${index === activeSlide ? 'active' : ''}`}
            onClick={() => setActiveSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default CarouselComponent;
