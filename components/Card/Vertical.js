import React from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import { COLORS, FONTS, icons, SIZES } from '../../constants'

const Vertical = ({ item, containerStyle, imageStyle, onPress }) => {
  return (
    <TouchableOpacity
      style={[styles.container, containerStyle]}
      onPress={onPress}
    >
      {/* header */}
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <View style={styles.categories}>
          <Image source={icons.calories} style={styles.icon(30)} />
          <Text style={{ ...FONTS.body5, color: COLORS.darkGray2 }}>
            {item.calories} categories
          </Text>
        </View>
        <Image
          source={icons.love}
          style={{
            ...styles.icon(20),
            tintColor: item.isFavorite ? COLORS.primary : COLORS.gray,
          }}
        />
      </View>

      {/* image */}
      <View style={imageStyle}>
        <Image source={item.image} style={{ width: '100%', height: '100%' }} />
      </View>

      {/* info */}
      <View style={{ marginTop: -20, alignItems: 'center' }}>
        <Text style={{ ...FONTS.h3, fontSize: 17 }}>{item.name}</Text>
        <Text style={{ ...FONTS.body5, color: COLORS.darkGray2 }}>
          {item.description}
        </Text>
        <Text style={{ ...FONTS.h2, marginTop: SIZES.base }}>{item.price}</Text>
      </View>
    </TouchableOpacity>
  )
}

export default Vertical

const styles = StyleSheet.create({
  container: {
    width: 230,
    padding: SIZES.padding,
    alignItems: 'center',
    borderRadius: SIZES.radius,
    backgroundColor: COLORS.lightGray2,
  },

  icon: size => ({
    width: size,
    height: size,
  }),
  categories: {
    flex: 1,
    flexDirection: 'row',
  },
})
