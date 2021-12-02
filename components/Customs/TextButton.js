import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native'
import { COLORS } from '../../constants'

const TextButton = ({
  startIcon,
  startIconStyle,
  endIcon,
  endIconStyle,

  labelStyle,
  onPress,
  containerStyle,
  children,
  ...props
}) => {
  return (
    <TouchableOpacity
      {...props}
      onPress={onPress}
      style={{ ...styles.container, ...containerStyle }}
    >
      {startIcon && (
        <Image source={startIcon} style={[styles.icon, startIconStyle]} />
      )}
      <Text style={labelStyle}>{children}</Text>
      {endIcon && (
        <Image source={endIcon} style={[styles.icon, endIconStyle]} />
      )}
    </TouchableOpacity>
  )
}

export default TextButton

const styles = StyleSheet.create({
  container: {
    padding: 4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    width: 20,
    height: 20,
    tintColor: COLORS.black,
  },
})
