import { Link, Stack } from 'expo-router';
import { StyleSheet, View, Text, Pressable } from 'react-native';
import { StatusBar } from 'expo-status-bar';

export default function NotFoundScreen() {
  return (
    <>
      {/* Screen title and header customization */}
      <Stack.Screen
        options={{
          headerTitle: '404 - Not Found',
          headerBackTitle: 'Back',
          headerStyle: {
            backgroundColor: '#0D0D0D',
          },
          headerTintColor: '#bababaff',
        }}
      />
      <StatusBar style="light" />

      <View style={styles.container}>
        <Text style={styles.emoji}>😵</Text>
        <Text style={styles.title}>404 - Not Found</Text>
        <Text style={styles.description}>
          Looks like this screen doesn't exist or has been moved.
        </Text>

        <Link href="/" asChild>
          <Pressable style={styles.button}>
            <Text style={styles.buttonText}>Go to Home</Text>
          </Pressable>
        </Link>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0D0D0D',
    padding: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  emoji: {
    fontSize: 80,
    marginBottom: 20,
  },
  title: {
    color: '#FFFFFF',
    fontSize: 28,
    fontWeight: '700',
    textAlign: 'center',
    marginBottom: 10,
  },
  description: {
    color: '#AAAAAA',
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 30,
    lineHeight: 24,
    opacity: 0.7,
  },
  button: {
    backgroundColor: '#A90808',
    paddingVertical: 14,
    paddingHorizontal: 30,
    borderRadius: 50,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
    letterSpacing: 1,
  },
});
