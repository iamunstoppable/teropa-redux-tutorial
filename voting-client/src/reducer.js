<<<<<<< HEAD
// import {Map} from 'immutable';

// export default function(state = Map(), action) {
//   return state;
// }

//////////////////////////////////////
=======
>>>>>>> f9c356b4cd5f1166c7aec47186d106caaf3e59f0
import {Map} from 'immutable';

function setState(state, newState) {
  return state.merge(newState);
}

export default function(state = Map(), action) {
  switch (action.type) {
  case 'SET_STATE':
    return setState(state, action.state);
  }
  return state;
}
