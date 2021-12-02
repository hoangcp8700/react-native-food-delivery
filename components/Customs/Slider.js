import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import MultiSlider from '@ptomasroos/react-native-multi-slider'
import { SIZES, COLORS, FONTS } from '../../constants'

const Slider = props => {
  const { min, max, onChange, values, postFix, preFix } = props
  return (
    <MultiSlider
      min={min}
      max={max}
      values={values}
      sliderLength={SIZES.width - SIZES.padding * 2 - 20}
      step={1}
      selectedStyle={{
        backgroundColor: COLORS.primary,
      }}
      trackStyle={{
        height: 10,
        borderRadius: 10,
        backgroundColor: COLORS.lightGray2,
      }}
      markerOffsetY={20}
      minMarkerOverlapDistance={50}
      customMarker={e => {
        return (
          <View style={styles.marketContainer}>
            <View style={[styles.market, styles.shadow]}></View>
            <Text>
              {preFix}
              {e.currentValue} {postFix}
            </Text>
            <Text> </Text>
          </View>
        )
      }}
      onValuesChange={onChange}
    />
  )
}

export default Slider

const styles = StyleSheet.create({
  shadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowRadius: 1,
    shadowOpacity: 0.1,
  },
  marketContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  market: {
    height: 30,
    width: 30,
    borderRadius: 15,
    borderWidth: 4,
    borderColor: COLORS.white,
    backgroundColor: COLORS.primary,
  },
  text: {
    color: COLORS.black,
    marginTop: 5,
    ...FONTS.body3,
  },
})
