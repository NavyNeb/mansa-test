import React from 'react';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Link, Tabs } from 'expo-router';
import { Pressable } from 'react-native';

import Colors from '@/constants/Colors';
import { useColorScheme } from '@/components/useColorScheme';
import { FONT, SIZES } from '@/constants/themes';
import Icon from '@/components/common/Icon';

// You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>['name'];
  color: string;
}) {
  return <FontAwesome size={28} style={{ marginBottom: -3 }} {...props} />;
}

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: '#6366F1',
        tabBarInactiveTintColor: '#CBD5E1',
        headerShown: false,
        tabBarStyle: {
          height: 76,
          backgroundColor:'#F8FAFC',
          elevation: 0,
        },
        tabBarLabelStyle: {
          fontFamily: FONT.medium,
          fontSize: SIZES.small,
          marginBottom: 8
        }
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Stores',
          tabBarIcon: ({ color, size }) => <Icon iconType='materialcommunityicons' size={size} name="view-grid-plus-outline" color={color} />,
        }}
      />
      <Tabs.Screen
        name="shipping"
        options={{
          title: 'Shipping',
          tabBarIcon: ({ color, size }) => <Icon iconType='feather' name="package" color={color} size={size} />,
        }}
      />
       <Tabs.Screen
        name="transaction"
        options={{
          title: 'Transactions',
          tabBarIcon: ({ color, size }) => <Icon iconType='fontawesome6' name="clock-rotate-left" color={color} size={size} />,
        }}
      />
       <Tabs.Screen
        name="more"
        options={{
          title: 'More',
          tabBarIcon: ({ color, size }) => <Icon iconType='ionicons' name="menu" color={color} size={size} />,
        }}
      />
    </Tabs>
  );
}
