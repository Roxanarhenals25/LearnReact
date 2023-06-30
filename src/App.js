import logo from './logo.svg';
import './App.css';
import Greeting from './components/pure/greeting';
import GreetingF from './components/pure/greetingF';
import TaskListComponent from './components/container/task_list';
import TaskContactComponent from './components/container/taskContact';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      {/* <Greeting name={"Roxana"}></Greeting> */}
      {/* <GreetingF name="Roxana"></GreetingF> */}
      {/* <TaskListComponent></TaskListComponent> */}
      <TaskContactComponent></TaskContactComponent>
      </header>
    </div>
  );
}
export default App;
