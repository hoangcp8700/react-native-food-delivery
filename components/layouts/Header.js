import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { FONTS, SIZES } from '../../constants'

const Header = props => {
  const { title, leftComponent, rightComponent } = props
  return (
    <View style={styles.container}>
      {leftComponent}

      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text style={{ ...FONTS.h3 }}>{title}</Text>
      </View>

      {rightComponent}
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 50,
    paddingHorizontal: SIZES.padding,
  },
})
