import { Link } from 'expo-router';
import React from 'react';
import { Dimensions, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { COLORS } from '../constants/colors';

const { width } = Dimensions.get('window');

interface LevelCardProps {
  level: number;
}

const LevelCard: React.FC<LevelCardProps> = ({ level }) => {
  return (
    <Link href={`./learn-instrument/${level}`} asChild>
      <TouchableOpacity style={styles.card} accessibilityLabel={`Level ${level}`}>
        <Text style={styles.levelText}>{level}</Text>
      </TouchableOpacity>
    </Link>
  );
};

const styles = StyleSheet.create({
  card: {
    width: width * 0.19, // 19% to fit 5 cards with margins
    height: width * 0.19, // Square shape
    backgroundColor: COLORS.cardBackground, // Gold background like home screen
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    margin: width * 0.005, // ~0.5% margin
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  levelText: {
    fontSize: 18,
    color: COLORS.text, // Black text
    fontWeight: 'bold',
  },
});

export default LevelCard;