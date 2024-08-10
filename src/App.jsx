import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import Balance from './components/Balance'
import IncomeExpenses from './components/IncomeExpenses'
import TransactionList from './components/TransactionList'
import AddTrans from './components/AddTrans'
import { GlobalProvider } from './context/GlobalState'

function App() {
  

  return (
    <GlobalProvider>
    <Header />
    <div className="container">
        <Balance />
        <IncomeExpenses />
        <TransactionList />
        <AddTrans />
      </div>
    </GlobalProvider>
  )
}

export default App
