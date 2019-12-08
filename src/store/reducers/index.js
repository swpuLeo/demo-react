import { ADD, CLICK } from '../actions/types'

const initState = {
  num: 0,
  city: '北京',
  //isShow: false,
}

export default function(state = initState, action) {
  switch (action.type) {
    case ADD:
      const { num } = state
      state = {
        num: num + action.payload,
      }
      break
    case CLICK:
      /*const { isShow } = state
      state = {
        isShow: action.payload || isShow,
      }*/
      break
    default:
      break
  }
  return state
}
