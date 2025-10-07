import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Card from '../../components/Card';
import { COLORS } from '../../constants/colors';

const Home = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to RaagaMitra</Text>
      <Card title="Tune Instrument" iconName="music" href="./tune-instrument" />
      <Card title="Basics" iconName="book" href="./basics" />
      <Card title="Teentaal" iconName="drum" href="./teentaal" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.background,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: COLORS.primary,
    marginBottom: 40,
  },
});

export default Home;