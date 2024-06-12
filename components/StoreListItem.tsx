import React from 'react'
import { StoreListType } from '@/types';
import { useRouter } from 'expo-router';
import Animated, { Easing, FadeInUp } from 'react-native-reanimated';
import { Image } from 'expo-image';
import { Text } from './Themed';
import { Pressable, StyleSheet } from 'react-native';
import { FONT, SIZES } from '@/constants/themes';

type Props = {
    item: StoreListType,
    index: number
}

const StoreListItem = ({ item, index }: Props) => {
    const { img, name, link } = item;
    const router = useRouter();

    const handleItemPress = () => {
        if(link){
            router.push({ pathname: "/webview", params: { url: link } });
        }
    }

    return(
        <Animated.View entering={FadeInUp.delay(index*200).damping(1000).mass(100).easing(Easing.linear)} style={styles.item_wrapper} >
            <Pressable onPress={handleItemPress}  style={[styles.item_pressable, { marginHorizontal: 10 }]} >
            <Image contentFit="contain" source={img} style={styles.item_image} />
            <Text numberOfLines={1} ellipsizeMode='tail' style={styles.item_txt} >{name}</Text>
        </Pressable>
        </Animated.View>
    )
}

export default StoreListItem

const styles = StyleSheet.create({
    item_wrapper: {
       flex: 1,
    },
    item_pressable: {
        borderWidth: 1,
        borderColor: "#E2E8F0",
        borderRadius: SIZES.medium,
        paddingVertical: 16,
        paddingHorizontal: 12
    },
    item_image: {
        width: 56,
        height: 56,
        alignSelf: 'center'
    },
    item_txt: { fontFamily: FONT.regular, textAlign: 'center', alignSelf: 'center', marginTop: 10 }
})