import { Suspense } from "react";
import "./App.css";
import DaisyNav from './Components/DaisyNav/DaisyNav';
import NavBar from "./Components/NavBar/NavBar";
import PricingOptions from "./Components/PricingOptions/PricingOptions";
import ResultChart from "./Components/ResultCharts/ResultChart";

const pricingPromise = fetch('pricingData.json')
  .then(res => res.json());


function App() {
  
  return (
    <>

    <header>
      <NavBar></NavBar>
      <DaisyNav></DaisyNav>
      {/* <h1 className="font-extrabold text-[100px]">Get started What</h1> */}
    </header> 

    <main>
       <Suspense fallback={<div>Loading.........</div>}>
          <PricingOptions pricingPromise={pricingPromise}></PricingOptions>
       </Suspense>

       <ResultChart></ResultChart> 
    </main>

    <footer>
        
    </footer>
      
    </> 
  );
}

export default App;
