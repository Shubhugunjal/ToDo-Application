import { View, Text, Image, StyleSheet } from 'react-native'
import React, { useEffect } from 'react'


export default function Splash({ navigation }) {

    useEffect(() => {
        setTimeout(() => {
            navigation.navigate('EntryScreen');
        }, 2000)
    }, [])

    return (
        <View style={styles.container}>
            <Image source={require('../src/lunch_screen.png')}
                style={styles.img}
                resizeMode='contain' />
            <Text style={styles.text}>Shubhangi</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#000435',
    },
    img: {
        width: 400,
        height: 450,
    },
    text: {
        fontSize: 40,
        textTransform: 'uppercase',
        fontWeight: 'bold',
        color: '#FF007F',
        textShadowColor: 'white',
        textShadowOffset: { width: 3, height: 4 },
        textShadowRadius: 10,

    },
});