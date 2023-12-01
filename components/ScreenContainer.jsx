import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

import HomePage from './Pages/HomePage'
import ContactPage from './Pages/ContactPage'
import SettingPage from './Pages/SettingPage'


//Pages names
const homeName = "Home";
const contactName = "Contact";
const settingName = "Settings";

const Tab = createBottomTabNavigator();

function ScreenContainer() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName={homeName}
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            let rn = route.name;

            if (rn === homeName) {
              iconName = focused ? 'home' : 'home-outline';

            } else if (rn === contactName) {
              iconName = focused ? 'person-circle' : 'person-circle-outline';

            } else if (rn === settingName) {
              iconName = focused ? 'settings' : 'settings-outline';
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: '#CA1CAF',
          inactiveTintColor: 'grey',
          labelStyle: { paddingBottom: 10, fontSize: 10 },
          style: { padding: 10, height: 70}
        }}>

        <Tab.Screen name={homeName} component={HomePage} />
        <Tab.Screen name={contactName} component={ContactPage} />
        <Tab.Screen name={settingName} component={SettingPage} />

      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default ScreenContainer;