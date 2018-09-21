export default function (state = null, action) {
  console.log('Action received, action')
  return state
}
// reducers are just fns
// firstg arg, state for which reducer responsible
// second is the action

// this a simple reducer that takes an action
// go to action creator and console.log the request that goes out
