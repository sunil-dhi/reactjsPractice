import './App.css';
import Usestatehook from './ReactHooks/UseStateHook'
import UseEffectHook from './ReactHooks/UseEffectHook'
import UseContextHook from './ReactHooks/usecontext/UseContextHook'
import UseRefHook from './ReactHooks/UseRefHook'
function App() {
  return (
    <div className="App">
      <Usestatehook />
      <UseEffectHook />
      <UseContextHook />
      <UseRefHook />
    </div>
  );
}

export default App;
