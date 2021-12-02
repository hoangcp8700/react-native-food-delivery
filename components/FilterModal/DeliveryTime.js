import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

import { COLORS, FONTS, SIZES, menuAndScreen } from '../../constants'

import { Badge } from '../Customs'
import Section from './Section'

const DeliveryTime = props => {
  const { name, form, handleChangeForm } = props
  return (
    <Section title='Delivery Time' containerStyle={{ marginTop: 40 }}>
      <View style={styles.container}>
        {menuAndScreen.delivery_time.map((item, index) => (
          <Badge
            key={`delivery-${index}`}
            containerStyle={{
              flex: 1,
              marginRight: SIZES.base,
              justifyContent: 'center',

              backgroundColor:
                form[name] === item.id ? COLORS.primary : COLORS.lightGray2,
            }}
            onPress={() => handleChangeForm(name, item.id)}
          >
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

export default DeliveryTime

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: SIZES.radius,
  },
})
