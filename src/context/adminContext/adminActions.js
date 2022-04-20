import actionTypes from './actuonTypes'
import axios from 'axios'

//
// auth action start
//

export const loginAdmin = (data, dispatch, cb) => {
  dispatch({
    type: actionTypes.loginRequest,
  })
  if (
    data.email === 'traviskaterherron@gmail.com' &&
    data.password === 'travis999herron'
  ) {
    dispatch({
      type: actionTypes.loginSuccessfull,
      payload: {
        name: 'Travis',
        email: 'traviskaterherron@gmail.com',
      },
    })
  } else {
    cb.error(`Login failed check email and password and try again`)
    dispatch({
      type: actionTypes.loginFail,
    })
  }
}

export const logout = dispatch => dispatch({ type: actionTypes.logout })

//
// auth action end
//

//
// product action start
//

export const fetchProduct = async dispatch => {
  dispatch({
    type: actionTypes.getProductRequest,
  })
  try {
    const { data } = await axios.get(
      'https://travherswopapp.herokuapp.com/site/product',
    )

    dispatch({
      type: actionTypes.getProductSuccessfull,
      payload: data,
    })
  } catch (error) {
    dispatch({
      type: actionTypes.getProductFail,
    })
  }
}

export const addProduct = async (productData, dispatch, cb, setLocalState) => {
  dispatch({
    type: actionTypes.addProductRequest,
  })
  try {
    const { data } = await axios.post(
      'https://travherswopapp.herokuapp.com/site/product',
      productData,
    )
    cb.success('Product added successfully')
    dispatch({
      type: actionTypes.addProductSuccessfull,
      payload: data.response,
    })
    setLocalState()
  } catch (error) {
    dispatch({
      type: actionTypes.addProductFail,
    })
  }
}

export const removeProduct = async (id, dispatch, cb) => {
  try {
    await axios.delete(
      `https://travherswopapp.herokuapp.com/site/product/${id}`,
    )
    cb.success('Product deleted successfully')
    dispatch({
      type: actionTypes.deleteProductSuccessfull,
      payload: id,
    })
  } catch (error) {
    dispatch({
      type: actionTypes.deleteProductFail,
    })
    cb('something wrong')
  }
}

export const updateProductById = async (id, formData, dispatch, cb, fn) => {
  try {
    const { data } = await axios.post(
      `https://travherswopapp.herokuapp.com/site/product/${id}`,
      formData,
    )
    fn(true)
    dispatch({
      type: actionTypes.editProductSuccessfull,
      payload: {
        response: data.updatedProduct,
        id,
      },
    })
  } catch (error) {
    cb.error('Something Went Wrong Try Again')
    dispatch({
      type: actionTypes.editProductFail,
    })
  }
}

//
// product action end
//

//
// support
//

export const getCustomerEmail = async dispatch => {
  dispatch({
    type: actionTypes.customerEmailRequest,
  })
  try {
    const { data } = await axios.get(
      'https://travherswopapp.herokuapp.com/site/contact',
    )
    dispatch({
      type: actionTypes.customerEmailSuccessfully,
      payload: data.user,
    })
  } catch (error) {
    dispatch({
      type: actionTypes.customerEmailFail,
    })
  }
}

//
// orders
//

export const getAllOrders = async dispatch => {
  dispatch({
    type: actionTypes.getAllOrderRequest,
  })
  try {
    const { data } = await axios.get(
      'https://travherswopapp.herokuapp.com/order/all',
    )
    dispatch({
      type: actionTypes.getAllOrderSuccessfully,
      payload: data.allOrder,
    })
  } catch (error) {
    dispatch({
      type: actionTypes.getAllOrderFail,
    })
  }
}

export const getNewOrders = async dispatch => {
  dispatch({
    type: actionTypes.getNewOrderRequest,
  })
  try {
    const { data } = await axios.get(
      'https://travherswopapp.herokuapp.com/order/new',
    )
    dispatch({
      type: actionTypes.getNewOrderSuccessfully,
      payload: data.newOrder,
    })
  } catch (error) {
    dispatch({
      type: actionTypes.getNewOrderFail,
    })
  }
}

export const handleDelivered = async (dispatch, id) => {
  try {
    const { data } = await axios.post(
      `https://travherswopapp.herokuapp.com/deliver/product/${id}`,
    )
    dispatch({
      type: actionTypes.orderDelivered,
      payload: {
        id,
        data: data.deliveredProduct,
      },
    })
  } catch (error) {
    console.log(error)
  }
}
