/* eslint-disable react/prop-types */
const Header = (props) =>{
  return (
   <div>
     <h1>{props.course}</h1>
   </div>
  )

}



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
        {props.part[0].name}  {props.part[0].exercises}
        </p>
        <p>
        {props.part[1].name}  {props.part[1].exercises}
        </p>
        <p>
        {props.part[2].name}  {props.part[2].exercises}
        </p>
      </div>
    )
  
  }

  
  const Total = (props) => {
    return (
      <div>
        <p>total={props.part[0].exercises+props.part[1].exercises+props.part[2].exercises}</p>
      </div>
    );
  };

const App = () => {
  const course = 'Half Stack application development'
  const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ]

  return (
    <div>
      <h1><Header course={course}/></h1>
      <Content
        part={parts}
      />
      <Total
        part={parts}
      />
      
    </div>
  )
}


export default App
