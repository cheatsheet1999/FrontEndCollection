import ExpenseItem from "./ExpenseItem";
import './ExpenseList.css'
const ExpenseList = props => {
    const item = props.item;
    if(item.length === 0) {
       return <h2 className={'expenses-list__fallback'}>No data</h2>
    }



    return (
        <ul className={'expenses-list'}>
            {item.map((expense) => (
            <ExpenseItem key={expense.id} title={expense.title}
                         amount={expense.amount}
                         date={expense.date}
            />
            ))}
        </ul>
    )
}
export default ExpenseList;
