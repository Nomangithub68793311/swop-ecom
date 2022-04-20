import actionTypes from './actionTypes'

const productReducer = (state, action) => {
  switch (action.type) {
    case actionTypes.getProductRequest:
      return {
        ...state,
        error: null,
        loading: true,
      }
    case actionTypes.getProduceSuccessfull:
      return {
        ...state,
        products: action.payload,
        loading: false,
      }
    case actionTypes.getProductFail:
      return {
        ...state,
        error: true,
        loading: false,
      }
    default:
      return state
  }
}

export default productReducer
