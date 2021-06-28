import Card from "../UI/Card";
import Chart from "../Chart/Chart";


const ExpenseChart = props => {
    const chartDataPoints = [
        {label: 'Jan', value: 0},
        {label: 'Feb', value: 0},
        {label: 'Mar', value: 0},
        {label: 'Apr', value: 0},
        {label: 'May', value: 0},
        {label: 'Jun', value: 0},
        {label: 'Jul', value: 0},
        {label: 'Aug', value: 0},
        {label: 'Sep', value: 0},
        {label: 'Oct', value: 0},
        {label: 'Nov', value: 0},
        {label: 'Dec', value: 0},
    ];

    //如果是object就用in， array就用of遍历
    for(const expense of props.expenses) {
        let expenseMonth = expense.date.getMonth();
        //一定要加上 .value，不然就会显示空白线
        chartDataPoints[expenseMonth].value += expense.amount
    }

    return <Chart dataPoints={chartDataPoints}/>
}

export default ExpenseChart;
