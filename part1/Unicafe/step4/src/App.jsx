/* eslint-disable react/prop-types */
import { useState } from 'react'
const Header = () => {
  return (
    <div>
      <h1>give feedback</h1>
    </div>
  )
}

const Content = () => {
  return (
    <div>
      <h2>statistics</h2>
    </div>
  )
}

const Statistics = (props) => {
  if(!(props.good || props.neutral || props.bad)) {
    return (
      <div>
        <p>No feedback given</p>
      </div>
    )
  }

  return(
    <div>
  <p>good {props.good}</p>
     <p>neutral {props.neutral}</p>
      <p>bad {props.bad}</p>
      <p>total {props.good + props.neutral + props.bad}</p>
     <p>average {props.good + props.neutral + props.bad / 3}</p>
     <p>positive { props.good / (props.good + props.neutral + props.bad)*100 }%</p>
     </div>
  );
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  // handle button clicks
  const handleGoodClick = () => {
    setGood(good + 1)
  }

  const handleNeutralClick = () => {
    setNeutral(neutral + 1)
  }
  const handleBadClick = () => {
    setBad(bad + 1)
    }
  return (
    <div>
     <h1><Header/></h1>
     <button onClick={handleGoodClick}>good</button>
     <button onClick={handleNeutralClick}>neutral</button>
     <button onClick={handleBadClick}>bad</button>
     <h2><Content/></h2>
     <Statistics good={good} neutral={neutral} bad={bad}  />
    </div>
  )
}

export default App