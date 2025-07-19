import { Tabs, useRouter } from 'expo-router';
import React from 'react';
import {
  Platform,
  View,
  StyleSheet,
  Image,
  Text,
  TouchableOpacity,
} from 'react-native';

import { HapticTab } from '@/components/HapticTab';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';

// @ts-ignore
const homeIcon = require('../../assets/images/Home-icons.png');
// @ts-ignore
const yoloPay = require('../../assets/images/yolo-pay.png');
// @ts-ignore
const ginie = require('../../assets/images/ginie.png');
// @ts-ignore
const footerLine = require('../../assets/images/footer-line.png');

export default function TabLayout() {
  const colorScheme = useColorScheme();
  const router = useRouter();

  // Debug check for image loading
  if (!footerLine) {
    console.error('Footer line image failed to load. Check the path: ../../assets/images/footer-line.png');
  }

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Tabs
          screenOptions={{
            headerShown: false,
            tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
            tabBarInactiveTintColor: '#999',
            tabBarShowLabel: false,
            tabBarButton: HapticTab,
            tabBarStyle: { display: 'none' },
          }}
        >
          <Tabs.Screen name="index" options={{ title: 'Home', tabBarIcon: () => null }} />
          <Tabs.Screen name="explore" options={{ title: 'Explore', tabBarIcon: () => null }} />
          <Tabs.Screen name="profile" options={{ title: 'Profile', tabBarIcon: () => null }} />
        </Tabs>
      </View>

      <View style={styles.footer}>
        <Image
          source={footerLine}
          style={styles.footerLine}
          onError={(error) => console.log('Image load error:', error.nativeEvent.error)}
        />
        {/* Left Button (Home) */}
        <View>
          <TouchableOpacity onPress={() => router.push('/index')} style={styles.footerButton}>
            <Image source={homeIcon} style={styles.iconSmall} />
          </TouchableOpacity>
          <Text style={styles.label}>home</Text>
        </View>

        {/* Middle Button (Explore - larger and lifted) */}
        <TouchableOpacity onPress={() => router.push('/')} style={styles.middleButton}>
          <View style={styles.middleIconWrapper}>
            <Image source={yoloPay} style={styles.iconLarge} />
          </View>
          <Text style={styles.label}>yolo pay</Text>
        </TouchableOpacity>

        {/* Right Button (Profile) */}
        <View>
          <TouchableOpacity onPress={() => router.push('/profile')} style={styles.footerButton}>
            <Image source={ginie} style={styles.iconSmall} />
          </TouchableOpacity>
          <Text style={styles.label}>ginie</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
  },
  footer: {
    position: 'absolute',
    bottom: 20,
    width: '100%',
    left: 1,
    right: 1,
    height: 120,
    borderTopLeftRadius: 280,
    borderTopRightRadius: 280,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'flex-end',
    shadowColor: '#000',
    shadowOpacity: 0.25,
    shadowRadius: 12,
    paddingVertical: 10,
    // Removed overflow: 'hidden' to ensure image is visible
  },
  footerLine: {
    position: 'absolute',
    top: 0,
    width: '100%',
    height: 20, // Increased height to ensure visibility, adjust based on image
    resizeMode: 'stretch', // Ensures the image stretches to fit width
  },
  footerButton: {
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: '#464646ff',
    borderTopWidth: 1,
    borderRightWidth: 1,
    borderLeftWidth: 1,
    borderRadius: 50,
    padding: 10,
  },
  middleButton: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: -30,
  },
  middleIconWrapper: {
    padding: 20,
    borderRadius: 50,
    borderTopWidth: 1,
    borderRightWidth: 1,
    borderLeftWidth: 1,
    borderColor: '#fff',
  },
  iconSmall: {
    width: 30,
    height: 30,
    tintColor: '#fff',
  },
  iconLarge: {
    width: 30,
    height: 30,
    tintColor: '#fff',
    backgroundColor: '#444',
  },
  label: {
    color: '#fff',
    fontSize: 12,
    marginTop: 4,
    textAlign: 'center',
  },
});