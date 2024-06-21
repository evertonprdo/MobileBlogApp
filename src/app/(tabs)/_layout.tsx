import { Tabs } from "expo-router";
import FontAwesome from '@expo/vector-icons/FontAwesome';
import type { BottomTabNavigationOptions } from '@react-navigation/bottom-tabs';

import { styles } from "@/src/app/styles";

const screenOptions: BottomTabNavigationOptions = {
    headerShown: false,
    tabBarHideOnKeyboard: true,
    tabBarShowLabel: false,

    tabBarStyle: styles.tabBarStyle,
    tabBarLabelStyle: styles.tabBarLabelStyle,
    tabBarIconStyle: styles.tabBarIconStyle,
    tabBarBadgeStyle: styles.tabBarBadgeStyle,
    tabBarItemStyle: styles.tabBarItemStyle,

    tabBarActiveTintColor: "orange",
}

export default function TabLayout() {
    return (
        <Tabs screenOptions={ screenOptions }>
            <Tabs.Screen
                name="index"
                options={{ 
                    tabBarIcon: (props) => (
                        <FontAwesome 
                            name="home"
                            size= { 23 }
                            color= { props.color }
                        />
                    )
                 }}
            />
            <Tabs.Screen
                name="post/[id]"
                options={{ 
                    href: "post/1",
                    tabBarIcon: (props) => (
                        <FontAwesome 
                            name="weibo"
                            size= { 23 }
                            color= { props.color }
                        />
                    )
                }}
            />
        </Tabs>
    )
}