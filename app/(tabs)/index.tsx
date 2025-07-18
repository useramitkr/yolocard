import Card from '@/components/yoloUi/card';
import Pay from '@/components/yoloUi/pay';
import React, { useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';

export default function HomeScreen() {

  const [view, setView] = useState(1)

  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>select payment mode</Text>
      <Text style={styles.descriptionText}>choose your preferred payment method to make payment.</Text>

      {/* swipable buttons */}
      <View style={styles.paymentModeSelector}>
        <Pressable style={[styles.swipableButton, view === 0 ? styles.activeBtn : null]} onPress={() => setView(0)}>
          <Text style={[styles.swipableBtnText, view === 0 ? styles.activeBtnText: null]}>pay</Text>
        </Pressable>
        <Pressable style={[styles.swipableButton, view === 1 ? styles.activeBtn : null]} onPress={() => setView(1)}>
          <Text style={[styles.swipableBtnText, view === 1 ? styles.activeBtnText: null]}>card</Text>
        </Pressable>
      </View>

      {view === 0 && <Pay />}
      {view === 1 && <Card />}

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#0D0D0D',
    width: '100%',
    height: '100%',
    paddingVertical: 25,
    paddingHorizontal: 20,
  },
  titleText: {
    color: '#FFFFFF',
    fontSize: 24,
    fontWeight: 600,
    marginTop: 50,
  },
  descriptionText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: 400,
    marginTop: 15,
    letterSpacing: -0.17,
    opacity: 0.5,
  },
  paymentModeSelector: {
    marginVertical: 30,
    flexDirection: 'row',
    gap: 8,
    flexWrap: 'wrap'
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
  },
  activeBtn: {
    borderColor: '#A90808',
  },
  activeBtnText: {
    color: '#A90808',
  },
});
