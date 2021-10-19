import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import Description from './screens/DescriptionView/Description';
import Product from './screens/ProductView/Product';

export default function App() {
  return (
    <View style={styles.container}>
      <Description />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
