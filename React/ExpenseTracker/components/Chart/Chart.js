import ChartBar from './ChartBar'
import './Chart.css';

const Chart = props => {
    //这里是expenseChart给的props.dataPoints
    //map可以transform from object to numbers，
    // 因为在expenseChart.js里，提前定义的dataPoints都是object
    const dataPointsValues = props.dataPoints.map(dataPoint => dataPoint.value)
    //max要的是一堆数字而不是一个数组，所以得展开
    const totalMaximum = Math.max(...dataPointsValues)

    return (
        <div className={'chart'}>
            {
                props.dataPoints.map((dataPoint) =>
                    (<ChartBar
                            key={dataPoint.label}
                            value={dataPoint.value}
                            maxValue={totalMaximum}
                            label={dataPoint.label}
                        />
                    ))}
        </div>
    )
}

export default Chart;

