import React, { useState } from 'react';
import { SafeAreaView, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import wateringImg from '../assets/watering.png';
import colors from '../styles/colors';
import { Button } from '../components/Button';
export function Welcome() {

    const [visible, setVisible] = useState(false);
    function handleVisibility() {
        setVisible(true)
    }
    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>
                Gerencie{'\n'} suas plantas{'\n'} de forma fácil
            </Text>
            {
                visible &&
                <Image source={wateringImg} style={styles.imagen} />
            }
            <Text style={styles.subtitle}>
                Não esqueça mais de regar suas plantas. nós cuidamos de lembrar você sempre que precisar.
            </Text>

            <Button title=">"/>

        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    title: {
        fontSize: 32,
        fontWeight: 'bold',
        textAlign: 'center',
        color: colors.heading,
        marginTop: 38

    },
    subtitle: {
        textAlign: 'center',
        fontSize: 18,
        paddingHorizontal: 20,
        color: colors.heading
    },
    button: {
        backgroundColor: colors.green,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 16,
        marginBottom: 18,
        height: 56,
        //  width: 56
        paddingHorizontal: 10
    },
    imagen: {
        width: 292,
        height: 294
    },
    buttontex: {
        color: colors.white,
        fontSize: 14
    }
})