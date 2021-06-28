import AddExpense from "./components/Expense/AddExpense";
import NewExpense from "./components/NewExpense/NewExpense";
import {useState} from 'react';
//初始化几个假数据
const INITIAL_EXPENSE = [
    {
        id: 'e1',
        title: 'Toilet Paper',
        amount: 94.12,
        date: new Date(2020, 7, 14),
    },
    {   id: 'e2',
        title: 'New TV',
        amount: 799.49,
        date: new Date(2021, 2, 12)
    },
    {
        id: 'e3',
        title: 'Car Insurance',
        amount: 294.67,
        date: new Date(2021, 2, 28),
    },
    {
        id: 'e4',
        title: 'New Desk (Wooden)',
        amount: 450,
        date: new Date(2021, 5, 12),
    },
];




function App() {

    const [expenses, setExpenses] = useState(INITIAL_EXPENSE)
    const addExpenseHandler = expense => {
        setExpenses((prevExpense) => {
            return [expense, ...prevExpense]
        })
    }
  return (
    <div>
         <NewExpense onAddExpense={addExpenseHandler}/>
         <AddExpense expenses={expenses}/>
    </div>
  );
}

export default App;
