import PricingFeature from "./PricingFeature";

const PricingCard = ({ pricing }) => {
  const { name, price, duration, description, features } = pricing;

  return (
    <div className="border-2 border-amber-400 p-5 md:p-10 rounded-[30px] bg-amber-200 flex flex-col">
      {/* Card Header */}
      <div>
        <h1>{name}</h1>
        <h4>{price}</h4>
      </div>
      {/* Card Body */}
      <div>
        <p>Duration: {duration}</p>
        <p className="bg-purple-200 rounded-[25px] p-4 mt-10 flex-1">
          {description}
          {
            features.map((feature, index) => (
            <PricingFeature key={index} feature={feature}></PricingFeature>
          ))
          }
        </p>
        
      </div>
      <button className="btn w-full mt-5">Wide</button>
    </div>
  );
};

export default PricingCard;
