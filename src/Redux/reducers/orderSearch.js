import moment from 'moment'
import {
  SET_ORDER_GLOBAL_SEARCH,
  CLEAN_ORDER_GLOBAL_SEARCH,
} from '../actions/orderSearch'

const dateFormat = 'DD/MM/YYYY'
const today = moment(new Date(), 'yyyy')
const initialState = {
  dates: [today, today],
  pendingReview: ['Sim', 'Não'],
  user_name: '',
}

const orderSearchReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ORDER_GLOBAL_SEARCH:
      return {
        ...state,
        ...action.payload,
      }
    case CLEAN_ORDER_GLOBAL_SEARCH:
      return initialState
    default:
      return state
  }
}

export default orderSearchReducer
