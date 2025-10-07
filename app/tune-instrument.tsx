import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { COLORS } from '../constants/colors';

const TuneInstrument = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Tune Instrument Screen (e.g., Tabla Tuning Guide)</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.background,
    paddingHorizontal: 20,
  },
  text: {
    fontSize: 16, // Adjusted for landscape
    color: COLORS.text,
    textAlign: 'center',
  },
});

export default TuneInstrument;