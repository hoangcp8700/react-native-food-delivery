import React from 'react'
import { StyleSheet, Text, View, TextInput } from 'react-native'
import { COLORS, SIZES } from '../../constants'

const TextField = props => {
  const { errorMsg, inputStyle, startIcon, endIcon, ...inputProps } = props
  return (
    <View style={[styles.inputContainer, errorMsg ? styles.error : '']}>
      {startIcon}

      <TextInput {...inputProps} style={[{ flex: 1 }, inputStyle]} />

      {endIcon}
    </View>
  )
}

export default TextField

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 55,
    paddingHorizontal: SIZES.padding,
    marginTop: SIZES.base,
    borderRadius: SIZES.radius,
    backgroundColor: COLORS.lightGray1,
  },
  error: {
    borderWidth: 2,
    borderColor: COLORS.red,
  },
})
