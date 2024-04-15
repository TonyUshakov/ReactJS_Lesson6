import logo from './logo.svg';
import './App.css';
import { Provider } from "react-redux";
import store from './Components/store';
import TaskList from './Components/TaskList';

const App = () => {
  return (
    <Provider store={store}>
      <div className="App">
        <TaskList />
      </div>
    </Provider>
  );
}

export default App;
