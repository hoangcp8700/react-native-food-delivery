import { useSelector, useDispatch } from 'react-redux'

import { SELECTED_TAB } from '../store/TabSlice'

const useRedux = () => {
  const dispatch = useDispatch()

  // tab
  const selectedTab = useSelector(state => state.tab.selectedTab)

  // handle
  const handleSelectedTab = nameTab => dispatch(SELECTED_TAB(nameTab))

  return { dispatch, selectedTab, handleSelectedTab }
}

export default useRedux
