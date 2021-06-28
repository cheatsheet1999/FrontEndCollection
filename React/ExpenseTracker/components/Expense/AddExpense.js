
import './Expenses.css'
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import {useState} from "react";
import ExpenseList from "./ExpenseList";
import ExpenseChart from "./ExpenseChart";

function AddExpense(props) {
    const expenses = props.expenses;
    const [selectedDate, setSelectedDate] = useState("2020");
    const saveFilteredDate = selectedDate => {
        setSelectedDate(selectedDate);
    }
    //每次只显示某一年，剩下的不显示
    const filteredYear = expenses.filter((expense) => {
        return expense.date.getFullYear().toString() === selectedDate
    })

    return (
        <Card className={'expenses'}>
            <ExpensesFilter selected={selectedDate} onSaveFilteredDate={saveFilteredDate}/>
            {/*    这里要给chart传递参数*/}
            <ExpenseChart expenses={filteredYear}/>
            <ExpenseList item={filteredYear}/>

        </Card>

    );
}

export default AddExpense;
