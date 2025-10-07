import { Link } from 'expo-router';
import React from 'react';
import { Dimensions, StyleSheet, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { COLORS } from '../constants/colors';

const { width, height } = Dimensions.get('window');

type ValidRoutes = '/tune-instrument' | '/basics' | '/teentaal';

interface CardProps {
  title: string;
  iconName: string;
  href: ValidRoutes;
}

const Card: React.FC<CardProps> = ({ title, iconName, href }) => {
  return (
    <Link href={href} asChild>
      <TouchableOpacity style={styles.card} accessibilityLabel={title}>
        <Icon name={iconName} size={24} color={COLORS.accent} />
        <Text style={styles.cardText}>{title}</Text>
      </TouchableOpacity>
    </Link>
  );
};

const styles = StyleSheet.create({
  card: {
    width: width * 0.28, // 28% of screen width for three cards
    height: height * 0.5, // Reduced height for landscape
    backgroundColor: COLORS.cardBackground,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 10, // Space between cards
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  cardText: {
    fontSize: 16, 
    color: COLORS.text,
    fontWeight: 'bold',
    marginTop: 8,
    textAlign: 'center',
  },
});

export default Card;