/* eslint-disable react/prop-types */
const Header = (props) =>{
  return (
   <div>
     <h1>{props.course}</h1>
   </div>
  )

}

// const Part = (props) => {
//    return (
//     <div>

//     <h1><Header course={course}/></h1>
//     <p>
//      <Content />
//     </p>
//      </div>
//    )
// }
const Content = (props) =>{
  // const part1 = 'Fundamentals of React'
  // const exercises1 = 10
  // const part2 = 'Using props to pass data'
  // const exercises2 = 7
  // const part3 = 'State of a component'
  // const exercises3 = 14
    return(
      <div>
        {/* <Part part={part1} exercises={exercises1} />
        <Part part={part2} exercises={exercises2} />
        <Part part={part3} exercises={exercises3} /> */}
        <p>
        {props.part}  {props.exercises}
        </p>
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
  

const App = () =>{
  const course = 'Half Stack application development'
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }
  
  const sumofexercises = part1.exercises + part2.exercises + part3.exercises

  return (
    <>
       <div>
       <h1><Header course={course}/></h1>
      <p>
       <Content part={part1.name} exercise={part1.exercises}/>
       <Content part={part2.name} exercise={part2.exercises}/>
       <Content part={part3.name} exercise={part3.exercises}/>
      </p>
      <p><Total sumofexercises={sumofexercises}/></p>
       </div>
    </>
  )
}

export default App
