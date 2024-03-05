/* eslint-disable */
import './App.css';
import utilizeState from '../../src/ts/index';

export default function App() {
  type mytype = { args: number, up: () => void };

  const store: mytype = {
    args: 0,
    up: () => {}
  }

  const { getState, setState } = utilizeState(store);
  setState(v => ({
    args: 0,
    up: () => {
      setState(prev => ({ ...prev, args: v.args + 1 }));
    },
  }));

  const handleClick = () => {
    getState().up();
  }

  return (
    <>
      <h1>hello world</h1>
      <h3>{ getState().args || 0 }</h3>
      <button onClick={handleClick}>click</button>
    </>
  )
}
