import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { COLORS } from '../constants/colors';

const Basics = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Basics Screen (e.g., Tabla Structure and Positioning)</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.background,
  },
  text: {
    fontSize: 18,
    color: COLORS.text,
  },
});

export default Basics;