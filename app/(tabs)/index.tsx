import React, { useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import Card from '@/components/yoloUi/card';
import Pay from '@/components/yoloUi/pay';

export default function HomeScreen() {
  const [view, setView] = useState(1);

  return (
    <View style={styles.container}>
      {/* Status bar with light icons for dark background */}
      <StatusBar style="light" backgroundColor="#0D0D0D" />

      <Text style={styles.titleText}>select payment mode</Text>
      <Text style={styles.descriptionText}>
        choose your preferred payment method to make payment.
      </Text>

      {/* swipable buttons */}
      <View style={styles.paymentModeSelector}>
        <Pressable
          style={[
            styles.swipableButton,
            view === 0 ? styles.activeBtn : null,
          ]}
          onPress={() => setView(0)}
        >
          <Text
            style={[
              styles.swipableBtnText,
              view === 0 ? styles.activeBtnText : null,
            ]}
          >
            pay
          </Text>
        </Pressable>
        <Pressable
          style={[
            styles.swipableButton,
            view === 1 ? styles.activeBtn : null,
          ]}
          onPress={() => setView(1)}
        >
          <Text
            style={[
              styles.swipableBtnText,
              view === 1 ? styles.activeBtnText : null,
            ]}
          >
            card
          </Text>
        </Pressable>
      </View>

      {/* View switcher */}
      {view === 0 && <Pay />}
      {view === 1 && <Card />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#0D0D0D',
    flex: 1,
    paddingVertical: 25,
    paddingHorizontal: 20,
  },
  titleText: {
    color: '#FFFFFF',
    fontSize: 24,
    fontWeight: '600',
    marginTop: 50,
    fontFamily: 'Poppins',
  },
  descriptionText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '400',
    marginTop: 15,
    letterSpacing: -0.17,
    opacity: 0.5,
    fontFamily: 'Poppins',
  },
  paymentModeSelector: {
    marginVertical: 30,
    flexDirection: 'row',
    gap: 8,
    flexWrap: 'wrap',
  },
  swipableButton: {
    borderTopWidth: 1,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderColor: '#FFFFFF',
    borderRadius: 50,
    padding: 8,
    alignSelf: 'flex-start',
  },
  swipableBtnText: {
    color: '#FFFFFF',
    fontSize: 16,
    paddingHorizontal: 16,
    fontFamily: 'Poppins',
  },
  activeBtn: {
    borderColor: '#A90808',
  },
  activeBtnText: {
    color: '#A90808',
    fontFamily: 'Poppins',
  },
});
