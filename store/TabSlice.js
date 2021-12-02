import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  selectedTab: 'Home',
}

const slice = createSlice({
  name: 'tab',
  initialState,
  reducers: {
    SELECTED_TAB: (state, action) => {
      state.selectedTab = action.payload
    },
  },
})

const { reducer, actions } = slice

export const { SELECTED_TAB } = actions

export default reducer

// export function getProducts() {
//   return async dispatch => {
//     dispatch(slice.actions.startLoading())
//     try {
//       const response = await axios.get('/api/products')
//       dispatch(slice.actions.getProductsSuccess(response.data.products))
//     } catch (error) {
//       dispatch(slice.actions.hasError(error))
//     }
//   }
// }
