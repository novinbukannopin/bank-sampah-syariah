import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

const Footer = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.footerText}>#ayobuangsampahdiBSS</Text>
        </View>
    );
};

export default Footer;

const styles = StyleSheet.create({
    container: {
        width: '100%',
        backgroundColor: '#15978F',
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 10,
        position: 'absolute',
        bottom: 0,
    },
    footerText: {
        fontFamily: 'GabaritoMedium',
        fontSize: 16,
        color: 'white',
    },
});
