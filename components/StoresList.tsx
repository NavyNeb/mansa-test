import { FlatList, StyleSheet } from 'react-native'
import React from 'react'
import { Text, View } from './Themed'
import { STORE_LIST } from '@/constants/data'
import StoreListItem from './StoreListItem'
import { FONT, SIZES } from '@/constants/themes'

type Props = {}


const StoresList = (props: Props) => {
  
    const [data, setData] = React.useState<string[]>([])
  return (
    <View style={{ flex: 1, paddingHorizontal: 16 }} >
        <View style={styles.title_section} >
            <Text style={styles.title} >My Stores</Text>
            <View style = {styles.store_btn} >
                <Text style = {[styles.title, { fontSize: SIZES.small }]} >All Stores</Text>
            </View>
        </View>
        <FlatList 
            horizontal={false}
            numColumns={3}
            data={STORE_LIST}
            keyExtractor={(item) => item.name}
            showsVerticalScrollIndicator={false}
            style={styles.flatlist}
            contentContainerStyle={styles.flatlist_content}
            renderItem={({ item, index }) => <StoreListItem item={item} index={index} />}   
        />
    </View>
  )
}

export default StoresList

const styles = StyleSheet.create({
    flatlist_content: {
        paddingTop: 20,
        
        rowGap: 16,
        paddingHorizontal: 16,
        paddingBottom: 90,
    },
    flatlist: {
        backgroundColor: '#fff',
        borderRadius: SIZES.medium,
        overflow: 'hidden'
    },
    title_section: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginVertical: 14
    },

    title: {
        fontFamily: FONT.medium,
        fontSize: SIZES.large,
    },

    store_btn:{
        paddingVertical: 5,
        paddingHorizontal: 10,
        backgroundColor: '#fff',
        borderRadius: 6,

    }
})