import { CircleCheckBig } from "lucide-react";

const PricingFeature = ({feature}) => {
    return (
        <div className='flex gap-2'> <CircleCheckBig></CircleCheckBig> {feature}</div>
    );
};

export default PricingFeature;