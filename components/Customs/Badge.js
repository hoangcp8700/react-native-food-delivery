import React from 'react'
import { StyleSheet, TouchableOpacity } from 'react-native'
import { SIZES } from '../../constants'

const Badge = ({ onPress, children, containerStyle }) => {
  return (
    <TouchableOpacity
      style={[styles.container, containerStyle]}
      onPress={onPress}
    >
      {children}
    </TouchableOpacity>
  )
}

export default Badge

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 55,
    paddingHorizontal: SIZES.base,
    borderRadius: SIZES.base,
  },
})
