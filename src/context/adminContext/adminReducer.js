import actionTypes from './actuonTypes'

const adminReducer = (state, action) => {
  switch (action.type) {
    //====================================//
    //== handle admin auth action start ==//
    //====================================//
    case actionTypes.loginRequest:
      return {
        ...state,
        userContainer: {
          ...state.userContainer,
          error: null,
          loading: true,
        },
      }

    case actionTypes.loginSuccessfull:
      return {
        ...state,
        userContainer: {
          ...state.userContainer,
          userInfo: action.payload,
          isLogin: true,
          loading: false,
        },
      }

    case actionTypes.loginFail:
      return {
        ...state,
        userContainer: {
          ...state.userContainer,
          userInfo: null,
          isLogin: false,
          loading: false,
          error: true,
        },
      }

    case actionTypes.logout:
      return {
        ...state,
        userContainer: {
          ...state.userContainer,
          userInfo: null,
          isLogin: false,
          loading: false,
          error: null,
        },
      }

    //==================================//
    //== handle admin auth action end ==//
    //==================================//

    //=================================//
    //== handle product action start ==//
    //=================================//

    case actionTypes.addProductRequest:
    case actionTypes.editProductRequest:
    case actionTypes.deleteProductRequest:
    case actionTypes.getProductRequest:
      return {
        ...state,
        productContainer: {
          ...state.productContainer,
          error: null,
          loading: true,
        },
      }
    case actionTypes.getProductSuccessfull:
      return {
        ...state,
        productContainer: {
          ...state.productContainer,
          products: [...action.payload.products],
          loading: false,
        },
      }

    case actionTypes.addProductSuccessfull:
      return {
        ...state,
        productContainer: {
          ...state.productContainer,
          products: [...state.productContainer.products, action.payload],
          loading: false,
        },
      }
    case actionTypes.deleteProductSuccessfull:
      return {
        ...state,
        productContainer: {
          ...state.productContainer,
          products: [
            ...state.productContainer.products.filter(
              item => item._id !== action.payload,
            ),
          ],
          loading: false,
        },
      }
    case actionTypes.editProductSuccessfull:
      return {
        ...state,
        productContainer: {
          ...state.productContainer,
          products: [
            ...state.productContainer.products.filter(
              item => item._id !== action.payload.id,
            ),
            action.payload.response,
          ],
          loading: false,
        },
      }

    case actionTypes.addProductFail:
    case actionTypes.deleteProductFail:
    case actionTypes.editProductFail:
    case actionTypes.getProductFail:
      return {
        ...state,
        productContainer: {
          ...state.productContainer,
          error: true,
        },
      }
    //=================================//
    //=== handle product action end ===//
    //=================================//

    //=================================//
    //=== handle news action start  ===//
    //=================================//

    //=================================//
    //=== handle news action end    ===//
    //=================================//

    //=================================//
    //== handle customer email start ==//
    //=================================//

    case actionTypes.customerEmailRequest:
      return {
        ...state,
        customerEmail: {
          ...state.customerEmail,
          error: null,
          loading: true,
        },
      }

    case actionTypes.customerEmailSuccessfully:
      return {
        ...state,
        customerEmail: {
          ...state.customerEmail,
          emails: [...action.payload],
          loading: false,
        },
      }

    case actionTypes.customerEmailFail:
      return {
        ...state,
        customerEmail: {
          ...state.customerEmail,
          loading: false,
          error: true,
        },
      }
    //=================================//
    //=== handle customer email end ===//
    //=================================//

    //=================================//
    //==  handle order action start  ==//
    //=================================//

    case actionTypes.getAllOrderRequest:
    case actionTypes.getNewOrderRequest:
      return {
        ...state,
        ordersContainer: {
          ...state.ordersContainer,
          error: null,
          loading: true,
        },
      }

    case actionTypes.getAllOrderSuccessfully:
      return {
        ...state,
        ordersContainer: {
          ...state.ordersContainer,
          allOrders: action.payload,
          loading: false,
        },
      }

    case actionTypes.getNewOrderSuccessfully:
      return {
        ...state,
        ordersContainer: {
          ...state.ordersContainer,
          newOrders: action.payload,
          loading: false,
        },
      }

    case actionTypes.getAllOrderFail:
    case actionTypes.getNewOrderFail:
      return {
        ...state,
        ordersContainer: {
          ...state.ordersContainer,
          error: true,
          loading: false,
        },
      }
    //=================================//
    //===  handle order action end  ===//
    //=================================//
    case actionTypes.orderDelivered:
      return {
        ...state,
        ordersContainer: {
          ...state.ordersContainer,
          allOrders: [action.payload.data, ...state.ordersContainer.allOrders],
          newOrders: state.ordersContainer.newOrders.filter(
            item => item._id !== action.payload.id,
          ),
        },
      }
    default:
      return state
  }
}

export default adminReducer
