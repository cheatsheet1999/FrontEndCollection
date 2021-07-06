import './CourseGoalItem.css'

const courseGoalItem = props => {
  //现在想加一个删除功能，这里存着所有的item，所以从这开始一层一层向上传参
  const deleteHandler = () => {
    props.onDelete(props.id)
  }

  return (
      <li className={'goal-item'} onClick={deleteHandler}>
        {props.children}
      </li>
  )
}

export default courseGoalItem;
