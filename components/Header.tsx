import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Image } from 'expo-image'

const ue_logo = require("../assets/images/stars.svg")
const user_logo = require("../assets/images/user.svg")
const logo = require("../assets/images/logo.svg")

type Props = {}

const Header = (props: Props) => {
  return (
    <View style = {styles.header_wrapper} >
      <Image alt='european union logo' contentFit='contain' style={styles.header_logo} source={ue_logo} />
      <Image alt='european union logo' contentFit='contain' style={[{ height: 55, width: 85 }]} source={logo} />
      <Image alt='european union logo' contentFit='contain' style={styles.header_logo} source={user_logo} />
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
    header_wrapper: {
        display: 'flex', 
        flexDirection: 'row',
        height: 50,
        paddingHorizontal: 16,
        paddingVertical: 10,
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    header_logo: {
        width: 30,
        height: 30
    }
})