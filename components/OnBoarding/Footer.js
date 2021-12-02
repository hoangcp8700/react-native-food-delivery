import React from 'react'
import { Animated, StyleSheet, Text, View } from 'react-native'
import { COLORS, FONTS, menuAndScreen, SIZES } from '../../constants'
import { TextButton } from '../Customs'
import { useNavigation } from '@react-navigation/native'

const Footer = React.forwardRef((props, ref) => {
  const { scrollX, currentScreen } = props
  const navigation = useNavigation()
  const dotPosition = Animated.divide(scrollX, SIZES.width)

  const handleNext = () => {
    ref?.current?.scrollToIndex({
      index: currentScreen + 1,
      animated: true,
    })
  }

  return (
    <View
      style={{
        height: 160,
        alignContent: 'center',
        justifyContent: 'center',
      }}
    >
      {/* paginate / dots */}
      <View style={styles.dotContainer}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          {menuAndScreen.onboarding_screens.map((screen, index) => {
            const dotColor = dotPosition.interpolate({
              inputRange: [index - 1, index, index + 1],
              outputRange: [
                COLORS.lightOrange,
                COLORS.primary,
                COLORS.lightOrange,
              ],
              extrapolate: 'clamp',
            })

            const dotWidth = dotPosition.interpolate({
              inputRange: [index - 1, index, index + 1],
              outputRange: [10, 30, 10],
              extrapolate: 'clamp',
            })

            return (
              <Animated.View
                key={`dot-${index}`}
                style={{
                  borderRadius: 5,
                  marginHorizontal: 6,
                  width: dotWidth,
                  height: 10,
                  backgroundColor: dotColor,
                }}
              />
            )
          })}
        </View>
      </View>

      {/* button */}
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          paddingHorizontal: SIZES.padding,
          marginVertical: SIZES.padding,
        }}
      >
        {currentScreen < menuAndScreen.onboarding_screens.length - 1 && (
          <>
            <TextButton
              labelStyle={{
                color: COLORS.darkGray,
              }}
            >
              Skip
            </TextButton>

            <TextButton
              containerStyle={{
                backgroundColor: COLORS.primary,
                width: 200,
                height: 60,
                borderRadius: SIZES.radius,
              }}
              labelStyle={{
                color: COLORS.white,
                ...FONTS.h3,
              }}
              onPress={handleNext}
            >
              Next
            </TextButton>
          </>
        )}
        {currentScreen == menuAndScreen.onboarding_screens.length - 1 && (
          <TextButton
            containerStyle={{
              backgroundColor: COLORS.primary,
              width: '100%',
              height: 60,
              borderRadius: SIZES.radius,
            }}
            labelStyle={{
              color: COLORS.white,
              ...FONTS.h3,
            }}
            onPress={() => navigation.replace('SignIn')}
          >
            Let's Get Started
          </TextButton>
        )}
      </View>
    </View>
  )
})

export default Footer

const styles = StyleSheet.create({
  dotContainer: {
    flex: 1,
    justifyContent: 'center',
  },
})
