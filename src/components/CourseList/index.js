import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

export default function CouseList() {

  const courses = useSelector(state => state.data,);
  const dispatch = useDispatch();

  const addCourse = () => {
    dispatch({ type: 'ADD_COURSES', title: 'GO' })
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