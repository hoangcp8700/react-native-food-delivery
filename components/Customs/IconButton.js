import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native'
import { COLORS, SIZES } from '../../constants'

const IconButton = ({ icon, onPress, containerStyle, iconStyle }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{ ...styles.container, ...containerStyle }}
    >
      <Image source={icon} style={[styles.icon, iconStyle]} />
    </TouchableOpacity>
  )
}

export default IconButton

const styles = StyleSheet.create({
  container: {
    padding: 4,
  },
  icon: {
    width: 24,
    height: 24,
    tintColor: COLORS.white,
  },
})
