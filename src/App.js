import { CountdownAnimation } from './components/CountdownAnimation'
import {SetPomodoro} from './components/SetPomodoro'

export const App = () =>{
  return (
    <div className="container">
      <h1>Pomodoro</h1>
      <small>Be Productive the Right Way</small>
      <SetPomodoro />
      <CountdownAnimation />
    </div>
  );
}

