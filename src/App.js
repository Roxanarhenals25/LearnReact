import logo from './logo.svg';
import './App.css';
import Greeting from './components/pure/greeting';
import GreetingF from './components/pure/greetingF';
import TaskListComponent from './components/container/task_list';
import TaskContactComponent from './components/container/taskContact';
// import Ejemplo from './hooks/ejemplo';
import Ejemplo2 from './hooks/Ejemplo2';
import MiComponenteConContexto from './hooks/Ejemplo3';
import GreetingStyled from './components/pure/greetingStyled';
import Clock from './ejercicios/ejemplo456';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      {/* <Greeting name={"Roxana"}></Greeting> */}
      {/* <GreetingF name="Roxana"></GreetingF> */}
      {/* <TaskListComponent></TaskListComponent> */}
      {/* <TaskContactComponent></TaskContactComponent> */}
      {/* <Ejemplo></Ejemplo> */}
      {/* <Ejemplo2></Ejemplo2> */}
      {/* <MiComponenteConContexto></MiComponenteConContexto> */}
      {/* <GreetingStyled name= "Roxana"> </GreetingStyled> */}
      <Clock></Clock>
      </header>
    </div>
  );
}
export default App;
