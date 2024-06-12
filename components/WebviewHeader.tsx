import { StyleSheet } from 'react-native'
import React from 'react'
import { FONT, SIZES } from '@/constants/themes'
import { Text, View } from './Themed'
import Icon from './common/Icon'
import { useRouter } from 'expo-router'

type Props = {}

const WebviewHeader = (props: Props) => {
    const router = useRouter();
  return (
    <View style={styles.container} >
       <Icon iconType='ionicons' name='close-outline' onPress = {()=> router.back()} size={28} style={styles.close_icon} color={'#1E293B'} /> 
      <Text style = {styles.item_txt}  >Asos</Text>
    </View>
  )
}

export default WebviewHeader

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        backgroundColor: '#F1F5F9',
        position: 'relative',
        height: 45
    },
    item_txt: { fontFamily: FONT.medium, textAlign: 'center', alignSelf: 'center', fontSize: SIZES.small },
    close_icon: {
        position: 'absolute',
        left: 16
    }
})