import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Card = () => {
  return (
    <View style={styles.cardContainer}>
      <Text style={styles.cardTitle}>your digital debit card</Text>

      {/* Card Section  */}
    </View>
  )
}

export default Card;

const styles = StyleSheet.create({
    cardContainer: {
        marginTop: 30,
    },
    cardTitle: {
        textTransform: 'uppercase',
        color: '#FFFFFF',
        opacity: 0.5,
        fontSize: 12,
    },
})