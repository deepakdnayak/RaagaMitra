import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { COLORS } from '../constants/colors';

const Teentaal = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Teentaal Screen (e.g., 16-Beat Rhythm Lessons)</Text>
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
    fontSize: 16,
    color: COLORS.text,
    textAlign: 'center',
  },
});

export default Teentaal;