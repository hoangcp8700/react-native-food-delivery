import React from 'react'
import {
  View,
  StyleSheet,
  Button,
  Text,
  Image,
  TouchableOpacity,
} from 'react-native'

import OTPInputView from '@twotalltotems/react-native-otp-input'

import AuthLayout from '../AuthLayout'
import {
  FormInput,
  Switch,
  TextButton,
  TextField,
} from '../../components/Customs'
import { icons, COLORS, SIZES, FONTS } from '../../constants'

const Otp = ({ navigation }) => {
  const [countDown, setCountDown] = React.useState(60)

  React.useEffect(() => {
    let interval = setInterval(() => {
      setCountDown(timeOld => {
        if (timeOld > 0) return timeOld - 1
        return timeOld
      })
    }, 1000)

    return () => clearInterval(interval)
  }, [])
  return (
    <AuthLayout
      title='OTP Authentication'
      subTitle='An authentication code has sent to email abc@gmail.com'
    >
      <View
        style={{
          flex: 1,
          marginTop: SIZES.padding,
          justifyContent: 'space-between',
        }}
      >
        <View>
          <OTPInputView
            style={{ width: '100%', height: 50 }}
            pinCount={4}
            autoFocusOnLoad
            codeInputFieldStyle={styles.input}
            onCodeFilled={code => {
              console.log(`Code is ${code}, you are good to go!`)
            }}
          />

          {/* count down */}
          <View
            style={{
              marginTop: SIZES.padding,
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Text style={{ ...FONTS.body3 }}>Didn't receive code</Text>
            <TextButton
              labelStyle={{ ...FONTS.h3, color: COLORS.primary }}
              onPress={() => setCountDown(60)}
            >
              Expires in {countDown} seconds
            </TextButton>
          </View>
        </View>

        <View>
          <TextButton
            containerStyle={{
              backgroundColor: COLORS.primary,
              paddingVertical: SIZES.radius,
              borderRadius: SIZES.radius,
              marginTop: SIZES.padding,
            }}
            labelStyle={{ color: COLORS.white, ...FONTS.h3 }}
            onPress={() => navigation.navigate('Home')}
          >
            Send
          </TextButton>
          <View
            style={{
              marginTop: SIZES.radius,
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Text style={{ ...FONTS.body3 }}>
              Be signing up, you agree to our
            </Text>
            <TextButton labelStyle={{ ...FONTS.body3, color: COLORS.primary }}>
              Term and Conditions
            </TextButton>
          </View>
        </View>
      </View>
    </AuthLayout>
  )
}
const styles = StyleSheet.create({
  icon: size => ({
    width: size,
    height: size,
  }),
  input: {
    width: 65,
    height: 65,
    borderRadius: SIZES.radius,
    backgroundColor: COLORS.lightGray2,
    color: COLORS.black,
    ...FONTS.h3,
  },
})

export default Otp
