import React from 'react';
import { ImageBackground, ScrollView, StyleSheet, Text, View } from 'react-native';
import Card from '../../components/Card';
import { COLORS } from '../../constants/colors';

const Home = () => {
  return (
    <ImageBackground
      source={require('../../assets/images/background.jpg')} // Path from app/(tabs)/ to root
      style={styles.background}
      resizeMode="cover"
    >
      <View style={styles.overlay}>
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
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(255, 255, 255, 0.5)', // Semi-transparent white for readability
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 20,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: COLORS.primary,
    marginTop: 20,
    marginBottom: 5,
    textShadowColor: 'rgba(0, 0, 0, 0.5)', // Shadow for better contrast
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  },
  cardContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
});

export default Home;