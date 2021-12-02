import { configureStore } from '@reduxjs/toolkit'
import tabReducer from './TabSlice'

const rootReducer = {
  tab: tabReducer,
}

export default configureStore({
  reducer: rootReducer,
})
