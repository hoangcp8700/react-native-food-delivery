import React from 'react'
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  FlatList,
} from 'react-native'

import Animated from 'react-native-reanimated'

import { Header, Footer } from '../components/layouts'
import { icons, SIZES, COLORS, dummyData, menuAndScreen } from '../constants'
import { useRedux } from '../hooks'
import { Home, Search, CartTab, Favorite, Notification } from './index'

const LeftComponent = ({ navigation }) => {
  return (
    <TouchableOpacity
      onPress={() => navigation.openDrawer()}
      style={{
        width: 40,
        height: 40,
        borderRadius: SIZES.radius,
        borderWidth: 1,
        borderColor: COLORS.gray2,
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Image source={icons.menu} resizeMode='contain' />
    </TouchableOpacity>
  )
}

const RightComponent = () => {
  return (
    <TouchableOpacity style={{ borderRadius: SIZES.radius }}>
      <Image
        source={dummyData.myProfile.profileImage}
        style={{ ...styles.icon(40), borderRadius: SIZES.radius }}
      />
    </TouchableOpacity>
  )
}

const MainLayout = ({ navigation, drawerAnimated }) => {
  const { selectedTab, handleSelectedTab } = useRedux()
  const flatListRef = React.useRef()

  // React.useEffect(() => {
  //   flatListRef.current.scrollToIndex({ animated: false, index: 4 })
  // }, [selectedTab])

  return (
    <Animated.View
      style={{
        flex: 1,
        backgroundColor: '#fff',
        ...drawerAnimated,
      }}
    >
      {/* header */}
      <Header
        title={selectedTab.toUpperCase()}
        leftComponent={<LeftComponent navigation={navigation} />}
        rightComponent={<RightComponent navigation={navigation} />}
      />
      {/* content */}
      <View style={{ flex: 1 }}>
        {/* <FlatList
          horizontal
          getItemLayout={(data, index) => {
            return { length: 33, index, offset: 33 * index }
          }}
          ref={flatListRef}
          data={menuAndScreen.bottom_tabs}
          keyExtractor={item => `${item.id}`}
          renderItem={({ item, index }) => (
            <View style={{ width: SIZES.width, height: SIZES.height }}>
              {selectedTab === menuAndScreen.screens.home && <Home />}
              {selectedTab === menuAndScreen.screens.search && <Search />}
              {selectedTab === menuAndScreen.screens.cart && <CartTab />}
              {selectedTab === menuAndScreen.screens.favorite && <Favorite />}
              {selectedTab === menuAndScreen.screens.notification && (
                <Notification />
              )}
            </View>
          )}
        /> */}
        <View style={{ width: SIZES.width, height: SIZES.height }}>
          {selectedTab === menuAndScreen.screens.home && <Home />}
          {selectedTab === menuAndScreen.screens.search && <Search />}
          {selectedTab === menuAndScreen.screens.cart && <CartTab />}
          {selectedTab === menuAndScreen.screens.favorite && <Favorite />}
          {selectedTab === menuAndScreen.screens.notification && (
            <Notification />
          )}
        </View>
      </View>

      {/* footer */}
      <Footer selectedTab={selectedTab} handleSelectedTab={handleSelectedTab} />
    </Animated.View>
  )
}

export default MainLayout

const styles = StyleSheet.create({
  icon: size => ({
    width: size,
    height: size,
  }),
})
