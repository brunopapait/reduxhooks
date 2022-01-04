import React from 'react';
import { Provider } from 'react-redux';
import CouseList from './components/CourseList';

import store from './store';

function App() {
  return (
    <Provider store={store}>
      <CouseList />
    </Provider>
  );
}

export default App;
