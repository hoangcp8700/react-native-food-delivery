import React from 'react'
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
} from 'react-native'

import { dummyData, SIZES, COLORS, FONTS } from '../../constants'

const MenuType = ({ selectType, handleChangeType }) => {
  return (
    <FlatList
      horizontal
      data={dummyData.menu}
      keyExtractor={item => `${item.id}`}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{
        marginBottom: 30,
        marginTop: 20,
      }}
      renderItem={({ item, index }) => (
        <TouchableOpacity
          style={{
            marginLeft: SIZES.padding,
            marginRight: item === dummyData.menu.lenth - 1 ? SIZES.padding : 0,
          }}
          onPress={() => handleChangeType(item.id)}
        >
          <Text
            style={{
              ...FONTS.h3,
              color: selectType === item.id ? COLORS.primary : COLORS.black,
            }}
          >
            {item.name}
          </Text>
        </TouchableOpacity>
      )}
    />
  )
}

export default MenuType

const styles = StyleSheet.create({})
