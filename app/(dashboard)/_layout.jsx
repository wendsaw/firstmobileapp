






import { Tabs } from 'expo-router';
import React from 'react';
import { StyleSheet, useColorScheme} from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import {Ionicons} from '@expo/vector-icons'
import UserOnly from '../../components/auth/UserOnly';



const DashboardLayout = () => {

    const colorScheme=useColorScheme()
    const theme=Colors[colorScheme]?? Colors.light


    return (

      <UserOnly>

        <Tabs
        screenOptions={{headerShown:false, 
            tabBarStyle:{backgroundColor:theme.navBackground, 
                paddingTop:10, height:90},
            
            tabBarActiveTintColor:theme.iconColorFocused,
            tabBarInactiveTintColor:theme.iconColor
            }}
        
        >
            <Tabs.Screen name='profile' options={{title:'Profile', tabBarIcon: ({ focused }) => {
  return (
    <Ionicons
      size={24}
      name={focused ? 'person' : 'person-outline'}
      color={focused ? theme.iconColorFocused : theme.iconColor}
    />
  );
}}}/>
<Tabs.Screen name='books' options={{title:'Books', tabBarIcon: ({ focused }) => {

  return (
    <Ionicons
      size={24}
      name={focused ? 'book' : 'book-outline'}
      color={focused ? theme.iconColorFocused : theme.iconColor}
    />
  );
}}}/>
<Tabs.Screen name='create' options={{title:'Create', tabBarIcon: ({ focused }) => {
  return (
    <Ionicons
      size={24}
      name={focused ? 'create' : 'create-outline'}
      color={focused ? theme.iconColorFocused : theme.iconColor}
    />
  );
}}}/>
           
           
        </Tabs>

        </UserOnly>

        
    );
}

const styles = StyleSheet.create({})

export default DashboardLayout;
