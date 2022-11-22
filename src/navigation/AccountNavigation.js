import React from 'react'
import {createStackNavigator} from "@react-navigation/stack"
import AccountScreen from '../screens/Account';
const Stack = createStackNavigator();

const AccountNavigation = () => {
  return (
    <Stack.Navigator>
        <Stack.Screen name="Account" component={AccountScreen} options={{title:"MI CUENTA"}}></Stack.Screen>
    </Stack.Navigator>

    
  )
}

export default AccountNavigation