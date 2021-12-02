import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

import { COLORS, FONTS, SIZES, menuAndScreen } from '../../constants'

import { Badge } from '../Customs'
import Section from './Section'

const Tags = props => {
  const { name, form, handleChangeForm } = props
  return (
    <Section title='Tags' containerStyle={{ marginTop: 40 }}>
      <View style={styles.container}>
        {menuAndScreen.tags.map((item, index) => (
          <Badge
            key={`tags-${index}`}
            containerStyle={{
              margin: 5,
              paddingHorizontal: SIZES.padding,
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

export default Tags

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
    marginTop: SIZES.radius,
  },
})
