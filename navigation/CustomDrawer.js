import React, { useState } from 'react'
import { StyleSheet, Text, Image, TouchableOpacity, View } from 'react-native'

import Animated from 'react-native-reanimated'

import {
  DrawerContentScrollView,
  createDrawerNavigator,
} from '@react-navigation/drawer'

import MainLayout from '../screens/MainLayout'
import {
  COLORS,
  SIZES,
  icons,
  dummyData,
  FONTS,
  menuAndScreen,
} from '../constants'
import { useRedux } from '../hooks'

const Drawer = createDrawerNavigator()

const CustomDrawerItem = ({ label, icon, isFocused, ...props }) => {
  return (
    <TouchableOpacity style={styles.drawerItem(isFocused)} {...props}>
      <Image
        source={icon}
        resizeMode='contain'
        style={[styles.icon(20), { tintColor: COLORS.white }]}
      />
      <Text
        style={{ ...FONTS.h3, color: COLORS.white, marginLeft: SIZES.radius }}
      >
        {label}
      </Text>
    </TouchableOpacity>
  )
}

const CustomDrawerContent = props => {
  const { navigation, selectedTab, handleSelectedTab } = props
  const user = dummyData.myProfile

  return (
    <DrawerContentScrollView
      scrollEnabled={true}
      contentContainerStyle={{ flex: 1 }}
    >
      <View
        style={{
          flex: 1,
          paddingHorizontal: SIZES.radius,
          justifyContent: 'space-between',
        }}
      >
        <View>
          {/* close */}
          <TouchableOpacity onPress={() => navigation.closeDrawer()}>
            <Image
              source={icons.cross}
              resizeMode='contain'
              style={[styles.icon(35), { tintColor: COLORS.white }]}
            />
          </TouchableOpacity>

          {/* profile */}
          <TouchableOpacity style={styles.profileContainer}>
            <Image
              source={user?.profileImage}
              style={[
                styles.icon(50),
                { backgroundColor: 'red', borderRadius: SIZES.radius },
              ]}
            />
            <View style={{ marginLeft: SIZES.base }}>
              <Text style={{ ...FONTS.h3, color: COLORS.white }}>
                {user?.name}
              </Text>
              <Text style={{ ...FONTS.body4, color: COLORS.white }}>
                View your profile
              </Text>
            </View>
          </TouchableOpacity>

          {/* item */}
          {menuAndScreen.drawer_screen.map(item => (
            <CustomDrawerItem
              key={item.label}
              label={item.label}
              icon={item.icon}
              selectedTab={selectedTab}
              onPress={() => {
                handleSelectedTab(item.label)
                navigation.navigate('MainLayout')
              }}
              isFocused={item.label === selectedTab}
            />
          ))}
          <View style={styles.divider} />

          {menuAndScreen.drawer_screen_other.map(item => (
            <CustomDrawerItem
              key={item.label}
              label={item.label}
              icon={item.icon}
              selectedTab={selectedTab}
              onPress={() => {
                handleSelectedTab(item.label)
                navigation.navigate('MainLayout')
              }}
              isFocused={item.label === selectedTab}
            />
          ))}
        </View>

        <View style={{ marginBottom: SIZES.padding }}>
          <CustomDrawerItem label='Logout' icon={icons.logout} />
        </View>
      </View>
    </DrawerContentScrollView>
  )
}

const CustomDrawer = () => {
  // animated
  const [progress, setProgress] = useState(new Animated.Value(0))

  const scale = Animated.interpolateNode(progress, {
    inputRange: [0, 1],
    outputRange: [1, 0.8],
  })
  const borderRadius = Animated.interpolateNode(progress, {
    inputRange: [0, 1],
    outputRange: [0, 26],
  })
  const animatedStyle = { borderRadius, transform: [{ scale }] }

  // redux
  const { dispatch, handleSelectedTab, selectedTab } = useRedux()

  return (
    <View style={styles.container}>
      <Drawer.Navigator
        drawerType='slide'
        overlayColor='transparent'
        drawerStyle={styles.drawerContainer}
        sceneContainerStyle={{ backgroundColor: 'transparent' }}
        initialRouteName='MainLayout'
        drawerContent={props => {
          setTimeout(() => setProgress(props.progress), 0)

          return (
            <CustomDrawerContent
              {...props}
              selectedTab={selectedTab}
              handleSelectedTab={handleSelectedTab}
            />
          )
        }}
      >
        <Drawer.Screen name='MainLayout'>
          {props => <MainLayout {...props} drawerAnimated={animatedStyle} />}
        </Drawer.Screen>
      </Drawer.Navigator>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.primary,
  },
  drawerContainer: {
    flex: 1,
    width: '65%',
    paddingRight: 20,
    backgroundColor: 'transparent',
  },
  drawerItem: isFocused => ({
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: SIZES.base,
    height: 40,
    paddingLeft: SIZES.radius,
    marginBottom: SIZES.base,
    backgroundColor: isFocused ? COLORS.transparentBlack1 : null,
  }),
  icon: size => ({
    width: size,
    height: size,
  }),
  profileContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: SIZES.radius,
  },
  divider: {
    height: 1,
    backgroundColor: COLORS.lightGray1,
    marginVertical: SIZES.radius,
    marginLeft: SIZES.radius,
  },
})
export default CustomDrawer
