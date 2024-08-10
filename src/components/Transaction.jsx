import React , {useContext} from 'react'
import { GlobalContext } from '../context/GlobalState'

const Transaction = (props) => {
    const {deleteTransaction} = useContext(GlobalContext)
    const sign = props.transaction.amount < 0 ? '-' : '+';

  return (
    <div>
      <li className={props.transaction.amount < 0 ? 'minus' : 'plus'}>
          {props.transaction.text} <span>{sign}₹{Math.abs(props.transaction.amount)}</span>
          <button onClick={()=>deleteTransaction(props.transaction.id)}className="delete-btn">x</button>
        </li>
    </div>
  )
}

export default Transaction
