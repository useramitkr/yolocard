import React, { useState, useEffect } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Pressable,
    Animated,
    Clipboard,
    Alert,
} from 'react-native';
import { faker } from '@faker-js/faker';
import { Image } from 'expo-image';
// @ts-ignore
const eyeIcon = require('../../assets/images/eye.png');
const iceCloudEffect = require('../../assets/images/ice.png');
const snowIcon = require('../../assets/images/snow.png');
const snowRedIcon = require('../../assets/images/snow-red.png');

const Card: React.FC = () => {
    const [isFrozen, setIsFrozen] = useState<boolean>(false);
    const [showCVV, setShowCVV] = useState<boolean>(false);
    const fadeAnim = useState(new Animated.Value(1))[0];
    const iceAnim = useState(new Animated.Value(0.1))[0]; 

    const cardNumber: string = faker.finance.creditCardNumber('####-####-####-####');
    const expiry: string = faker.date
        .future()
        .toLocaleDateString('en-US', { month: '2-digit', year: '2-digit' });
    const cvv: string = faker.finance.creditCardCVV();

    useEffect(() => {
        if (isFrozen) {
            Animated.timing(iceAnim, {
                toValue: 1, 
                duration: 500,
                useNativeDriver: true,
            }).start();
        } else {
            Animated.timing(iceAnim, {
                toValue: 0.1,
                duration: 500,
                useNativeDriver: true,
            }).start();
        }
    }, [isFrozen, iceAnim]);

    const handleFreezeToggle = (): void => {
        setIsFrozen(prev => !prev);
        Animated.timing(fadeAnim, {
            toValue: isFrozen ? 1 : 0.3,
            duration: 300,
            useNativeDriver: true,
        }).start();
    };

    const handleCopyDetails = (): void => {
        const details = `Card Number: ${cardNumber}\nExpiry: ${expiry}\nCVV: ${cvv}`;
        Clipboard.setString(details);
        Alert.alert('Copied', 'Card details copied to clipboard!');
    };

    return (
        <View style={styles.cardContainer}>
            <Text style={styles.cardTitle}>your digital debit card</Text>

            {/* Card Section */}
            <View style={styles.cardZone}>
                <Animated.View style={[styles.cardBlock, { opacity: fadeAnim }]}>
                    <View style={[styles.cardSec, isFrozen && styles.cardFrozen]}>
                        <Animated.Image
                            source={iceCloudEffect}
                            style={[
                                styles.backgroundImage,
                                {
                                    opacity: iceAnim,
                                },
                            ]}
                        />

                        {/* Card Content - Hidden when frozen */}
                        {!isFrozen && (
                            <>
                                {/* Upper Image Section */}
                                <View style={styles.upperImg}>
                                    <Image
                                        source={require('../../assets/images/yolo.png')}
                                        style={styles.cardImage}
                                        contentFit="cover"
                                    />
                                    <Image
                                        source={require('../../assets/images/yesbank.png')}
                                        style={styles.cardImageBank}
                                        contentFit="cover"
                                    />
                                </View>

                                {/* Card Details Section */}
                                <View style={styles.cardDetails}>
                                    {/* Card Number - 4 in one row */}
                                    <View style={styles.cardNumers}>
                                        {cardNumber.split('-').map((group, index) => (
                                            <View key={index} style={styles.cardDigitGroup}>
                                                {group.split('').map((digit, i) => (
                                                    <Text key={i} style={styles.cardDigit}>
                                                        {digit}
                                                    </Text>
                                                ))}
                                            </View>
                                        ))}
                                    </View>

                                    {/* Expiry and CVV */}
                                    <View style={styles.expiryAndCvv}>
                                        {/* Expire Date */}
                                        <View>
                                            <Text style={styles.expiry}>expiry</Text>
                                            <Text style={styles.expiryDate}>{expiry}</Text>
                                        </View>

                                        {/* CVV */}
                                        <View style={styles.cvvContainer}>
                                            <Text style={styles.cvv}>cvv</Text>
                                            <View style={styles.cvvRow}>
                                                {showCVV ? (
                                                    <Text style={styles.cvvText}>{cvv}</Text>
                                                ) : (
                                                    <Text style={styles.cvvMaskedText}>***</Text>
                                                )}
                                                <Pressable onPress={() => setShowCVV((prev) => !prev)}>
                                                    <Image source={eyeIcon} style={styles.eyeIcon} />
                                                </Pressable>
                                            </View>
                                        </View>
                                    </View>
                                </View>

                                {/* Copy Clipboard */}
                                <View style={styles.copyButton}>
                                    <Image
                                        source={require('../../assets/images/copy.png')}
                                        style={{ width: 20, height: 20 }}
                                    />
                                    <Pressable onPress={handleCopyDetails}>
                                        <Text style={styles.copyText}>copy details</Text>
                                    </Pressable>
                                </View>

                                {/* Rupay Image */}
                                <View style={{ position: 'relative', flex: 1 }}>
                                    <View style={styles.rupayCard}>
                                        <Image
                                            source={require('../../assets/images/rupay.png')}
                                            style={{ width: 71, height: 34.31 }}
                                            contentFit="cover"
                                        />
                                    </View>
                                </View>
                            </>
                        )}
                    </View>
                </Animated.View>

                {/* Right Side */}
                <Pressable style={styles.cardFBtn} onPress={handleFreezeToggle}>
                    <View style={[styles.imgRound, isFrozen && styles.imgRoundActive]}>
                        <Image
                            source={isFrozen ? snowRedIcon : snowIcon}
                            style={styles.snowImage}
                            contentFit="cover"
                        />
                    </View>
                    <Text style={{ color: isFrozen ? '#A90808' : 'white' }}>
                        {isFrozen ? 'unfreeze' : 'freeze'}
                    </Text>
                </Pressable>
            </View>
        </View>
    );
};

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
    marginBottom: 10,
    fontFamily: 'Poppins',
  },
  cardZone: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '60%',
    height: 300,
  },
  cardBlock: {
    width: '100%',
    marginTop: 25,
  },
  cardSec: {
    width: '100%',
    height: 310,
    borderWidth: 1,
    borderRadius: 20,
    overflow: 'hidden',
    backgroundColor: '#1f1f1fff',
  },
  cardFrozen: {
    // borderColor: '#A90808',
  },
  backgroundImage: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    width: '100%',
    height: '100%',
    zIndex: 0,
  },
  upperImg: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 23.29,
    paddingVertical: 10,
  },
  cardImage: {
    width: 48.44,
    height: 15.29,
  },
  cardImageBank: {
    width: 48.37,
    height: 20.99,
  },
  cardDetails: {
    marginTop: 30,
    flexDirection: 'row',
    gap: 40,
    paddingHorizontal: 23.29,
  },
  cardNumers: {
    flexDirection: 'column',
    gap: 8,
  },
  cardDigitGroup: {
    flexDirection: 'row',
    marginBottom: 6,
  },
  cardDigit: {
    color: '#FFFFFF',
    fontSize: 20,
    textAlign: 'center',
    width: 12,
    fontFamily: 'NovaSquare', 
  },
  expiryAndCvv: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    flex: 1,
  },
  expiry: {
    fontSize: 10,
    color: '#9f9f9fff',
    fontFamily: 'Poppins',
  },
  expiryDate: {
    color: '#FFFFFF',
    fontSize: 20,
    paddingVertical: 3,
    fontFamily: 'Poppins',
  },
  cvvContainer: {
    marginTop: 20,
  },
  cvv: {
    color: '#ffffff',
    fontSize: 10,
    opacity: 0.6,
    marginBottom: 5,
    fontFamily: 'Poppins',
  },
  cvvRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  cvvMaskedText: {
    color: '#FFFFFF',
    fontSize: 20,
    opacity: 0.5,
    fontFamily: 'Poppins',
  },
  cvvText: {
    color: '#FFFFFF',
    fontSize: 20,
    fontFamily: 'Poppins',
  },
  eyeIcon: {
    width: 20,
    height: 20,
    tintColor: '#A90808',
  },
  copyButton: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
    marginTop: 15,
    paddingHorizontal: 23.29,
  },
  copyText: {
    color: '#A90808',
    fontFamily: 'Poppins',
  },
  rupayCard: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    padding: 15,
  },
  cardFBtn: {
    width: 70,
    marginLeft: 10,
    height: 70,
    flexDirection: 'column',
    alignItems: 'center',
    gap: 5,
  },
  snowImage: {
    width: 16,
    height: 18,
    padding: 10,
  },
  imgRound: {
    borderRadius: 50,
    paddingVertical: 20,
    paddingHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
    borderTopWidth: 1,
    borderRightWidth: 1,
    borderLeftWidth: 1,
    borderColor: '#242424ff',
  },
  imgRoundActive: {
    borderColor: '#A90808',
  },
});
