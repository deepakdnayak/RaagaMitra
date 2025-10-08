import React from 'react';
import { Dimensions, ImageBackground, StyleSheet, Text, View } from 'react-native';
import LevelCard from '../components/LevelCard';
import { COLORS } from '../constants/colors';

const { width } = Dimensions.get('window');

const levels = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const Basics = () => {
  return (
    <ImageBackground
      source={require('../assets/images/background.jpg')} // Path from app/(tabs)/ to root
      style={styles.background}
      resizeMode="cover"
    >
      <View style={styles.container}>
        <Text style={styles.title}>Basics Levels</Text>
        <View style={styles.levelsContainer}>
          {levels.map((level) => (
            <View key={level} style={styles.cardWrapper}>
              <LevelCard level={level} />
            </View>
          ))}
        </View>
      </View>
    </ImageBackground>
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
  levelsContainer: {
    width: '95%',
    // borderWidth: 1,
    // borderColor: COLORS.primary,
    borderRadius: 10,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    paddingVertical: 10,
  },
  cardWrapper: {
    width: '15%', // 5 cards per row (with spacing)
    margin: '1%',
    alignItems: 'center',
  },
  background: {
    flex: 1,
  }
});

export default Basics;
