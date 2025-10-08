import { Stack } from 'expo-router';

export default function RootLayout() {
  return (
    <Stack
      screenOptions={{
        headerShown: false, // Disable headers for all screens
      }}
    >
      <Stack.Screen name="(tabs)" />
      <Stack.Screen name="tune-instrument" />
      <Stack.Screen name="basics" />
      <Stack.Screen name="teentaal" />
      <Stack.Screen name="learn-instrument/[level]" /> 
    </Stack>
  );
}