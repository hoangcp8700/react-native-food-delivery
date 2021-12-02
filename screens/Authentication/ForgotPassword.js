import React from 'react'
import {
  View,
  StyleSheet,
  Button,
  Text,
  Image,
  TouchableOpacity,
} from 'react-native'

import * as yup from 'yup'
import { Formik } from 'formik'

import AuthLayout from '../AuthLayout'
import {
  FormInput,
  Switch,
  TextButton,
  TextField,
} from '../../components/Customs'
import { icons, COLORS, SIZES, FONTS } from '../../constants'

const initialize = {
  email: '',
}

let schema = yup.object().shape({
  email: yup
    .string()
    .email('Please enter valid email')
    .required('Email is required'),
})

const ForgotPassword = ({ navigation }) => {
  const [form, setForm] = React.useState(initialize)

  return (
    <AuthLayout
      title='Forgot Password'
      subTitle='Please enter your email address to recovery your password'
    >
      <View>
        <Formik
          initialValues={initialize}
          onSubmit={values => {
            console.log('forgot', values)
            navigation.goBack()
          }}
          validateOnMount={true}
          validationSchema={schema}
        >
          {({
            handleChange,
            handleBlur,
            handleSubmit,
            values,
            touched,
            isValid,
            errors,
          }) => (
            <View>
              <FormInput
                label='Email'
                keyboardType='email-address'
                autoComplete='email'
                values={values.email}
                onBlur={handleBlur('email')}
                onChangeText={handleChange('email')}
                endIcon={
                  touched.email && (
                    <View>
                      <Image
                        source={
                          touched.email && errors.email
                            ? icons.cross
                            : icons.correct
                        }
                        style={[
                          styles.icon(20),
                          {
                            tintColor:
                              touched.email && errors.email
                                ? COLORS.red
                                : COLORS.green,
                          },
                        ]}
                      />
                    </View>
                  )
                }
                errorMsg={touched.email && errors.email ? errors.email : ''}
              />

              <TextButton
                onPress={handleSubmit}
                disabled={!isValid}
                containerStyle={{
                  backgroundColor: isValid
                    ? COLORS.primary
                    : COLORS.transparentPrimary,
                  paddingVertical: SIZES.radius,
                  borderRadius: SIZES.radius,
                  marginTop: SIZES.padding,
                }}
                labelStyle={{ color: COLORS.white, ...FONTS.h3 }}
              >
                Send Email
              </TextButton>

              {/* dont have account */}
              <View
                style={{
                  marginTop: SIZES.base,
                  flexDirection: 'row',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <Text style={{ ...FONTS.body3 }}>Already have an account?</Text>
                <TextButton
                  labelStyle={{ ...FONTS.h3, color: COLORS.primary }}
                  // onPress={() => navigation.navigate('SignIn')}
                  onPress={() => navigation.navigate('Otp')}
                >
                  Sign In
                </TextButton>
              </View>
            </View>
          )}
        </Formik>
      </View>
    </AuthLayout>
  )
}
const styles = StyleSheet.create({
  icon: size => ({
    width: size,
    height: size,
  }),
})

export default ForgotPassword
