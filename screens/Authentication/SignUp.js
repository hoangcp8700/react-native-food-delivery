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
  userName: '',
  password: '',
  // passwordConfirm: '',
}

let schema = yup.object().shape({
  email: yup
    .string()
    .email('Please enter valid email')
    .required('Email is required'),
  userName: yup.string().required('UserName is required'),
  password: yup
    .string()
    .min(8, ({ min }) => `Password musty be at least ${min} character`)
    .required('Password is required'),
  // passwordConfirm: yup
  //   .string()
  //   .required('Password confirm is required')
  //   .when('password', {
  //     is: val => (val && val.length > 0 ? true : false),
  //     then: yup
  //       .string()
  //       .oneOf([yup.ref('password')], 'Both password need to be the same'),
  //   }),
})

const SignUp = ({ navigation }) => {
  const [form, setForm] = React.useState(initialize)

  const [isShowPassword, setIsShowPassword] = React.useState(false)
  const [isShowPasswordConfirm, setIsShowPasswordConfirm] =
    React.useState(false)

  return (
    <AuthLayout
      title='Getting Started'
      subTitle='Create an account to continue!'
    >
      <View>
        <Formik
          initialValues={initialize}
          onSubmit={values => {
            console.log('signup', values)
            navigation.navigate('Otp')
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
              <FormInput
                label='UserName'
                autoComplete='username'
                values={values.userName}
                onBlur={handleBlur('userName')}
                onChangeText={handleChange('userName')}
                containerStyle={{ marginTop: SIZES.base }}
                endIcon={
                  touched.userName && (
                    <View>
                      <Image
                        source={
                          touched.userName && errors.userName
                            ? icons.cross
                            : icons.correct
                        }
                        style={[
                          styles.icon(20),
                          {
                            tintColor:
                              touched.userName && errors.userName
                                ? COLORS.red
                                : COLORS.green,
                          },
                        ]}
                      />
                    </View>
                  )
                }
                errorMsg={
                  touched.userName && errors.userName ? errors.userName : ''
                }
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

              {/* <FormInput
                label='Password Confirm'
                secureTextEntry={!isShowPasswordConfirm}
                containerStyle={{ marginTop: SIZES.base }}
                values={values.passwordConfirm}
                onBlur={handleBlur('passwordConfirm')}
                onChangeText={handleChange('passwordConfirm')}
                endIcon={
                  <TouchableOpacity
                    onPress={() =>
                      setIsShowPasswordConfirm(!isShowPasswordConfirm)
                    }
                  >
                    <Image
                      source={
                        !isShowPasswordConfirm ? icons.eye_close : icons.eye
                      }
                      style={[styles.icon(20), { tintColor: COLORS.gray }]}
                    />
                  </TouchableOpacity>
                }
                errorMsg={
                  touched.passwordConfirm && errors.passwordConfirm
                    ? errors.passwordConfirm
                    : ''
                }
              /> */}
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
                Create Account
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

export default SignUp
