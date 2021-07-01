import React, {useState, useEffect} from 'react';
import BarChart from './charts/barchart';
import { getBarchartData } from '../apiHanlder/index';
import { Button } from 'antd';

export default function Dashboard() {
  const [data, setData] = useState([]);
  const [yField, setYField] = useState("sales");

  useEffect(()=>{
    
    getBarchartData()
    .then(data => setData(data))
    .catch(err => console.log(err));
  }, []);

  console.log(yField);
  return <div>
    <Button onClick={()=>setYField("sales")} type={yField === "sales" ? "primary": null}>Sales</Button>
    <Button onClick={()=>setYField("efficiency")} type={yField === "efficiency" ? "primary": null}>Efficiency</Button>
    <BarChart data={data} yField={yField} />
  </div>;
}