import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'

import { COLORS, FONTS, SIZES, menuAndScreen, icons } from '../../constants'

import { Badge } from '../Customs'
import Section from './Section'

const Rating = props => {
  const { name, form, handleChangeForm } = props
  return (
    <Section title='Ratings' containerStyle={{ marginTop: 40 }}>
      <View style={styles.container}>
        {menuAndScreen.ratings.map((item, index) => (
          <Badge
            key={`rating-${index}`}
            containerStyle={{
              flex: 1,
              marginRight: SIZES.base,
              justifyContent: 'center',
              backgroundColor:
                form[name] === item.id ? COLORS.primary : COLORS.lightGray2,
            }}
            onPress={() => handleChangeForm(name, item.id)}
          >
            <Image
              source={icons.star}
              style={{
                ...styles.icon,
                tintColor: form[name] === item.id ? COLORS.white : COLORS.gray,
              }}
            />
            <Text
              style={{
                color: form[name] === item.id ? COLORS.white : COLORS.gray,
                ...FONTS.body3,
              }}
            >
              {item.label}
            </Text>
          </Badge>
        ))}
      </View>
    </Section>
  )
}

export default Rating

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: SIZES.radius,
  },
  icon: {
    width: 18,
    height: 18,
    marginRight: 5,
  },
})
