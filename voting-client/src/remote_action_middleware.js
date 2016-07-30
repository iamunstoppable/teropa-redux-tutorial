// src/remote_action_middleware.js
// export default store => next => action => {
export default socket => store => next => action => {
  if (action.meta && action.meta.remote) {
    socket.emit('action', action);
  }
  console.log('in middleware', action); // websocket will continue to update if not conditional
  return next(action);
}

// // The code above may look a bit foreign but it's really just a more concise way of expressing this:
// export default function(store) {
//   return function(next) {
//     return function(action) {

//     }
//   }
// }

