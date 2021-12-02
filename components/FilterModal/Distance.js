import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Section from './Section'

import { Slider } from '../Customs'

const Distance = props => {
  const { name, handleChangeForm } = props
  return (
    <Section title='Distance'>
      <View style={{ alignItems: 'center' }}>
        <Slider
          values={[3, 10]}
          min={1}
          max={20}
          postFix='km'
          onChange={values => handleChangeForm(name, values)}
        />
      </View>
    </Section>
  )
}

export default Distance

const styles = StyleSheet.create({})
