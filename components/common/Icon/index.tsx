import React from 'react'
import { View, Text } from 'react-native'
import AntDesign  from '@expo/vector-icons/AntDesign'
import  Entypo  from '@expo/vector-icons/Entypo'
import  FontAwesome  from '@expo/vector-icons/FontAwesome'
import  FontAwesome5  from '@expo/vector-icons/FontAwesome5'
import  Fontisto  from '@expo/vector-icons/Fontisto'
import  Foundation  from '@expo/vector-icons/Foundation'
import  MaterialCommunityIcons  from '@expo/vector-icons/MaterialCommunityIcons'
import  MaterialIcons  from '@expo/vector-icons/MaterialIcons'
import  EvilIcons  from '@expo/vector-icons/EvilIcons'
import  Feather  from '@expo/vector-icons/Feather'
import  Ionicons  from '@expo/vector-icons/Ionicons'
import  SimpleLineIcons  from '@expo/vector-icons/SimpleLineIcons'
import  Octicons  from '@expo/vector-icons/Octicons'
import  Zocial  from '@expo/vector-icons/Zocial'
import { GlyphMap, IconProps } from '@expo/vector-icons/build/createIconSet'

type Props = {
    iconType: "antdesign" | "entypo" | "fontawesome" | "fontawesome5" | "fontisto" | "foundation" | "materialcommunityicons" | "materialicons" | "evilicons" | "feather" | "ionicons" | "simplelineicons" | "octicons" | "zocial",
    [key: string]: any;
}

const Icon = ({iconType, ...props}: Props) => {

    const getIconType = (type: string)=>{
        switch (type) {
            case 'antdesign':
                return AntDesign;
            case 'entypo':
                return Entypo;
            case 'fontawesome':
                return FontAwesome;
            case 'fontawesome5':
                return FontAwesome5;
            case 'fontisto':
                return Fontisto;
            case 'foundation':
                return Foundation;
            case 'materialcommunityicons':
                return MaterialCommunityIcons;
            case 'materialicons':
                return MaterialIcons;
            case 'evilicons':
                return EvilIcons;
            case 'feather':
                return Feather;
            case 'ionicons':
                return Ionicons;
            case 'simplelineicons':
                return SimpleLineIcons;
            case 'octicons':
                return Octicons;
            case 'zocial':
                return Zocial;
            default:
                return null;
                
        }
    }

    const IconFont = getIconType(iconType)
    

    return (
        <IconFont {...props} />
    )
}

export default Icon