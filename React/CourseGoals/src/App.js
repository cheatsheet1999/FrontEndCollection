import React from "react";
import './App.css'
import CourseInput from "./components/CourseGoals/CourseInput/CourseInput";
import {useState} from "react";
import CourseGoalList from "./components/CourseGoals/CourseGoalList/CourseGoalList";


const App = () => {
  //1.从courseGoalList组件过来之后，一定会有一个状态来存放所有的课程
  //注意！这里初始state是一个数组，里面有两个object
  const [courseGoals, setCourseGoals] = useState([
    {text: 'Do All Work', id:'g1'},
    {text: 'Study the Course', id:'g2'}
  ]);

  //操作添加进来的list
  const addGoalHandler = (enteredText) => {
    //把状态设置一下，现在可以把取到的值塞进状态里了
    setCourseGoals(prevState => {
      const updateGoals = [...prevState];
      updateGoals.unshift({text: enteredText, id: Math.random().toString()})
      return updateGoals;
    })
  }

  //3. add功能写完之后， 肯定需要一个list组件来显示现在的组件
  let content = (
      <p style={{textAlign: 'center'}}>No goals. Maybe add one?</p>
  )

  //4.最后 delete
  const deleteItemHandler = goalId => {
    setCourseGoals(prevState => {
      return prevState.filter(goal => goal.id !== goalId);
    })
  }

  if(courseGoals.length > 0) {
    content = (
        <CourseGoalList items={courseGoals} onDeleteItem={deleteItemHandler}/>
    )
  }

  return (
      <div>
        <section id={'goal-form'}>
          {/*2. 既然courseInput里预判了会有一个onAddGoal函数，这里就给一个*/}
          <CourseInput onAddGoal={addGoalHandler}/>
        </section>
        <section id={'goals'}>
          {content}
        </section>

      </div>
  )
}

export default App;
