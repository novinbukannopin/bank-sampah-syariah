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
    TextInput, ActivityIndicator
} from "react-native";
import {SafeAreaView} from "react-native-safe-area-context";
import Title from "@/components/Title";
import {AntDesign, Feather,} from '@expo/vector-icons';
import Footer from "@/components/Footer";
import {ALERT_TYPE, AlertNotificationRoot, Dialog} from "react-native-alert-notification";
import DropdownTransfer from "@/components/DropdownTransfer";

const GreenHealth = ({navigation}: any) => {

    const [show, setShow] = React.useState(false)

    const [rekeningSumber, setRekeningSumber] = React.useState('')
    const [va, setVa] = React.useState('')
    const [loading, setLoading] = React.useState(false)

    function toggleShow() {
        setShow(!show)
    }

    const handleRekeningSumber = (value: string) => {
        setRekeningSumber(value)
    }

    function submit() {
        if (!(rekeningSumber === '' || va === '')) {
            setLoading(true)
            setTimeout(() => {
                setLoading(false)
                Dialog.show({
                    type: ALERT_TYPE.SUCCESS,
                    title: 'Success',
                    textBody: 'Transfer berhasil',
                })
                setTimeout(() => {
                    navigation.navigate("(screens)/homepage")
                }, 2000)
            }, 3000)
        } else {
            Dialog.show({
                type: ALERT_TYPE.WARNING,
                title: 'Warning',
                textBody: 'Rekening Sumber dan Nomor VA tidak boleh kosong',
            })
        }
    }

    return (
        <AlertNotificationRoot>

            <SafeAreaView style={styles.container}>
                <ScrollView contentContainerStyle={styles.scrollContent}>
                    <View style={{
                        display: 'flex',
                        flex: 1,
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
                                <Text style={styles.brand}>Green Health</Text>
                            </View>
                        </View>
                        <View style={{
                            width: "100%",
                            backgroundColor: '#15978F',
                            justifyContent: 'center',
                            alignItems: 'center',
                            padding: 8,
                            paddingVertical: 10,
                            marginBottom: 24,
                            borderRadius: 4,
                        }}>
                            <Text style={styles.title}>Green Health</Text>
                        </View>


                        <Text style={{
                            fontFamily: "GabaritoSemibold",
                            textAlign: "left",
                            width: "100%",
                            color: "#15978F",
                            fontSize: 20,
                            marginBottom: 4,
                            padding: 10,
                        }}>
                            Aksi Transfer
                        </Text>

                        <View
                            style={{
                                width: "100%",
                                display: 'flex',
                                flexDirection: 'row',
                                backgroundColor: "white",
                                paddingVertical: 22,
                                paddingHorizontal: 16,
                                gap: 16,
                                flex: 1,
                                borderRadius: 12,
                            }}>
                            <View style={{
                                width: "100%",
                            }}>
                                <Text style={{
                                    fontFamily: "GabaritoSemibold",
                                    fontSize: 16,
                                    marginBottom: 10,
                                }}>
                                    Rekening Sumber
                                </Text>
                                <DropdownTransfer onSelectValue={handleRekeningSumber}/>

                                <Text style={{
                                    fontFamily: "GabaritoSemibold",
                                    fontSize: 16,
                                    marginTop: 10,
                                    marginBottom: 10,
                                }}>
                                    Nomor VA
                                </Text>
                                <TextInput
                                    onChangeText={(text) => setVa(text)}
                                    value={va}
                                    placeholder="Nomor VA"
                                    keyboardType={"numeric"}
                                    style={{
                                        width: "100%",
                                        borderWidth: 1,
                                        borderColor: "#15978F",
                                        paddingVertical: 6,
                                        paddingHorizontal: 16,
                                        marginBottom: 10,
                                        borderRadius: 5,
                                        backgroundColor: '#fffffc',
                                        opacity: 0.8,
                                        fontFamily: 'GabaritoMedium'
                                    }}
                                />

                                <TouchableOpacity
                                    onPress={submit}
                                    style={{
                                        backgroundColor: '#15978F',
                                        paddingVertical: 10,
                                        borderRadius: 6,
                                        marginTop: 8,
                                    }}
                                >
                                    {loading ? (
                                        <ActivityIndicator size="small" color="#ffffff"/>
                                    ) : (
                                        <Text
                                            style={{
                                                color: 'white',
                                                fontFamily: 'GabaritoSemibold',
                                                fontSize: 18,
                                                textAlign: 'center',
                                            }}
                                        >Submit</Text>
                                    )}


                                </TouchableOpacity>

                            </View>

                        </View>


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
        </AlertNotificationRoot>

    );
};

export default GreenHealth;

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
});