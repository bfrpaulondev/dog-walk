// LoginScreenStyles.js

import { StyleSheet } from 'react-native';
const colors = require("../../assets/colors")

export const LoginScreenStyles = StyleSheet.create({
    container: {
        flex: 1,
        display: "flex",
        margin: "auto",
        backgroundColor:colors.colors.bg100,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
    },
});

