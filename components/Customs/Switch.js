import React from 'react'
import { StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native'
import { COLORS, FONTS, SIZES } from '../../constants'

const Switch = ({ value, label, onChange }) => {
  return (
    <TouchableWithoutFeedback onPress={() => onChange(!value)}>
      <View style={{ flexDirection: 'row' }}>
        {/* switch */}
        <View
          style={[
            styles.switchContainer,
            value ? styles.switchOn : styles.switchOff,
          ]}
        >
          <View
            style={{
              ...styles.dot,
              backgroundColor: value ? COLORS.white : COLORS.gray,
            }}
          />
        </View>

        {/* label */}
        {label && (
          <Text
            style={{
              ...FONTS.body3,
              color: value ? COLORS.primary : COLORS.gray,
              marginLeft: SIZES.base,
            }}
          >
            {label}
          </Text>
        )}
      </View>
    </TouchableWithoutFeedback>
  )
}

export default Switch

const styles = StyleSheet.create({
  switchContainer: {
    width: 40,
    height: 20,
    justifyContent: 'center',
    borderRadius: 10,
  },
  switchOn: {
    paddingRight: 2,
    alignItems: 'flex-end',
    backgroundColor: COLORS.primary,
  },
  switchOff: {
    paddingLeft: 2,
    borderColor: COLORS.gray,
    borderWidth: 1,
  },
  dot: {
    width: 12,
    height: 12,
    borderRadius: 6,
  },
})
