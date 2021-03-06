import React from 'react';
import {
    View,
    Text,
    StyleSheet
} from 'react-native';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';

import colors from '../styles/colors';
import fonts from '../styles/fonts';

interface EnviromentButtonProps extends RectButtonProps {
    title: string;
    active?: boolean;// ? diz que não é obrigatorio
}
export function EnviromentButton({
    title,
    active = false,
    ...rest

}: EnviromentButtonProps) {
    return (
        <RectButton
            style={
                [styles.container,
                active && styles.conteinerActive
                ]}
            {...rest}>
            <Text style={
                [styles.text,
                    active && styles.textActive
                ]}>
                {title}
            </Text>

        </RectButton>
    )
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.shape,
        width: 76,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 12,
        marginRight:5

    },
    conteinerActive: {
        backgroundColor: colors.body_light,
    },
    text: {
        color: colors.heading,
        fontFamily: fonts.text
    },
    textActive: {
        fontFamily: fonts.heading,
        color: colors.green_dark,

    }
});
