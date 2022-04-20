import { cartActionTypes } from './cartActionTypes'

const cartReducer = (state, action) => {
  switch (action.type) {
    case cartActionTypes.addItem:
      return {
        ...state,
        items: [...state.items, action.payload],
      }
    case cartActionTypes.removeItem:
      return {
        ...state,
        items: state.items.filter(item => item._id !== action.payload._id),
      }
    case cartActionTypes.incrementQty:
      return {
        ...state,
        items: state.items.map(item => {
          if (item._id === action.payload._id) {
            return {
              ...item,
              qty: item.qty + 1,
            }
          }
          return item
        }),
      }
    case cartActionTypes.decrementQty:
      return {
        ...state,
        items: state.items.map(item => {
          if (item._id === action.payload._id) {
            return {
              ...item,
              qty: item.qty - 1,
            }
          }
          return item
        }),
      }
    case cartActionTypes.checkrefRequest:
      return {
        ...state,
        referenceStatus: {
          ...state.referenceStatus,
          loading: true,
          attempt: ++state.referenceStatus.attempt,
        },
      }
    case cartActionTypes.checkRefSuccess:
      return {
        ...state,
        referenceStatus: {
          ...state.referenceStatus,
          status: true,
          loading: false,
        },
      }
    case cartActionTypes.checkRefFail:
      return {
        ...state,
        referenceStatus: {
          ...state.referenceStatus,
          status: false,
          loading: false,
        },
      }
    case cartActionTypes.clearRefAttempt:
      return {
        ...state,
        referenceStatus: {
          ...state.referenceStatus,
          attempt: 0,
        },
      }
    case cartActionTypes.resetCart:
      return {
        ...state,
        items: [],
      }
    default:
      return state
  }
}

export default cartReducer
