import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Section from './Section'

import { Slider } from '../Customs'

const PriceRange = props => {
  const { name, handleChangeForm } = props
  return (
    <Section title='Price Range'>
      <View style={{ alignItems: 'center' }}>
        <Slider
          values={[10, 50]}
          min={1}
          max={100}
          preFix='$'
          onChange={values => handleChangeForm(name, values)}
        />
      </View>
    </Section>
  )
}

export default PriceRange

const styles = StyleSheet.create({})
