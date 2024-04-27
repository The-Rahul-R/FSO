  const Header = ({course}) => {
    return (
      <h2>{course.name}</h2>
    )
  }
  
  const Part = ({part}) => {
    return(
      <p>
        {part.name} {part.exercises}
      </p>
    )
  }
  
  const Content =({parts}) =>{
    return(
      <>
        {parts.map(part => {
          return <Part key={part.id} part={part}/>
        })}
      </>
    )
  }
  
  const Total = ({parts}) => {
    const totalExercises = parts.reduce((initial,part) => {
      return initial + part.exercises
    },0)
    return(
      <p><b>Total of {totalExercises} exercises</b></p>
    ) 
  }

  const Course = ({course}) => {
    return (
    <div>
    <Header course={course}/>
    <Content parts={course.parts} />
    <Total parts={course.parts}/>
    </div>
    )
   }

   export default Course