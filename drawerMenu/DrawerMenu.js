
import { StyleSheet, Text, View, Image} from 'react-native';


import {
    createDrawerNavigator,
    DrawerContentScrollView,
    DrawerItemList,
    DrawerItem
} from '@react-navigation/drawer'

import MyDrawer from './MyDrawer';

export default function DrawerMenu() {
  return (
    <MyDrawer/>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
