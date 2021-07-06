import './CourseInput.css'
import {useState} from 'react'
import Button from "../../UI/Button/Button";
import styled from 'styled-components';

const FormControl = styled.div`
  margin: 0.5rem 0;
  
  & label {
    font-weight: bold;
    display: block;
    margin-bottom: 0.5rem;
    color: ${props=>props.invalid ? 'red' : 'black'}
  }

  & input {
    display: block;
    width: 100%;
    border: 1px solid ${props=>props.invalid ? 'red' : '#ccc'};
    background: ${props=>props.invalid ? '#ffd7d7' : 'transparent'};
    font: inherit;
    line-height: 1.5rem;
    padding: 0 0.25rem;
  }

  & input:focus {
    outline: none;
    background: #fad0ec;
    border-color: #8b005d;
  }
`
//首先，既然有placeholder了，那就证明需要有一个表单来提交所有的信息
//2. 要把这里提交的数据，发送给父组件，肯定要prop了
const CourseInput = props => {
  //4.根据goalInputChangeHandler推断出需要一个状态hook
  const [enteredValue, setEnteredValue] = useState('');
  const [isValid, setIsValid] = useState(true);
  //3.如果input框变化了，把内容存到state里，所以我需要一个state在这个class
  const goalInputChangeHandler = (event) => {
      if(event.target.value.trim().length > 0) {
          setIsValid(true);
      }
    setEnteredValue(event.target.value);
  }

  //5.这个form肯定是要发送给父组件的，所以要call一下props,写到这的话就得停一下，然后去App组件里写了
  //或者，我们可以提前预判一个从props传来的function，只要记得名字就好
  const formSubmitHandler = (event) => {
    event.preventDefault();
      if(enteredValue.trim().length === 0) {
          setIsValid(false);
          return;
      }
    //6.这里我预判会有onAddGoal这个函数在APP组件里,现在回去App组件
    props.onAddGoal(enteredValue);
      setEnteredValue('')
  }

  return (
      <form onSubmit={formSubmitHandler}>

        {/*  这里的div要用styled component 包括 所以refer to FormControl function*/}
        <FormControl invalid={!isValid}>
          <label>Course Goal</label>
          {/*既然有个input框，想让里面的字有变化，那肯定要onChange带函数*/}
          <input type={'text'} onChange={goalInputChangeHandler}/>
        </FormControl>
        <Button type={'submit'}>Add Goal</Button>
      </form>
  )
}

export default CourseInput;
