import React from 'react'
import {
  StyleSheet,
  Text,
  View,
  Modal,
  TouchableWithoutFeedback,
  Animated,
  Button,
  ScrollView,
} from 'react-native'

import { COLORS, FONTS, icons, SIZES } from '../../constants'

import { IconButton, TextButton } from '../../components/Customs'
import {
  Distance,
  DeliveryTime,
  Rating,
  PriceRange,
  Tags,
} from '../../components/FilterModal'

const initialize = {
  distance: [3, 10],
  deliveryTime: '',
  priceRange: [10, 50],
  rating: '',
  tags: '',
}
const FilterModal = ({ open, onClose }) => {
  const [form, setForm] = React.useState(initialize)

  const modalValue = React.useRef(new Animated.Value(0)).current

  const modalYStyle = modalValue.interpolate({
    inputRange: [0, 1],
    outputRange: [SIZES.height, SIZES.height - 680],
  })

  React.useEffect(() => {
    if (open) {
      return Animated.timing(modalValue, {
        toValue: 1,
        duration: 500,
        useNativeDriver: false,
      }).start()
    }
    Animated.timing(modalValue, {
      toValue: 0,
      duration: 500,
      useNativeDriver: false,
    }).start(() => onClose())
  }, [open])

  const handleChangeForm = (name, value) => {
    setForm({ ...form, [name]: value })
  }

  return (
    <Modal animationType='fade' transparent={true} visible={open}>
      <View style={styles.container}>
        {/* transparent backgroundColor */}
        <TouchableWithoutFeedback onPress={onClose}>
          <View
            style={{
              position: 'absolute',
              top: 0,
              right: 0,
              bottom: 0,
              left: 0,
            }}
          />
        </TouchableWithoutFeedback>

        {/* animation */}
        <Animated.View
          style={{
            position: 'absolute',
            left: 0,
            top: modalYStyle,
            width: '100%',
            height: '100%',
            padding: SIZES.padding,
            borderTopRightRadius: SIZES.padding,
            borderTopLeftRadius: SIZES.padding,
            backgroundColor: COLORS.white,
          }}
        >
          <View style={styles.header}>
            <Text style={{ ...FONTS.h3, fontSize: 18, flex: 1 }}>
              Filter Your Search
            </Text>
            <IconButton
              icon={icons.cross}
              containerStyle={{
                borderWidth: 2,
                borderRadius: SIZES.base,
                borderColor: COLORS.gray2,
              }}
              iconStyle={{
                tintColor: COLORS.gray2,
              }}
              onPress={() => onClose()}
            />
          </View>

          <ScrollView
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{
              paddingBottom: 150,
            }}
          >
            {/* Distance */}
            <Distance name='distance' handleChangeForm={handleChangeForm} />

            {/* DeliveryTime */}
            <DeliveryTime
              form={form}
              name='deliveryTime'
              handleChangeForm={handleChangeForm}
            />

            {/* PriceRange */}
            <PriceRange
              form={form}
              name='priceRange'
              handleChangeForm={handleChangeForm}
            />

            {/* Rating */}
            <Rating
              form={form}
              name='rating'
              handleChangeForm={handleChangeForm}
            />
            {/* Tags */}
            <Tags form={form} name='tags' handleChangeForm={handleChangeForm} />
          </ScrollView>

          {/* button sumit */}
          <View style={styles.submitContainer}>
            <TextButton
              labelStyle={{ ...FONTS.h3, color: COLORS.white }}
              containerStyle={styles.buttonSubmit}
              onPress={() => console.log('submit filter')}
            >
              Apply Filters
            </TextButton>
          </View>
        </Animated.View>
      </View>
    </Modal>
  )
}

export default FilterModal

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.transparentBlack7,
    position: 'relative',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  submitContainer: {
    position: 'absolute',
    bottom: 40,
    left: 0,
    right: 0,
    height: 110,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: SIZES.padding,
    paddingVertical: SIZES.radius,
    backgroundColor: COLORS.white,
  },
  buttonSubmit: {
    backgroundColor: COLORS.primary,
    borderRadius: SIZES.base,
    height: 50,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
