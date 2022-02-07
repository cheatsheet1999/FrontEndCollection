import './NewExpenses.css';
import ExpenseForm from "./ExpenseForm";
import {useState} from "react";

const NewExpense = (props) => {
    const [isEditing, setIsEditing] = useState(false)
    const onSaveExpenseDataHandler = (enteredExpenseData) => {
        let expenseData = {
            ...enteredExpenseData,
            id: Math.random.toString()
        }
        props.onAddExpense(expenseData)
        setIsEditing(false);
    }

    const startEditingHandler = () => {
        setIsEditing(true);
    }

    //parent to child function
    const stopEditingHandler = () => {
        setIsEditing(false);
    }
    return (
        <div className={"new-expense"}>
            {!isEditing && <button onClick={startEditingHandler}>Add New Expense</button>}
            {isEditing && <ExpenseForm onSaveExpenseData={onSaveExpenseDataHandler}
                                       onCancel={stopEditingHandler}
            />}
        </div>
    )
}

export default NewExpense