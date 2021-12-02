import React from 'react'
import { View, StyleSheet, Text, Image, Animated } from 'react-native'
import { COLORS, FONTS, images, menuAndScreen, SIZES } from '../../constants'

import {
  HeaderBoard,
  DetailBoard,
  FooterBoard,
} from '../../components/OnBoarding'

const HeaderLogo = () => {
  return (
    <View style={styles.headerContainer}>
      <Image
        source={images.logo_02}
        resizeMode='contain'
        style={{ width: SIZES.width * 0.5, height: 100 }}
      />
    </View>
  )
}

const ScreenBoard = ({ item, index }) => {
  return (
    <View style={{ width: SIZES.width }}>
      <HeaderBoard item={item} index={index} />
      <DetailBoard item={item} index={index} />
    </View>
  )
}

const OnBoarding = () => {
  const scrollX = React.useRef(new Animated.Value(0)).current
  const flatListRef = React.useRef()
  const [currentScreen, setCurrentScreen] = React.useState(0)

  const onViewChangeRef = React.useRef(({ viewableItems }) => {
    setCurrentScreen(viewableItems[0].index)
  })

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: COLORS.white,
      }}
    >
      <HeaderLogo />

      <Animated.FlatList
        ref={flatListRef}
        horizontal
        pagingEnabled
        scrollEventThrottle={16}
        data={menuAndScreen.onboarding_screens}
        keyExtractor={item => `${item.id}`}
        snapToAlignment='center'
        showsHorizontalScrollIndicator={false}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollX } } }],
          { useNativeDriver: false }
        )}
        onViewableItemsChanged={onViewChangeRef.current}
        renderItem={({ item, index }) => (
          <ScreenBoard item={item} index={index} />
        )}
      />

      <FooterBoard
        scrollX={scrollX}
        ref={flatListRef}
        currentScreen={currentScreen}
      />
    </View>
  )
}
const styles = StyleSheet.create({
  headerContainer: {
    position: 'absolute',
    top: SIZES.height > 800 ? 50 : 25,
    left: 0,
    right: 0,
    alignItems: 'center',
    justifyContent: 'center',
  },
})

export default OnBoarding
