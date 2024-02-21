import React from 'react';
import {Text, View, StyleSheet} from "react-native";

const Title = () => {
    return (
        <View>
            <View style={styles.imageTextContainer}>
                <Text style={styles.imageText}>Bank Sampah Syariah</Text>
                <Text style={styles.imageText}>UIN Sunan Ampel Surabaya</Text>
            </View>
            <Text style={styles.brand}>Mobile Apps</Text>
        </View>
    );
};

export default Title;

const styles = StyleSheet.create({
    imageTextContainer: {
        marginBottom: 4,
    },
    imageText: {
        fontFamily: "GabaritoSemibold",
        textAlign: "center",
    },
    brand: {
        fontFamily: "GabaritoBold",
        fontSize: 24,
        textAlign: "center",
    },
})
