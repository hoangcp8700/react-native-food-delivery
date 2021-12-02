import React from 'react'
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native'
import { COLORS, FONTS, icons, SIZES } from '../../constants'

const Search = ({ onPress }) => {
  return (
    <View style={styles.container}>
      <Image source={icons.search} style={styles.icon(20)} />
      <TextInput style={styles.input} placeholder='Search food...' />
      <TouchableOpacity onPress={onPress}>
        <Image source={icons.filter} style={styles.icon(20)} />
      </TouchableOpacity>
    </View>
  )
}

export default Search

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 40,
    marginHorizontal: SIZES.padding,
    marginVertical: SIZES.radius,
    paddingHorizontal: SIZES.radius,
    backgroundColor: COLORS.lightGray1,
    borderRadius: SIZES.radius,
  },
  icon: size => ({
    width: size,
    height: size,
    tintColor: COLORS.black,
  }),
  input: {
    marginLeft: SIZES.radius,
    ...FONTS.body3,
    flex: 1,
  },
})
