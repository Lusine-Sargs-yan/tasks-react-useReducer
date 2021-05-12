import React, { useReducer } from 'react';

// function userReducer(state, action) {
//   console.log(action, 'action:::');

//   const {loggedIn} = action;
//   switch(action.type) {
//     case 'update_user_name': 
//       return {...state, name: 'Ann'};
//     case 'update_loggedIn': 
//       // return {...state, loggedIn: false};
//       return {...state, loggedIn};
//     default:
//       throw new Error('error');
//   }
// }


//payload case
//{type, payload} = action
// payload is nested object of action 

function userReducer(state, {type, payload}) {
  console.log(payload, 'payload:::');
  switch(type) {
    case 'update_user_name': 
      return {...state, ...payload};
      //return {...state, name: payload.name};
    case 'update_loggedIn': 
      return {...state, ...payload};
    case 'add_new_category':
      return {...state, ...payload};
    default:
      throw new Error('error');
  }
}

const initialState   = {
  name: 'Liz',
  loggedIn: true
};


//state is object, state = initialState;
// dispatch is function that returns action, action is object
export default function UserInfo() {
  const [state, dispatch] = useReducer(userReducer, initialState);

  console.log(state, 'state:::');


  return (
    <div>
      User name: <span onClick={() => dispatch({type: 'update_user_name', payload: {name: 'Marine'}})}>{state.name} </span>
      <br  />
      {state.loggedIn ? (<button onClick={() => dispatch({type: 'update_loggedIn', payload: {loggedIn: false}})}>Log out</button>) : 
      (<button onClick={() => dispatch({type: 'update_loggedIn', payload: {loggedIn: true}})}>Log in</button>)} 
      
      <button onClick={() => dispatch({type: 'add_new_category', payload: {category: [1, 2, 3, 7, 5, 8, 9]}})}>Add category</button>
    </div>
  )
}