
/* eslint-disable react/prop-types */
const Header = (props) =>{
   return (
    <div>
      <h1>{props.course}</h1>
    </div>
   )

}

const Part = (props) => {
    return (
      <p>
        {props.part} {props.exercises}
      </p>
    )
}

const Content = () =>{
const part1 = 'Fundamentals of React'
const exercises1 = 10
const part2 = 'Using props to pass data'
const exercises2 = 7
const part3 = 'State of a component'
const exercises3 = 14
  return(
    <div>
      <Part part={part1} exercises={exercises1} />
      <Part part={part2} exercises={exercises2} />
      <Part part={part3} exercises={exercises3} />
    </div>
  )

}


  const Total = (props) => {
    return (
      <div>
        <p>total={props.sumofexercises}</p>
      </div>
    );
  };

 
const App = () => {
const course = 'Half Stack application development'
const exercises1 = 10
const exercises2 = 7
const exercises3 = 14
const sumofexercises = exercises1 + exercises2 + exercises3


  return (
    <div>
      <h1><Header course={course}/></h1>
      <p>
       <Content />
      </p>
      <p><Total sumofexercises={sumofexercises}/></p>
    </div>
  )
}



export default App