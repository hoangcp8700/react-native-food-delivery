import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { COLORS, FONTS, SIZES } from '../../constants'

const Section = ({ onPress, children, title }) => {
  return (
    <View style={styles.container}>
      <View style={styles.section}>
        <Text style={{ ...FONTS.h3, flex: 1 }}>{title}</Text>
        <TouchableOpacity onPress={onPress}>
          <Text style={{ ...FONTS.body4, color: COLORS.primary }}>
            Show all
          </Text>
        </TouchableOpacity>
      </View>

      {/* content */}
      {children}
    </View>
  )
}

export default Section

const styles = StyleSheet.create({
  section: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: SIZES.padding,
    marginTop: 30,
    marginBottom: 20,
  },
})
