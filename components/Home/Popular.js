import React from 'react'
import { StyleSheet, Text, View, FlatList } from 'react-native'
import Section from './Section'
import { CardVertical } from '../Card'
import { SIZES } from '../../constants'

const Popular = ({ menuPopular }) => {
  return (
    <Section title='Popular' onPress={() => console.log('click')}>
      <FlatList
        horizontal
        data={menuPopular}
        keyExtractor={item => `${item.id}`}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item, index }) => (
          <CardVertical
            item={item}
            containerStyle={{
              marginLeft: index === 0 ? SIZES.padding : 18,
              marginRight: SIZES.padding,
            }}
            imageStyle={{
              width: 150,
              height: 150,
            }}
            onPress={() => console.log('click recommend')}
          />
        )}
      />
    </Section>
  )
}

export default Popular

const styles = StyleSheet.create({})
