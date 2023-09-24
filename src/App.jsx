import { useState,useEffect } from 'react'
import Web3 from "web3"
import ReadContract from './components/ReadContract';
import WriteContract from './components/WriteContract';
import ABI from "./ABI/ABI.json"
import './App.css'
//1st step - Create all components
//2nd step - To connect to the blockchain
//3rd step - To create an instance of smart contract
function App() {
  const [state, setState] = useState({web3:null,contract:null})

  useEffect(()=>{
    const template = async()=>{
      let web3 = new Web3(new Web3.providers.HttpProvider("HTTP://127.0.0.1:7545"))
      
      const contractAddress = "0xc579BaeB7d31d3D22178bc854142290f6aBb781b";
      const contractInstance = new web3.eth.Contract(ABI,contractAddress);
      setState({web3:web3,contract:contractInstance})
    }
    template()
  },[])

  return (
    <>
      <ReadContract state={state}/>
      <WriteContract state={state}/>
    </>
  )
}

export default App
