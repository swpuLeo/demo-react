import { ADD } from '../actions/types'

const initState = {
  num: 0,
}

export default function(state = initState, action) {
  switch (action.type) {
    case ADD:
      const { num } = state
      state = {
        num: num + action.payload,
      }
      break
    default:
      break
  }
  return state
}
