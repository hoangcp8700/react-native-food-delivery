import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { COLORS, FONTS, SIZES } from '../../constants'

const Detail = ({ item }) => {
  return (
    <View
      style={{
        flex: 1,
        marginTop: 30,
        paddingHorizontal: SIZES.padding,
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Text style={{ ...FONTS.h1, fontSize: 25 }}>{item.title}</Text>
      <Text
        style={{
          ...FONTS.body3,
          color: COLORS.darkGray,
          paddingHorizontal: SIZES.padding,
          textAlign: 'center',
          marginTop: SIZES.radius,
        }}
      >
        {item.description}
      </Text>
    </View>
  )
}

export default Detail

const styles = StyleSheet.create({})
