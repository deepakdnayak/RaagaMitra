import { Stack } from 'expo-router';
import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import Card from '../../components/Card';
import { COLORS } from '../../constants/colors';


const Home = () => {
  return (
    <>
      <Stack.Screen options={{ headerShown: false }} /> 
      <View style={styles.container}>
        <Text style={styles.title}>Welcome to RaagaMitra</Text>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.cardContainer}
        >
          <Card title="Tune Instrument" iconName="music" href="/tune-instrument" />
          <Card title="Basics" iconName="book" href="/basics" />
          <Card title="Teentaal" iconName="drum" href="/teentaal" />
        </ScrollView>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.background,
    paddingVertical: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: COLORS.primary,
    marginBottom: 20,
  },
  cardContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
});

export default Home;