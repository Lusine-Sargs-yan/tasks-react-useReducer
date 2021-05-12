import { useReducer } from "react";


const initialState = {count: 0}; 

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return {count: state.count + 1};
    case 'decrement':
      return {count: state.count - 1};
    case 'reset':
      return {count: 0}    
    default:
      throw new Error("error");
  }
}

//initialState is object
//dispatch=== action is function
// state is object 

export default function Calculator() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      Result: {state.count}
      <br />
      <button onClick={() => dispatch({type: 'increment'})}>Increase</button>
      <button onClick={() => dispatch({type: 'decrement'})}>Decrease</button>
      <button onClick={() => dispatch({type: 'reset'})}>Reset</button>
      

    </>
  );
}