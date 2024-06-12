import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Image } from 'expo-image'
import { SIZES } from '@/constants/themes'
import * as Progress from 'react-native-progress';

const asos_store = require('../assets/images/Asos.svg')

type Props = {
    progress: number
}

const WebViewLoading = ({ progress }: Props) => {
  return (
    <View style = {styles.container} >
        <View style={styles.img_wrapper} >
            <Image contentFit="contain" source={asos_store} style={styles.item_image} />
        </View>
        <Progress.Bar progress={progress} width={90} color="#6366F1" unfilledColor='#fff' style={{ marginTop: 20 }} />
    </View>
  )
}

export default WebViewLoading

const styles = StyleSheet.create({
    container: {
        ...StyleSheet.absoluteFillObject,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#020617',
        zIndex: 500
    },
    item_image: {
        width: 56,
        height: 56,
        alignSelf: 'center'
    },
    img_wrapper: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        height: 90,
        width: 90,
        borderRadius: SIZES.xSmall
    },
})