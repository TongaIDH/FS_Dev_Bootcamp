const Header = (props) => {
  return (
    <div>
      <p>
        The course name is: {props.course}
      </p>
    </div>
  )
}

const Content = (props) => {
  
  const classes = props.parts.map(e => 
    <Part key={props.parts.indexOf(e)} part={e.part} exercises={e.exercises}/>
  )

  return (
    <div>
      {classes}
    </div>
  )
}

const Part = (props) => {
  return (
    <p>
      The class name is: {props.part} and it contains {props.exercises} exercises
    </p>
  )
}

const Total = (props) => {
  const total = (
    props.total[0].exercises + props.total[1].exercises + props.total[2].exercises
  )
  
  return (
    <div>
        The total amount is: {total}
    </div>
  )
}

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      { part: 'Fundamentals of React', exercises: 10 },
      { part: 'Using props to pass data', exercises: 7 },
      { part: 'State of a component', exercises: 14 },
    ]
  }

  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total total={course.parts} />
    </div>
  )
}

export default App
