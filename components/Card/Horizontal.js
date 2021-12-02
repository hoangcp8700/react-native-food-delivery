import React from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import { COLORS, FONTS, icons, SIZES } from '../../constants'

const Horizontal = ({ item, containerStyle, imageStyle, onPress }) => {
  return (
    <TouchableOpacity
      style={[styles.container, containerStyle]}
      onPress={onPress}
    >
      <Image source={item.image} style={imageStyle} />

      <View style={{ flex: 1 }}>
        <Text style={{ ...FONTS.h3, fontSize: 17 }}>{item.name}</Text>
        <Text style={{ ...FONTS.body4, color: COLORS.darkGray2 }}>
          {item.description}
        </Text>
        <Text style={{ ...FONTS.h1, marginTop: SIZES.base }}>{item.price}</Text>
      </View>

      {/* categories */}
      <View style={styles.categories}>
        <Image source={icons.calories} style={styles.icon(30)} />
        <Text style={{ ...FONTS.body5, color: COLORS.darkGray2 }}>
          {item.calories} categories
        </Text>
      </View>
    </TouchableOpacity>
  )
}

export default Horizontal

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    borderRadius: SIZES.radius,
    backgroundColor: COLORS.lightGray2,
  },

  icon: size => ({
    width: size,
    height: size,
  }),
  categories: {
    flexDirection: 'row',
    position: 'absolute',
    top: 5,
    right: SIZES.radius,
  },
})
