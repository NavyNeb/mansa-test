import { View, TouchableOpacity, ActivityIndicator, StyleSheet, ViewStyle, TextStyle } from 'react-native'
import React from 'react'
import { Text } from '../../Themed'
import { FONT, SIZES } from '@/constants/themes'

type Props = {
  title: string,
  onPress?: ()=>void,
  icon?: React.ReactNode,
  btnStyle?: ViewStyle,
  txtStyle?: TextStyle,
  disabled?: boolean,
  loading?: boolean
}

const Button = ({ title, onPress, icon, btnStyle, txtStyle, loading, disabled }: Props) => {
  return (
    <TouchableOpacity disabled={loading || disabled} activeOpacity={.7} onPress={onPress} style={[styles.btnContainer, btnStyle, { opacity: disabled ? .5 : 1 }]} >
      { icon && icon }
      <Text style={[styles.btnTxt, txtStyle]} >{title}</Text>
      {loading && <ActivityIndicator color={"#FFF" } size={"small"} />}
    </TouchableOpacity>
  )
}

export default Button;

const styles = StyleSheet.create({
  btnContainer:{
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      height: 55,
      borderColor: "transparent",
      borderWidth: 0,
      marginVertical: 8,
      backgroundColor: '#020617',
      borderRadius: 15,
  },

  btnTxt: {
      fontFamily: FONT.medium,
      textAlign: 'center',
      color: '#FFF',
      fontSize: SIZES.small,
  }
})
