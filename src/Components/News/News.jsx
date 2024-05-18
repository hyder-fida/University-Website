import { cards } from "./newsData";

const Card = ({ imgSrc, link }) => (
  <div className="col-3 mb-3 ">
    <div className="card ">
      <a href={link}>
        {imgSrc && (
          <img
            src={imgSrc}
            alt="cardImg"
            className="card-img img-fluid rounded"
          />
        )}
      </a>
    </div>
  </div>
);

const News = () => {
  return (
    <div>
      <h1 className="text-capitalize text-center mt-1">NEWS AND EVENTS</h1>
      <div className="row">
        <h1 className="m-4">Photo Gallery</h1>

        {cards.map((card) => (
          <Card key={card.id} imgSrc={card.imgSrc} link="#" />
        ))}
      </div>
    </div>
  );
};

export default News;
