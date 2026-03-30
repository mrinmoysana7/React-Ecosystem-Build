// import { Line, LineChart } from "recharts";

import { Line, LineChart, XAxis, YAxis } from "recharts";

const resultData = [
  {
    id: 1,
    name: "Rahul Das",
    physics: 82,
    chemistry: 78,
    math: 85,
  },
  {
    id: 2,
    name: "Anjali Roy",
    physics: 90,
    chemistry: 88,
    math: 92,
  },
  {
    id: 3,
    name: "Sourav Paul",
    physics: 70,
    chemistry: 68,
    math: 75,
  },
  {
    id: 4,
    name: "Priya Sen",
    physics: 85,
    chemistry: 84,
    math: 89,
  },
  {
    id: 5,
    name: "Arjun Ghosh",
    physics: 65,
    chemistry: 70,
    math: 68,
  },
  {
    id: 6,
    name: "Neha Sharma",
    physics: 93,
    chemistry: 91,
    math: 94,
  },
  {
    id: 7,
    name: "Rohit Singh",
    physics: 72,
    chemistry: 74,
    math: 76,
  },
  {
    id: 8,
    name: "Sneha Dutta",
    physics: 88,
    chemistry: 86,
    math: 90,
  },
  {
    id: 9,
    name: "Amit Mondal",
    physics: 60,
    chemistry: 62,
    math: 65,
  },
  {
    id: 10,
    name: "Pooja Gupta",
    physics: 95,
    chemistry: 94,
    math: 96,
  },
];

const ResultChart = () => {
  return (
    <div className='flex justify-center items-center mx-10 my-10'>
      

      <LineChart
        style={{ width: "100%", aspectRatio: 1.618, maxWidth: "50%" }}
        responsive
        data={resultData}
      >
        <XAxis datakey="name"></XAxis>
        <YAxis datakey="math"></YAxis>
        <Line dataKey="physics" stroke="#8884d8"></Line>
        <Line dataKey="chemistry" stroke="#82ca9d"></Line>
        <Line dataKey="math" stroke="#ffc658"></Line>
        
      </LineChart>
    </div>
  );
};

export default ResultChart;