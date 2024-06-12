import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { FONT, SIZES } from '@/constants/themes'
import Icon from './common/Icon'

type Props = {
    onReload: ()=>void
    onBack: ()=>void
    onForward: ()=>void
    onMore: ()=>void
}

const WebviewControls = ({ onReload, onBack, onForward, onMore }: Props) => {
    const [activeAction, setactiveAction] = React.useState<string>("");

    const handleReload = ()=> {
        setactiveAction("reload")
        onReload()
    }

    const handleBack = ()=> {
        setactiveAction("back")
        onBack()
    }

    const handleForward = ()=> {
        setactiveAction("forward")
        onForward()
    }   

    const handleMore = ()=> {
        setactiveAction("more")
        onMore()
    }

  return (
        <View style={styles.container} >
             <Pressable onPress = {handleReload} style={styles.btn_wrapper} >
            <Icon iconType='feather' size={28} color={ activeAction === 'reload' ? '#6366F1' : '#CBD5E1' } name='rotate-cw' />
                <Text style={[styles.item_txt, { color: activeAction === 'reload' ? '#6366F1' : '#CBD5E1' }]} >Reload</Text>
            </Pressable>
            <Pressable onPress = {handleBack} style={styles.btn_wrapper} >
                <Icon iconType='ionicons' color={ activeAction === 'back' ? '#6366F1' : '#CBD5E1' } size={28} name='arrow-back-outline' />
                <Text style={[styles.item_txt, { color: activeAction === 'back' ? '#6366F1' : '#CBD5E1' }]} >Back</Text>
            </Pressable>
           
            <Pressable onPress  = {handleForward} style={styles.btn_wrapper} >
                <Icon iconType='ionicons' color={ activeAction === 'forward' ? '#6366F1' : '#CBD5E1' } size={28} name='arrow-forward-outline' />
                <Text style={[styles.item_txt, { color: activeAction === 'forward' ? '#6366F1' : '#CBD5E1' }]} >Forward</Text>
            </Pressable>
            <Pressable onPress = {handleMore} style={styles.btn_wrapper} >
                <Icon iconType='ionicons' color={ activeAction === 'more' ? '#6366F1' : '#CBD5E1' } size={28} name='menu' />
                <Text style={[styles.item_txt, { color: activeAction === 'more' ? '#6366F1' : '#CBD5E1' }]} >More</Text>
            </Pressable>
        </View>
  )
}

export default WebviewControls

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        backgroundColor: '#F8FAFC',
        height: 78
    },
    btn_wrapper: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'transparent',
    },

    item_txt: { fontFamily: FONT.regular, textAlign: 'center', alignSelf: 'center', marginTop: 10, fontSize: SIZES.xSmall }
})