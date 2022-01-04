import { createStore } from 'redux';

const INITIAL_STATE = {
  data: []
}

const courses = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'ADD_COURSES':
      return { ...state, data: [...state.data, action.technologie] };
    default:
      return state;
  }
}

const store = createStore(courses);

export default store;