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
  password: '',
  saveMe: false,
}

let schema = yup.object().shape({
  email: yup
    .string()
    .email('Please enter valid email')
    .required('Email is required'),
  password: yup
    .string()
    .min(8, ({ min }) => `Password musty be at least ${min} character`)
    .required('Password is required'),
})

const SignIn = ({ navigation }) => {
  const [form, setForm] = React.useState(initialize)

  const [isShowPassword, setIsShowPassword] = React.useState(false)
  return (
    <AuthLayout title='Sign In' subTitle="'Welcome back, you've been missed">
      <View
        style={{
          justifyContent: 'space-between',
        }}
      >
        <Formik
          initialValues={initialize}
          onSubmit={values => {
            console.log('form', values)
            navigation.navigate('Home')
          }}
          validateOnMount={true}
          validationSchema={schema}
        >
          {({
            handleChange,
            handleBlur,
            handleSubmit,
            setFieldValue,
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
              <FormInput
                label='Password'
                autoComplete='password'
                secureTextEntry={!isShowPassword}
                containerStyle={{ marginTop: SIZES.base }}
                values={values.password}
                onBlur={handleBlur('password')}
                onChangeText={handleChange('password')}
                endIcon={
                  <TouchableOpacity
                    onPress={() => setIsShowPassword(!isShowPassword)}
                  >
                    <Image
                      source={!isShowPassword ? icons.eye_close : icons.eye}
                      style={[styles.icon(20), { tintColor: COLORS.gray }]}
                    />
                  </TouchableOpacity>
                }
                errorMsg={
                  touched.password && errors.password ? errors.password : ''
                }
              />
              {/* save me & forgot password */}
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  marginTop: SIZES.base,
                }}
              >
                <Switch
                  value={values.saveMe}
                  onChange={value => setFieldValue('saveMe', value)}
                  label='Save me'
                />
                <TextButton
                  labelStyle={{ ...FONTS.body4, color: COLORS.gray }}
                  onPress={() => navigation.navigate('ForgotPassword')}
                >
                  Forgot Password?
                </TextButton>
              </View>
              {/* submit */}
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
                Submit
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
                <Text style={{ ...FONTS.body3 }}>Don't have an account?</Text>
                <TextButton
                  labelStyle={{ ...FONTS.h3, color: COLORS.primary }}
                  onPress={() => navigation.navigate('SignUp')}
                >
                  Sign Up
                </TextButton>
              </View>
            </View>
          )}
        </Formik>

        <View style={{ marginTop: SIZES.padding }}>
          <TextButton
            startIcon={icons.fb}
            containerStyle={{
              flexDirection: 'row',
              backgroundColor: COLORS.blue,
              paddingVertical: SIZES.radius,
              borderRadius: SIZES.radius,
            }}
            labelStyle={{
              marginLeft: SIZES.radius,
              color: COLORS.white,
              ...FONTS.body3,
            }}
            startIconStyle={{ tintColor: COLORS.white }}
          >
            Continue with Facebook
          </TextButton>

          <TextButton
            startIcon={icons.google}
            containerStyle={{
              flexDirection: 'row',
              backgroundColor: COLORS.lightGray1,
              paddingVertical: SIZES.radius,
              marginTop: SIZES.radius,
              borderRadius: SIZES.radius,
            }}
            labelStyle={{
              marginLeft: SIZES.radius,
              color: COLORS.black,
              ...FONTS.body3,
            }}
            startIconStyle={{ tintColor: COLORS.primary }}
          >
            Continue with Google
          </TextButton>
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
})

export default SignIn
