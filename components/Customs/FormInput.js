import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { COLORS, FONTS, SIZES } from '../../constants'
import TextField from './TextField'

const FormInput = props => {
  const { containerStyle, label, errorMsg, ...inputProps } = props
  return (
    <View style={containerStyle}>
      {/* label & error */}
      <View
        style={{
          flexDirection: 'row',
          alignContent: 'center',
          justifyContent: 'space-between',
        }}
      >
        <Text style={[styles.text, { color: COLORS.gray }]}>{label}</Text>
        <View
          style={{
            flex: 1,
            marginLeft: SIZES.padding,
            justifyContent: 'flex-end',
            alignItems: 'flex-end',
          }}
        >
          <Text numberOfLines={1} style={[styles.text, { color: COLORS.red }]}>
            {errorMsg}
          </Text>
        </View>
      </View>

      {/* input */}

      <TextField {...inputProps} errorMsg={errorMsg} />
    </View>
  )
}

export default FormInput

const styles = StyleSheet.create({
  text: {
    ...FONTS.body4,
  },
})
