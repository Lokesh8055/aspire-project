import RecentTransactionsCard from "../RecentTransactions/RecentTransactions";
import ActionCard from "../ActionCard/ActionCard";
import CarouselComponent from "../Carousel/Carousel";
import "./Card.css";

function Card() {
  return (
    <section className="card">
      <div>
      <CarouselComponent />
      <ActionCard />
      </div>
      <RecentTransactionsCard />
    </section>
  );
}

export default Card;
