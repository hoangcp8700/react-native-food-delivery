import React from 'react'
import { FlatList, StyleSheet, Text, Image } from 'react-native'
import { COLORS, FONTS, SIZES } from '../../constants'

import { Badge } from '../Customs'

const FoodCategories = ({
  selectCategory,
  categories,
  handleChangeSelectCategory,
}) => {
  return (
    <FlatList
      horizontal
      showsHorizontalScrollIndicator={false}
      data={categories}
      keyExtractor={item => `${item.id}`}
      renderItem={({ item, index }) => (
        <Badge
          containerStyle={{
            marginTop: SIZES.padding,
            backgroundColor:
              selectCategory === item.id ? COLORS.primary : COLORS.lightGray2,
            marginLeft: index === 0 ? SIZES.padding : SIZES.radius,
            marginRight: index === categories.length - 1 ? SIZES.padding : 0,
          }}
          onPress={() => handleChangeSelectCategory(item.id)}
        >
          <Image source={item.icon} style={styles.icon} />
          <Text
            style={{
              marginRight: SIZES.base,
              color:
                selectCategory === item.id ? COLORS.white : COLORS.darkGray,
              ...FONTS.h3,
            }}
          >
            {item.name}
          </Text>
        </Badge>
      )}
    />
  )
}

export default FoodCategories

const styles = StyleSheet.create({
  icon: {
    width: 50,
    height: 50,
    marginTop: 5,
  },
})
