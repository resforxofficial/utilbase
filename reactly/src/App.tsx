import './App.css';
import utilizeState from 'utilbase';

export default function App() {
  const store: { args: number, update: () => void } = {
    args: 0,
    update: () => {}
  }
  const { getState, setState } = utilizeState(store);

  return (
    <>

    </>
  )
}
