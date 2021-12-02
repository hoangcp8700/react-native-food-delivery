import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { COLORS, dummyData, FONTS, icons, SIZES } from '../../constants'

const Delivery = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Delivery to</Text>

      <TouchableOpacity style={styles.section}>
        <Text style={{ ...FONTS.h3 }}>{dummyData.myProfile.address}</Text>
        <Image source={icons.down_arrow} style={styles.icon} />
      </TouchableOpacity>
    </View>
  )
}

export default Delivery

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: SIZES.padding,
    marginTop: SIZES.padding,
  },
  section: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: SIZES.base,
  },
  text: {
    ...FONTS.h3,
    color: COLORS.primary,
    textTransform: 'uppercase',
  },
  icon: {
    width: 20,
    height: 20,
    marginLeft: SIZES.base,
  },
})
