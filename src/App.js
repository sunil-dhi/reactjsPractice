import './App.css';
import Usestatehook from './ReactHooks/UseStateHook'
import UseEffectHook from './ReactHooks/UseEffectHook'
import UseContextHook from './ReactHooks/usecontext/UseContextHook'
import UseRefHook from './ReactHooks/UseRefHook'
import UseReducerHook from './ReactHooks/UseReducerHook';
function App() {
  return (
    <div className="App">
      <Usestatehook />
      <UseEffectHook />
      <UseContextHook />
      <UseRefHook />
      <UseReducerHook />
      
    </div>
  );
}

export default App;
