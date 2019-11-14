import { ADD } from './types'

const actions = {
  add: payload => ({
    type: ADD,
    payload,
  }),
}

export default actions
