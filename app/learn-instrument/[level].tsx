import { useLocalSearchParams } from 'expo-router';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { COLORS } from '../../constants/colors';

const LearnInstrument = () => {
  const { level } = useLocalSearchParams<{ level: string }>();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Learning Level {level}</Text>
      <Text style={styles.content}>
        This is the learning screen for Level {level}. 
        {'\n'}Example: For Level 1, learn about tabla components (dayan, bayan).
      </Text>
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
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: COLORS.primary,
    marginBottom: 20,
  },
  content: {
    fontSize: 16,
    color: COLORS.text,
    textAlign: 'center',
  },
});

export default LearnInstrument;