// import Timer from './components/Timer';
// import ToDo from './components/ToDo';
import './App.css'
import ToDoFunctional from './components/functional/ToDo';
import TimerFunctional from './components/functional/Timer';

function App() {

  return (
    <>
      <TimerFunctional locale="en-US"/>
      <ToDoFunctional/>
    </>
  )
}

export default App
