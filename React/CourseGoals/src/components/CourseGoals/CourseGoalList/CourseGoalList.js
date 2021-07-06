import './CourseGoalList.css'
import CourseGoalItem from "../CourseGoalItem/CourseGoalItem";

const CourseGoalList = props => {
  return (
      <ul className={'goal-list'}>
        {/*父给子传参数*/}
        {props.items.map(goal => (
            //再创建一个组件，让每一个item都变成单独的组件
            <CourseGoalItem key={goal.id}
                            id={goal.id}
                            onDelete={props.onDeleteItem}>
              {goal.text}
            </CourseGoalItem>
        ))}
      </ul>
  )
}

export default CourseGoalList;
