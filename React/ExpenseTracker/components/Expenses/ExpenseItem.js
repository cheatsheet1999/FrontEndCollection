import './ExpenseItem.css';
import './ExpenseDate';
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";

const ExpenseItem = (props) => {
    //moved to App.js
    // let expenseDate = new Date(2021, 2, 28);
    // let expenseTitle = 'Car Insurance';
    // let expenseAmount = 294.67;

    //Moved to ExpenseDate.js
    // let month = props.date.toLocaleString('en-US', {month: 'long'});
    // let day = props.date.toLocaleString('en-US', {day: '2-digit'});
    // let year = props.date.getFullYear();

    return (
        <li>
            <Card className={'expense-item'}>
                <ExpenseDate date={props.date}/>
                <div className={'expense-item__description'}>
                    <h2>{props.title}</h2>
                    <div className={'expense-item__price'}>${props.amount}</div>
                </div>
            </Card>
        </li>
    )
}

export default ExpenseItem;