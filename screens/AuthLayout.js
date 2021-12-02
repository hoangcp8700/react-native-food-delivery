import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import { COLORS, SIZES, images, FONTS } from '../constants'

import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

const AuthLayout = ({ title, subTitle, containerStyle, children }) => {
  return (
    <View style={[styles.container, containerStyle]}>
      <KeyboardAwareScrollView
        keyboardDismissMode='on-drag'
        contentContainerStyle={{
          flex: 1,
          paddingHorizontal: SIZES.padding,
        }}
      >
        {/* icon */}
        <View style={{ alignItems: 'center' }}>
          <Image
            source={images.logo_02}
            style={styles.logo}
            resizeMode='contain'
          />
        </View>

        {/* title */}
        <View style={{ marginTop: SIZES.padding }}>
          <Text style={{ ...FONTS.h2, textAlign: 'center' }}>{title}</Text>
          <Text
            style={{
              ...FONTS.body3,
              textAlign: 'center',
              color: COLORS.darkGray,
              marginTop: SIZES.base,
            }}
          >
            {subTitle}
          </Text>
        </View>

        <View style={{ flex: 1, marginTop: SIZES.padding }}>{children}</View>
      </KeyboardAwareScrollView>
    </View>
  )
}

export default AuthLayout

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    paddingVertical: SIZES.padding,
  },
  logo: {
    width: SIZES.width * 0.5,
    height: 100,
  },
})
