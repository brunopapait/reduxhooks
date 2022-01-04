import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

const technologies = ['REACT', 'REACT NATIVE', 'JAVA', 'RUBY', 'GO', 'NODE', 'C', 'C++', 'PASCAL', 'FORTAN', 'C#', 'PYTHON'];

export default function CouseList() {

  const courses = useSelector(state => state.data);
  const dispatch = useDispatch();

  const addCourse = () => {
    dispatch({ type: 'ADD_COURSES', technologie: getTechnologie() })
  }

  const getTechnologie = () => {
    return technologies[Math.floor(Math.random() * (technologies.length + 1))]
  }

  return (
    <>
      <ul>
        {courses.map(course =>
          <li key={crypto.randomUUID()}>{course}</li>
        )}
      </ul>
      <button onClick={addCourse} >Adiconar curso</button>
    </>
  );
}