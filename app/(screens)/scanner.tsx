import React from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet,
    ScrollView,
    Pressable,
    Touchable,
    Button,
    TouchableOpacity,
    ActivityIndicator
} from "react-native";
import {useState, useEffect} from 'react';
import {BarCodeScanner} from 'expo-barcode-scanner';
// @ts-ignore
import {SafeAreaView} from "react-native-safe-area-context";
import Footer from "@/components/Footer";
import {AntDesign} from "@expo/vector-icons";
import {ALERT_TYPE, Dialog} from "react-native-alert-notification";

const Scanner = ({navigation}: any) => {

    const [hasPermission, setHasPermission] = useState(null);
    const [scanned, setScanned] = useState(false);
    useEffect(() => {
        (async () => {
            const {status} = await BarCodeScanner.requestPermissionsAsync();
            // @ts-ignore
            setHasPermission(status === 'granted');
        })();
    }, []);
    const handleBarCodeScanned = ({type, data}: any) => {
        setScanned(true);
        Dialog.show({
            type: ALERT_TYPE.SUCCESS,
            title: 'Scanned',
            textBody: data,
        })
    };
    if (hasPermission === null) {
        return <Text>Requesting for camera permission</Text>;
    }
    if (hasPermission === false) {
        return <Text>No access to camera</Text>;
    }


    return (
        <SafeAreaView style={styles.container}>
            <ScrollView contentContainerStyle={styles.scrollContent}>
                <View style={{
                    display: 'flex',
                    padding: 10,
                    alignItems: 'center',
                    justifyContent: 'center',
                }}>
                    <View style={{
                        display: 'flex',
                        width: "100%",
                        flexDirection: 'row',
                        justifyContent: "space-between",
                        alignItems: "center",
                    }}>
                        <TouchableOpacity style={{
                            marginBottom: 10,
                        }}
                                          onPress={() => navigation.navigate("(screens)/homepage")}>
                            <AntDesign name="back" size={24} color="black"/>
                        </TouchableOpacity>
                        <Image
                            source={require("../../assets/images/main_logo.png")}
                            style={styles.image}
                        />
                    </View>

                    <View style={{
                        width: "100%",
                        display: 'flex',
                        alignItems: 'center',
                        paddingVertical: 10,
                        marginBottom: 24
                    }}>
                        <View style={{
                            width: "100%",
                            display: 'flex',
                            alignItems: 'flex-start',
                        }}>
                            <View style={styles.imageTextContainer}>
                                <Text style={styles.imageText}>Bank Sampah Syariah</Text>
                                <Text style={styles.imageText}>UIN Sunan Ampel Surabaya</Text>
                            </View>
                            <Text style={styles.brand}>QR Scanner</Text>
                        </View>
                    </View>
                </View>
                <View style={{
                    display: 'flex',
                    flex: 1,
                    padding: 10,
                    alignItems: 'center',
                    justifyContent: 'center',
                }}>
                    <BarCodeScanner
                        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
                        style={StyleSheet.absoluteFillObject}
                    />
                    {scanned && <Button title={'Tap to Scan Again'} onPress={() => setScanned(false)}/>}

                </View>
                <View>
                    <Image source={require('../../assets/images/3r.png')}
                           style={{
                               marginBottom: 50,
                               width: "100%",
                               height: 200,
                               objectFit: "contain",
                           }}
                    />
                </View>
                <Footer/>
            </ScrollView>
        </SafeAreaView>
    );
};

export default Scanner;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

    scrollContent: {
        flexGrow: 1,
        justifyContent: 'space-between',
    },
    backgroundImageContainer: {
        ...StyleSheet.absoluteFillObject,
        zIndex: -1,
        top: 400,
        left: 190,
    },
    backgroundImage: {
        flex: 1,
        resizeMode: 'cover',
    },
    content: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10
    },
    logoContainer: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 100,
    },
    logo: {
        width: 66,
        height: 58,
    },
    title: {
        color: "white",
        fontSize: 18,
        fontFamily: "GabaritoSemibold"
    },
    subtitle: {
        fontSize: 12,
        fontFamily: "GabaritoMedium",
        textAlign: "right"
    },
    imageContainer: {
        alignItems: 'center',
        marginBottom: 28,
    },
    image: {
        width: 150,
        height: 45,
        objectFit: 'contain',
        borderRadius: 4,
        marginBottom: 18,
    },
    imageTextContainer: {
        marginBottom: 4,
    },
    imageText: {
        fontFamily: "GabaritoSemibold",
    },
    brand: {
        fontFamily: "GabaritoBold",
        fontSize: 32,
    },
    formContainer: {
        width: '100%',
        paddingHorizontal: 10,
        marginBottom: 70,
    },
    footer: {
        position: 'absolute',
        bottom: 0,
        width: '100%',
        backgroundColor: 'green',
        alignItems: 'center',
        paddingVertical: 10,
    },
    footerText: {
        fontFamily: 'GabaritoMedium',
        fontSize: 16,
        color: 'white',
    },
    barcodeTextURL: {
        fontSize: 10,
        color: 'white',
        fontWeight: 'bold',

    },
    barCodeTextView: {
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        padding: 15,
        backgroundColor: 'red',
        borderWidth: StyleSheet.hairlineWidth,
        position: 'absolute',
        top: 50
    }
});