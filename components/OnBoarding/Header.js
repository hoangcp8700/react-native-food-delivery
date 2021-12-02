import React from 'react'
import { StyleSheet, View, ImageBackground, Image } from 'react-native'
import { SIZES } from '../../constants'

const Header = ({ item, index }) => {
  return (
    <View style={{ flex: 3 }}>
      <ImageBackground
        source={item.backgroundImage}
        style={{
          flex: 1,
          width: '100%',
          height: index !== 1 ? '100%' : '92%',
          alignItems: 'center',
          justifyContent: 'flex-end',
        }}
      >
        <Image
          source={item.bannerImage}
          resizeMode='contain'
          style={{
            width: SIZES.width * 0.8,
            height: SIZES.width * 0.8,
            marginBottom: -SIZES.padding,
          }}
        />
      </ImageBackground>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({})
