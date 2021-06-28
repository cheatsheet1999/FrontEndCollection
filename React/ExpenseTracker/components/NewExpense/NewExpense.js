import './NewExpense.css';
import ExpenseForm from "./ExpenseForm";
import {useState} from "react";

const NewExpense = (props) => {
    //没有点击按钮前，只显示Add new Expense,点了之后就有地方可以输入了
    const [isEditing, setIsEditing] = useState(false)

    const saveExpenseData = enteredExpenseData => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        }
        props.onAddExpense(expenseData)
        //如果交了的话，把state变成false，然后表单就折叠了
        setIsEditing(false)
    }

    const isEditingHandler = () => {
        setIsEditing(true);
    }

    const cancelEditing = () => {
        setIsEditing(false);
    }

    return (
        <div className={"new-expense"}>
            {
                //isEditing原本是false(折叠)， 如果是true的话，就显示表单，false就折叠
                isEditing ? <ExpenseForm onSaveExpenseData={saveExpenseData}
                    onCancel={cancelEditing}/> :
                    //子传父一个false值，子组件如果点了cancel按钮，就折叠

                    //要是点了这个按钮，state就变成true
                    <button onClick={isEditingHandler}>Add New Expense</button>
            }
        </div>
    )
}

export default NewExpense;
