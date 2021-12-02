import React, { useEffect } from 'react'
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableWithoutFeedback,
} from 'react-native'
import LinearGradient from 'react-native-linear-gradient'

import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated'

import { COLORS, FONTS, menuAndScreen, SIZES } from '../../constants'

const TabButton = props => {
  const { icon, label, isFocused, ...restProps } = props
  const tabFlex = useSharedValue(1)
  const tabColor = useSharedValue(COLORS.white)

  const flexStyle = useAnimatedStyle(() => {
    return { flex: tabFlex.value }
  })
  const colorStyle = useAnimatedStyle(() => {
    return { backgroundColor: tabColor.value }
  })

  useEffect(() => {
    if (!isFocused) return
    tabFlex.value = withTiming(4, { duration: 300 })
    tabColor.value = withTiming(COLORS.primary, {
      duration: 300,
    })
    return () => {
      tabFlex.value = withTiming(1, { duration: 300 })
      tabColor.value = withTiming(COLORS.white, {
        duration: 300,
      })
    }
  }, [isFocused])

  return (
    <TouchableWithoutFeedback {...restProps}>
      <Animated.View
        style={[
          { flex: 1, alignItems: 'center', justifyContent: 'center' },
          flexStyle,
        ]}
      >
        <Animated.View
          style={[
            {
              flexDirection: 'row',
              width: '80%',
              height: 50,
              borderRadius: SIZES.padding,
              justifyContent: 'center',
              alignItems: 'center',
            },
            colorStyle,
          ]}
        >
          <Image
            source={icon}
            style={[
              styles.icon(20),
              { tintColor: isFocused ? COLORS.white : COLORS.gray },
            ]}
          />
          {isFocused && (
            <Text
              numberOfLines={1}
              style={{
                ...FONTS.h3,
                marginLeft: SIZES.base,
                color: isFocused ? COLORS.white : COLORS.gray,
              }}
            >
              {label}
            </Text>
          )}
        </Animated.View>
      </Animated.View>
    </TouchableWithoutFeedback>
  )
}

const Footer = ({ selectedTab, handleSelectedTab }) => {
  return (
    <View style={styles.container}>
      <LinearGradient
        start={{ x: 0, y: 0 }}
        end={{ x: 0, y: 4 }}
        colors={[COLORS.transparent, COLORS.lightGray1]}
        style={styles.linearGradient}
      />

      <View style={styles.tabContainer}>
        {menuAndScreen.bottom_tabs.map(tab => (
          <TabButton
            key={tab.id}
            icon={tab.icon}
            label={tab.label}
            isFocused={selectedTab === tab.label}
            onPress={() => {
              handleSelectedTab(tab.label)
            }}
          />
        ))}
      </View>
    </View>
  )
}

export default Footer

const styles = StyleSheet.create({
  container: {
    justifyContent: 'flex-end',
    height: 100,
  },
  linearGradient: {
    position: 'absolute',
    top: -50,
    left: 0,
    right: 0,
    height: 50,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
  tabContainer: {
    flex: 1,
    flexDirection: 'row',
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    backgroundColor: COLORS.white,
    paddingHorizontal: SIZES.radius,
  },
  icon: size => ({
    width: size,
    height: size,
  }),
})
