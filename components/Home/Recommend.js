import React from 'react'
import { StyleSheet, Text, View, FlatList } from 'react-native'
import Section from './Section'
import { CardHorizontal } from '../Card'
import { SIZES } from '../../constants'

const Recommend = ({ menuRecommend }) => {
  return (
    <Section title='Recommend' onPress={() => console.log('click')}>
      <FlatList
        horizontal
        data={menuRecommend}
        keyExtractor={item => `${item.id}`}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item, index }) => (
          <CardHorizontal
            item={item}
            containerStyle={{
              height: 180,
              width: SIZES.width * 0.85,
              marginLeft: index === 0 ? SIZES.padding : 18,
              marginRight: SIZES.padding,
              paddingRight: SIZES.radius,
              alignItems: 'center',
            }}
            imageStyle={{
              marginTop: 35,
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

export default Recommend

const styles = StyleSheet.create({})
