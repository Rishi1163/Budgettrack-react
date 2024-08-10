import React, { useState , useContext } from 'react';
import { GlobalContext } from '../context/GlobalState'


const AddTrans = () => {

    const[text , setText] = useState('')
    const [amount , setAmount] = useState(0)
    const {addTransaction} = useContext(GlobalContext)

    const submit = e =>{
      e.preventDefault()

      const newTransactions ={
        id : Math.floor(Math.random()*100000000),
        text,
        amount: +amount,
      }
      addTransaction(newTransactions);
    }

  return (
    <>
      <h3>Add new transaction</h3>
      <form onSubmit={submit}>
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input value={text} onChange={(e)=>setText(e.target.value)} type="text" id="text" placeholder="Enter text..." />
        </div>
        <div className="form-control">
          <label htmlFor="amount">
            Amount <br />
            (negative - expense, positive - income)
          </label>
          <input value={amount} onChange={(e)=>setAmount(e.target.value)} type="number" id="amount" placeholder="Enter amount..." />
        </div>
        <button className="btn">Add transaction</button>
      </form>
    </>
  );
};

export default AddTrans;