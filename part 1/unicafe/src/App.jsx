import { useState } from 'react'

const Button = ({onClick,text}) => {
  return (
    <button onClick={onClick}>{text}</button>
  )
}

const StatisticLine = ({text,value}) => {
  return (
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
  )
}

const Statistics = ({good,neutral,bad}) => {
  const total = good + neutral + bad
  const avg = (good*1 + bad*(-1))/total

  const positive = (good/total)*100
  if(total>0){
    return (
      <table>
        <StatisticLine text="good" value={good}/>
        <StatisticLine text="neutral" value={neutral}/>
        <StatisticLine text="bad" value={bad}/>
        <StatisticLine text="all" value={total}/>
        <StatisticLine text="average" value={total>0?avg:0}/>
        <StatisticLine text="positive" value={`${total>0?positive:0} %`}/>
      </table>
    )
  } else {
    return (
      <p>No feedback given</p>
    )
  }
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  return (
   <>
    <h1>Give feedback</h1>
    <Button onClick={()=>{setGood(good + 1)}} text="good"/>
    <Button onClick={()=>{setNeutral(neutral + 1)}} text="neutral"/>
    <Button onClick={()=>{setBad(bad + 1)}} text="bad"/>
    <h1>statistics</h1>
    <Statistics good={good} neutral={neutral} bad={bad}/>
   </>
  )
   
}

export default App