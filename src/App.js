// import logo from './logo.svg';
import './App.css';
import Greeting from './components/pure/greeting';
import GreetingF from './components/pure/greetingF';
import TaskListComponent from './components/container/task_list';
import TaskContactComponent from './components/container/taskContact';
import Ejemplo2 from './hooks/Ejemplo2';
import MiComponenteConContexto from './hooks/Ejemplo3';
import GreetingStyled from './components/pure/greetingStyled';
import Father from './components/container/father';
import { Formik } from 'formik';
import LoginFormik from './components/pure/forms/loginFormik';
import RegisterFormik from './components/pure/forms/registerFormik';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
      {/* <Greeting name={"Roxana"}></Greeting> */}
      {/* <GreetingF name="Roxana"></GreetingF> */}
      {/* <TaskListComponent></TaskListComponent> */}
      {/* <TaskContactComponent></TaskContactComponent> */}
      {/* <Ejemplo></Ejemplo> */}
      {/* <Ejemplo2></Ejemplo2> */}
      {/* <MiComponenteConContexto></MiComponenteConContexto> */}
      {/* <GreetingStyled name= "Roxana"> </GreetingStyled> */}
      {/* <Father></Father> */}
      {/* <LoginFormik></LoginFormik> */}
      {/* <RegisterFormik></RegisterFormik> */}
      </header>
    </div>
  );
}
export default App;
