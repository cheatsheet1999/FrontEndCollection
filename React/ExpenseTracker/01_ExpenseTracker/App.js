import ExpenseItem from "./components/Expenses/ExpenseItem";
import Expenses from "./components/Expenses/Expenses";
import ExpenseForm from "./components/NewExpense/ExpenseForm";
import NewExpense from "./components/NewExpense/NewExpense";
import ExpensesFilter from "./components/Expenses/ExpensesFilter";
import {useState} from "react";

const DUMMY_EXPENSES = [
    {
        id: 'e1',
        title: 'Toilet Paper',
        amount: 94.12,
        date: new Date(2020, 7, 14),
    },
    { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
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
    const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

    const addExpenseHandler = (expense) => {
        // [put the new received expense on the first place, then use spread operator]
        setExpenses(prevExpense => {
            return [expense, ...prevExpense];
        });
    }

  return (

      // moved to Expenses.js
    // <div>
    //   <h2>Let's get started!</h2>
    //     <ExpenseItem title={expenses[0].title}
    //                  amount={expenses[0].amount}
    //                  date={expenses[0].date}
    //     />
    //     <ExpenseItem title={expenses[1].title}
    //                  amount={expenses[1].amount}
    //                  date={expenses[1].date}
    //     />
    //     <ExpenseItem title={expenses[2].title}
    //                  amount={expenses[2].amount}
    //                  date={expenses[2].date}
    //     />
    //     <ExpenseItem title={expenses[3].title}
    //                  amount={expenses[3].amount}
    //                  date={expenses[3].date}
    //     />
    // </div>
      <div>
          <NewExpense onAddExpense={addExpenseHandler}/>

          <Expenses items={expenses}/>
      </div>

  );
}

export default App;
