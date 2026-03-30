import { use } from "react";
import PricingCard from "../PricingCard/PricingCard";
import DaisyPricingCard from "../DaisyPricingCard/DaisyPricingCard";

const PricingOptions = ({pricingPromise}) => { 
    const pricingData = use(pricingPromise);

    return (
        <div>
             <h1 className='flex justify-center my-5 font-medium text-[40px]'>Get our Services</h1>
             <div className='grid sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5  mb-20'>
                {/* {
                    pricingData.pricingPlans.map(pricing => <PricingCard key={pricing.id} pricing={pricing}></PricingCard>) 
                } */}

                {
                     pricingData.pricingPlans.map(pricing => <DaisyPricingCard key={pricing.id} pricing={pricing}></DaisyPricingCard>)
                }
             </div>
        </div>
    );
};

export default PricingOptions;