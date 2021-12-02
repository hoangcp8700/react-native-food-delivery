import React from 'react'
import { Text, View } from 'react-native'
import { FONTS, SIZES } from '../../constants'

const Section = ({ children, title, containerStyle }) => {
  return (
    <View style={{ marginTop: SIZES.padding, ...containerStyle }}>
      <Text style={{ ...FONTS.h3 }}>{title}</Text>
      {children}
    </View>
  )
}

export default Section
