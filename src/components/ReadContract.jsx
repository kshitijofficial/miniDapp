import { useState,useEffect } from "react";

const ReadContract = ({ state }) => {
  const [data,setData]=useState("No data")
  const { contract } = state; // Destructuring contract from state

  useEffect(() => {
    const readData = async () => {
      const data = await contract.methods.retrieve().call();
      setData(data)
    }
    contract && readData();
  }, [contract]); // Adding contract as a dependency

  return <><p>Read Contract : {data}</p></>;
}

export default ReadContract;
