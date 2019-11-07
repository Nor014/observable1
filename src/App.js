import React from 'react';
import './App.css';
import Input from './Components/Input/Input';
import SkillsList from './Components/SkillsList/SkillsList'
import store from './store/store';
import './Components/SkillsList/SkillsList.css'
import { Provider } from 'react-redux';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Input />
        <SkillsList />
      </div>
    </Provider>

  );
}

export default App;
