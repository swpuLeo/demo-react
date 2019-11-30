import { ADD, CLICK } from './types'

const actions = {
  add: payload => ({
    type: ADD,
    payload,
  }),
  click: payload => ({
    type: CLICK,
    payload,
  }),
}

export default actions
