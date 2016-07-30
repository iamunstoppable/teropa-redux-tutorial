// src/action_creators.js   (redux)

// example
	// function vote(entry) {   
	//   return {type: 'VOTE', entry};
	// }
	// // export a named function will be called like this 
	// // import {vote} from '.....'

// return object 
export function setState(state) {
  return {
    type: 'SET_STATE',
    state
  };
}

export function vote(entry) {
  return {
    meta: {remote: true},
    type: 'VOTE',
    entry
  };
}

export function next() {
  return {
    meta: {remote: true},
    type: 'NEXT'
  };
}
